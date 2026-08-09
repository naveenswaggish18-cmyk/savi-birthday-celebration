import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "./OTPVerification.css";

function VerifyOTP() {

    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email;

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    /*
     * If someone directly opens /verify-otp
     * without coming from the email page,
     * send them back to login.
     */
    useEffect(() => {

        if (!email) {

            navigate("/login", {
                replace: true
            });

        }

    }, [email, navigate]);


    const handleVerifyOTP = async (event) => {

    event.preventDefault();

    setError("");
    setSuccess("");

    if (otp.length !== 6) {

        setError(
            "Please enter the 6-digit verification code."
        );

        return;
    }

    setLoading(true);

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/auth/verify-otp/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email: email,
                    otp: otp,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {

            throw new Error(
                data.message ||
                "Invalid verification code."
            );

        }

        setSuccess(
            "Verified! Your little surprise is ready. ❤️"
        );

        // ==========================================
        // 1-HOUR LOGIN
        // ==========================================

        const expiresAt =
            Date.now() + (60 * 60 * 1000);

        localStorage.setItem(
            "authExpiresAt",
            expiresAt.toString()
        );

        // ==========================================
        // NAVIGATE TO WELCOME
        // ==========================================

        setTimeout(() => {

            navigate("/welcome", {
                replace: true
            });

        }, 1200);

    } catch (error) {

        console.error(
            "Verify OTP Error:",
            error
        );

        setError(
            error.message ||
            "Unable to verify the code."
        );

    } finally {

        setLoading(false);

    }

};


    if (!email) {

        return null;

    }


    return (

        <Box className="verify-otp-page">

            {/* Background particles */}

            {[...Array(18)].map((_, index) => (

                <motion.span

                    key={index}

                    className="otp-particle"

                    style={{
                        left: `${Math.random() * 100}%`,
                    }}

                    animate={{
                        y: [
                            "100vh",
                            "-10vh"
                        ],
                        opacity: [
                            0,
                            0.8,
                            0
                        ]
                    }}

                    transition={{
                        duration:
                            7 + Math.random() * 5,

                        delay:
                            Math.random() * 5,

                        repeat: Infinity,

                        ease: "linear"
                    }}

                />

            ))}


            <motion.div

                className="verify-otp-card"

                initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.94
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}

                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}

            >

                <motion.div

                    className="otp-heart"

                    animate={{
                        scale: [
                            1,
                            1.15,
                            1
                        ],
                    }}

                    transition={{
                        duration: 1.8,
                        repeat: Infinity
                    }}

                >

                    🔐

                </motion.div>


                <Typography className="otp-title">

                    One Tiny Step ❤️

                </Typography>


                <Typography className="otp-subtitle">

                    I sent a little secret code to

                </Typography>


                <Typography className="otp-email">

                    {email}

                </Typography>


                <Typography className="otp-description">

                    Enter the 6-digit code from the email
                    to unlock your surprise.

                </Typography>


                <Box
                    component="form"
                    onSubmit={handleVerifyOTP}
                    className="otp-form"
                >

                    <TextField

                        fullWidth

                        label="Enter verification code"

                        value={otp}

                        onChange={(event) => {

                            const value =
                                event.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 6);

                            setOtp(value);
                            setError("");
                            setSuccess("");

                        }}

                        inputProps={{
                            maxLength: 6,
                            inputMode: "numeric"
                        }}

                        disabled={loading}

                        className="otp-input"

                    />


                    {error && (

                        <Typography className="otp-error">

                            {error}

                        </Typography>

                    )}


                    {success && (

                        <Typography className="otp-success">

                            {success}

                        </Typography>

                    )}


                    <Button

                        type="submit"

                        fullWidth

                        disabled={
                            loading ||
                            otp.length !== 6
                        }

                        className="verify-button"

                    >

                        {loading
                            ? "Unlocking..."
                            : "Unlock My Surprise ❤️"
                        }

                    </Button>

                </Box>


                <Typography className="otp-footer">

                    This little code is valid for 5 minutes. ✨

                </Typography>

            </motion.div>

        </Box>

    );

}

export default VerifyOTP;