from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.serializers import (
    SendOTPSerializer,
    VerifyOTPSerializer
)
from accounts.services.email_service import EmailService
from accounts.services.otp_service import OTPService


class SendOTPView(APIView):

    def post(self, request):

        serializer = SendOTPSerializer(
            data=request.data
        )

        if not serializer.is_valid():

            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        email = serializer.validated_data["email"]

        try:

            otp = OTPService.create_otp(email)

            EmailService.send_otp(
                email=email,
                otp_code=otp.otp
            )

            return Response(
                {
                    "message": "OTP has been sent successfully."
                },
                status=status.HTTP_200_OK
            )

        except Exception as e:

            print("OTP ERROR:", repr(e))

            return Response(
                {
                    "message": str(e)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class VerifyOTPView(APIView):

    def post(self, request):

        serializer = VerifyOTPSerializer(
            data=request.data
        )

        if not serializer.is_valid():

            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        email = serializer.validated_data["email"]
        otp_code = serializer.validated_data["otp"]

        try:

            is_verified, message = OTPService.verify_otp(
                email=email,
                otp_code=otp_code
            )

            if not is_verified:

                return Response(
                    {
                        "message": message
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )

            return Response(
                {
                    "message": message
                },
                status=status.HTTP_200_OK
            )

        except Exception as e:

            print("VERIFY OTP ERROR:", repr(e))

            return Response(
                {
                    "message": "Unable to verify OTP."
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )