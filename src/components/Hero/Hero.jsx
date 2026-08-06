import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <Box className="hero">

            <motion.div
                className="hero-container"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <Typography className="hero-heading">
                    HAPPY BIRTHDAY
                </Typography>

                <Typography className="hero-name">
                    Savitha
                </Typography>

                <Typography className="hero-quote">
                    Some people become beautiful memories,
                    no matter where life takes them.
                </Typography>

                <Typography className="hero-message">
                    Today is all about celebrating you.
                </Typography>

                <Button
                    variant="contained"
                    className="hero-button"
                    onClick={() => navigate("/memories")}
                >
                    Open Your Surprise
                </Button>

            </motion.div>

        </Box>
    );
}

export default Hero;