from django.core.mail import send_mail
from django.conf import settings


class EmailService:

    @staticmethod
    def send_otp(email, otp_code):

        send_mail(
            subject="✨ A Little Surprise Is Waiting For You ✨",
            message=(
                "✨ A Little Surprise Is Waiting For You ✨\n\n"
                "Hi Savi ❤️\n\n"
                "Someone left a little surprise for you...\n"
                "but there's one tiny step before you can open it. 🎁\n\n"
                "Your special access code is:\n\n"
                f"        {otp_code}\n\n"
                "🔐 This code is valid for 5 minutes.\n\n"
                "Once you're in, there's a little journey waiting for you —\n"
                "filled with memories, smiles, a few surprises,\n"
                "and something written especially for you. 🌸\n\n"
                "If you didn't request this code, you can safely ignore\n"
                "this email.\n\n"
                "────────────────────────────\n\n"
                "Made with ❤️\n"
                "Just for you, Savi\n\n"
                "P.S. Don't forget to smile before you enter. 😊"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )