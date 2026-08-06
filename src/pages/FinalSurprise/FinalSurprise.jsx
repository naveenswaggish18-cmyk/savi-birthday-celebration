import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FinalSurprise.css";
import { useEffect } from "react";
import confetti from "canvas-confetti";

// import { useState } from "react";

function FinalSurprise(){

    const [showFinalText, setShowFinalText] = useState(false);

    const [showBirthday, setShowBirthday] = useState(false);

    useEffect(()=>{

    if(showBirthday){


        const duration = 5000;

        const end = Date.now() + duration;


        const timer = setInterval(()=>{


            if(Date.now() > end){

                clearInterval(timer);

                return;

            }


            confetti({

                particleCount:50,

                spread:70,

                startVelocity:30,

                origin:{

                    x:Math.random(),

                    y:0

                }

            });


        },250);



        return ()=>clearInterval(timer);


    }


},[showBirthday]);

    return (

        <div className="final-surprise-page">


            <AnimatePresence mode="wait">


            {!showFinalText ? (

                <motion.div

                    key="memory"

                    className="opening-message"

                    initial={{
                        opacity:0,
                        y:50
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    exit={{
                        opacity:0,
                        y:-50
                    }}

                    transition={{
                        duration:1.5
                    }}


                    onAnimationComplete={()=>{

                        setTimeout(()=>{

                            setShowFinalText(true);

                        },3000)

                    }}

                >

                    <h1>

                        Some people become memories,

                        <br />

                        some become a beautiful part

                        <br />

                        of our story.

                    </h1>


                </motion.div>


            ) : (


                <motion.div

                    key="final"

                    className="opening-message"

                    initial={{

                        opacity:0,

                        scale:0.8

                    }}

                    animate={{

                        opacity:1,

                        scale:1

                    }}

                    transition={{

                        duration:1.5

                    }}

                >

                    <h1>

    But finally...

    <br />

    it's you ❤️

</h1>


<motion.p

className="birthday-reveal"

initial={{
    opacity:0,
    y:30
}}

animate={{
    opacity:1,
    y:0
}}

transition={{
    delay:1.5,
    duration:1
}}

onAnimationComplete={()=>{

    setTimeout(()=>{

        setShowBirthday(true);

    },1500)

}}

>

</motion.p>

{

showBirthday && (

<motion.div

className="birthday-title"

initial={{

opacity:0,

scale:0.5

}}

animate={{

opacity:1,

scale:1

}}

transition={{

duration:1.2

}}

>

<h1>

Happy Birthday Savi ❤️🎂

</h1>


</motion.div>

)

}


                </motion.div>


            )}


            </AnimatePresence>


        </div>

    );

}


export default FinalSurprise;