import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import "./MemoryStory.css";

function MemoryStory({

    title,
    caption,
    images,
    direction = "right"

}) {

    const variants = {

        hidden: {

            opacity: 0,

            x: direction === "right" ? 250 : -250

        },

        visible: {

            opacity: 1,

            x: 0

        },

        exit: {

            opacity: 0,

            y: -150

        }

    };

    return (

        <section className="story-section">

            <motion.div

                className="story-card"

                variants={variants}

                initial="hidden"

                whileInView="visible"

                viewport={{

                    amount: 0.65,

                    once: true

                }}

                transition={{

                    duration: 0.9

                }}

            >

                <Typography className="story-title">

                    {title}

                </Typography>

                <Box

                    className={`story-images ${
                        images.length === 1
                            ? "single"
                            : "double"
                    }`}
                >

                    {images.map((image, index) => (

                        <motion.img

                            key={index}

                            src={image.image}

                            alt={image.title}

                            whileHover={{

                                scale: 1.03

                            }}

                            transition={{

                                duration: .35

                            }}

                        />

                    ))}

                </Box>

                <Typography className="story-caption">

                    {caption}

                </Typography>

            </motion.div>

        </section>

    );

}

export default MemoryStory;