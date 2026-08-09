from django.urls import path

from accounts.views import (
    SendOTPView,
    VerifyOTPView
)


urlpatterns = [

    path(
        "send-otp/",
        SendOTPView.as_view(),
        name="send-otp"
    ),

    path(
        "verify-otp/",
        VerifyOTPView.as_view(),
        name="verify-otp"
    ),

]