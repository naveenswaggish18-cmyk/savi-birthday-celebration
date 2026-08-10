import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./EmailLogin.css";

function EmailLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSendOTP = async (event) => {

        event.preventDefault();

        setError("");

        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {

            setError("Please enter your email address.");

            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                "https://savi-birthday-celebration-oqtw-five.vercel.app/api/auth/send-otp/",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: normalizedEmail,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message ||
                    data.email?.[0] ||
                    "Unable to send OTP."
                );

            }

            /*
             * OTP successfully sent.
             *
             * We are passing the email to the OTP page
             * using React Router state.
             */

            navigate("/verify-otp", {
                state: {
                    email: normalizedEmail,
                },
            });

        } catch (error) {

            console.error("Send OTP Error:", error);

            setError(
                error.message ||
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <Box className="email-login-page">

            <motion.div
                className="email-login-card"

                initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.95
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

                    className="login-heart"

                    animate={{
                        scale: [1, 1.12, 1]
                    }}

                    transition={{
                        duration: 1.8,
                        repeat: Infinity
                    }}

                >

                    💌

                </motion.div>


                <Typography className="login-title">

                    A Little Surprise Awaits...

                </Typography>


                <Typography className="login-subtitle">

                    Before you enter, I just need to make sure
                    this little surprise is meant for you. ❤️

                </Typography>


                <Box
                    component="form"
                    onSubmit={handleSendOTP}
                    className="login-form"
                >

                    <TextField

                        fullWidth

                        type="email"

                        label="Your email"

                        value={email}

                        onChange={(event) => {

                            setEmail(event.target.value);

                            setError("");

                        }}

                        disabled={loading}

                    />


                    {error && (

                        <Typography className="login-error">

                            {error}

                        </Typography>

                    )}


                    <Button

                        type="submit"

                        fullWidth

                        disabled={loading}

                        className="send-otp-button"

                    >

                        {loading
                            ? "Sending your surprise..."
                            : "Send Me the Surprise ❤️"
                        }

                    </Button>

                </Box>


                <Typography className="login-footer">

                    A tiny verification before the memories begin ✨

                </Typography>

            </motion.div>

        </Box>

    );
}

export default EmailLogin;