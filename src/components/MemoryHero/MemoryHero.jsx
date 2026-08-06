import { Box, Typography } from "@mui/material";

import "./MemoryHero.css";

function MemoryHero() {
    return (
        <Box className="memory-hero">

            <Typography className="memory-hero-title">
                Timeless Moments
                <span className="memory-heart"> 🤍</span>
            </Typography>

            <Typography className="memory-hero-subtitle">
                Some memories deserve to last forever.
            </Typography>

            <Box className="scroll-indicator">

                <span className="mouse">
                    <span className="wheel"></span>
                </span>

                <Typography className="scroll-text">
                    Scroll Down
                </Typography>

            </Box>

        </Box>
    );
}

export default MemoryHero;