import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import "./ContinueJourney.css";

function ContinueJourney() {

    const navigate = useNavigate();

    return (

        <Box className="continue-page">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >

                <Typography className="continue-title">
                    The Story Doesn't End Here ✨
                </Typography>

                <Typography className="continue-subtitle">
                    Every beautiful memory has brought us to this moment.
                    <br />
                    Let's continue the journey together.
                </Typography>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >

                    <Button
                        className="continue-btn"
                        endIcon={<ArrowForward />}
                        onClick={() => navigate("/journey")}
                    >
                        Continue Journey
                    </Button>

                </motion.div>

            </motion.div>

        </Box>

    );

}

export default ContinueJourney;