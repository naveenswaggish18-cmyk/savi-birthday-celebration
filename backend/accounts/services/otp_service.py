from datetime import timedelta
import secrets

from django.conf import settings
from django.utils import timezone

from accounts.models import OTP


class OTPService:

    OTP_EXPIRY_MINUTES = 5
    MAX_ATTEMPTS = 5

    @staticmethod
    def generate_otp():

        return f"{secrets.randbelow(1_000_000):06d}"

    @staticmethod
    def is_allowed_email(email):

        allowed_emails = [
            email_address
            for email_address in settings.ALLOWED_EMAILS
            if email_address
        ]

        return email.lower() in allowed_emails

    @classmethod
    def create_otp(cls, email):

        email = email.strip().lower()

        if not cls.is_allowed_email(email):
            raise ValueError("This email is not authorized.")

        OTP.objects.filter(
            email=email,
            is_verified=False
        ).update(
            is_verified=True
        )

        otp_code = cls.generate_otp()

        expires_at = timezone.now() + timedelta(
            minutes=cls.OTP_EXPIRY_MINUTES
        )

        otp = OTP.objects.create(
            email=email,
            otp=otp_code,
            expires_at=expires_at
        )

        return otp

    @classmethod
    def verify_otp(cls, email, otp_code):

        email = email.strip().lower()
        otp_code = str(otp_code).strip()

        otp = (
            OTP.objects
            .filter(
                email=email,
                otp=otp_code,
                is_verified=False
            )
            .order_by("-created_at")
            .first()
        )

        if not otp:
            return False, "Invalid OTP."

        if timezone.now() > otp.expires_at:
            return False, "OTP has expired."

        if otp.attempts >= cls.MAX_ATTEMPTS:
            return False, "Maximum verification attempts exceeded."

        otp.attempts += 1

        if otp.otp != otp_code:
            otp.save(update_fields=["attempts"])
            return False, "Invalid OTP."

        otp.is_verified = True

        otp.save(
            update_fields=[
                "attempts",
                "is_verified"
            ]
        )

        return True, "OTP verified successfully."