from django.conf import settings
from rest_framework import serializers


class SendOTPSerializer(serializers.Serializer):

    email = serializers.EmailField()

    def validate_email(self, value):

        email = value.strip().lower()

        allowed_emails = [
            email_address
            for email_address in settings.ALLOWED_EMAILS
            if email_address
        ]

        if email not in allowed_emails:
            raise serializers.ValidationError(
                "This email is not authorized."
            )

        return email

class VerifyOTPSerializer(serializers.Serializer):

    email = serializers.EmailField()

    otp = serializers.CharField(
        max_length=6,
        min_length=6
    )