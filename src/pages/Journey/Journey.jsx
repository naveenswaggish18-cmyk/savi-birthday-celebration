import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./Journey.css";

import savi10 from "../../assets/images/savi10.jpeg";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Journey() {

    const navigate = useNavigate();

    const [openLetter, setOpenLetter] = useState(false);

    const [showLetter, setShowLetter] = useState(false);

    const letterParagraphs = [

        "Happy Birthday, Savi ❤️",

        "By the time you're reading this, you've already seen all those little memories. Every photo reminded me that some moments never really fade, no matter how much time passes.",

        "I didn't make this website to bring back the past. I made it because, among all the memories I have, you will always be one of the most genuine and meaningful parts of them.",

        "Life has taken us in different directions, and that's okay. Even so, I sincerely hope your journey is filled with peace, good health, laughter, success, and people who always make you feel valued.",

        "I hope you keep smiling the way you always have. The world becomes a little brighter when you do.",

        "Thank you for every memory, every laugh, and every moment that became a small chapter in my life. Those moments will always have a special place in my heart.",

        "So today, don't think about yesterday or tomorrow. Just enjoy your birthday, make beautiful memories, laugh a little louder, and let this year be kinder to you than the last.",

        "Happy Birthday once again, Savi. I genuinely wish you nothing but happiness in everything life has waiting for you.",

        "Take care of yourself... and keep smiling. ❤️"

        ];

        useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "instant" // or use just window.scrollTo(0, 0)
            });
}, []);

    return (

      <Box className="journey-page">

    {/* Background Glow */}

    <div className="journey-glow glow-one"></div>
    <div className="journey-glow glow-two"></div>

    {/* Particles */}

    {[...Array(18)].map((_, index) => (

        <span
            key={index}
            className="journey-particle"
            style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`
            }}
        />

    ))}

    {/* Hero */}

    <motion.div

        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="journey-hero"

    >

        <Typography className="journey-title">

            ❤️ Our Story

        </Typography>

        <Typography className="journey-subtitle">

            Every picture you saw was a beautiful memory.

            <br />

            But there were also moments that meant even more to me.

        </Typography>

        <motion.div

            animate={{ y: [0, 12, 0] }}

            transition={{
                repeat: Infinity,
                duration: 1.8
            }}

            className="scroll-down"

        >

            ↓

        </motion.div>

    </motion.div>

    {/* ---------- ADD THE NEW SECTION HERE ---------- */}

    <motion.section

        className="story-section"

        initial={{ opacity: 0, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, amount: 0.35 }}

        transition={{ duration: 1 }}

    >

        <div className="story-image-container">

            <img
                src={savi10}
                alt="Together"
                className="story-image"
            />

        </div>

        <div className="story-text">

            <Typography className="story-heading">

                The First Memory ❤️

            </Typography>

            <Typography className="story-description">

                Out of all the moments life gave us,
                this is one I'll always be grateful for.

                <br /><br />

                Some memories don't need a thousand words.
                One picture is enough to bring everything back.

            </Typography>

        </div>

    </motion.section>




    <motion.section
    className="video-section"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.8 }}
>

    <Typography className="video-title">
        😁 Warning!
    </Typography>

    <Typography className="video-text">
        This video has a strange superpower...
        <br /><br />
        Every time I watch it,
        it somehow makes me smile again.
        <br /><br />
        Still works. 😂❤️
    </Typography>

    <motion.video
    className="journey-video"
    autoPlay
    muted
    loop
    playsInline
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
>
    <source
        src="/images/savi7.mp4"
        type="video/mp4"
    />

    </motion.video>

</motion.section>


            <motion.section
    className="shadow-section"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.8 }}
>

    <Typography className="shadow-title">
        🌙 A Quiet Moment
    </Typography>

    <Typography className="shadow-text">
        Not every beautiful memory needs a smile.
        <br /><br />
        Some simply stay with us...
        <br /><br />
        Quietly,
        beautifully,
        forever.
    </Typography>

    <motion.img
        src="/images/savi4.jpeg"
        alt="Shadow Memory"
        className="shadow-image"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
    />

</motion.section>


            <motion.section
    className="letter-section"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
>

    <Typography className="letter-small-title">
        💌 One Last Thing...
    </Typography>

    <Typography className="letter-small-text">
        Before you leave...
        <br />
        There's something I've wanted to tell you.
    </Typography>

    <motion.div

        className={`envelope ${openLetter ? "opened" : ""}`}

        whileHover={{
            scale: 1.05
        }}

    >

        <div className="envelope-top"></div>

        <div className="envelope-body"></div>

    </motion.div>

    {!openLetter && (

        <Button

            className="open-letter-btn"

            onClick={() => {

                setOpenLetter(true);

                setTimeout(() => {

                    setShowLetter(true);

                },700);

            }}

        >

            Open Letter ❤️

        </Button>

    )}


    <AnimatePresence>

{showLetter && (

<motion.div

className="letter-paper"

initial={{

    y:120,

    opacity:0,

    scaleY:.3

}}

animate={{

    y:0,

    opacity:1,

    scaleY:1

}}

transition={{

    duration:1,

    ease:"easeOut"

}}

>

    {letterParagraphs.map((text, index) => (

<motion.p

    key={index}

    className={index===0 ? "letter-heading" : "letter-paragraph"}

    initial={{
        opacity:0,
        y:25
    }}

    animate={{
        opacity:1,
        y:0
    }}

    transition={{
        delay:index*0.8,
        duration:.7
    }}

>

    {text}

</motion.p>

))}

<motion.div

className="letter-sign"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{
    delay:6
}}

>

With Best Wishes,

<br />

❤️ Naveen

</motion.div>

</motion.div>

)}

</AnimatePresence>
</motion.section>


<Button

onClick={()=>navigate("/final-surprise")}

className="surprise-btn"

>

One More Surprise ❤️

</Button>

</Box>
    );

}

export default Journey;