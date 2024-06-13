"use client"
import * as React from "react";
import {motion} from "framer-motion";
import splitString from "@util/splitString"

type typingAnimations = {
    text: string,
    color: string
}

const TypingAnimation: React.FC<typingAnimations> = ({text, color}) => {
    
    const chars = splitString(text);
    const charVariants = {
        hidden: {opacity: 0},
        reveal: {opacity: 1}
    }
    return (
        <motion.div className="max-lg:text-4xl text-5xl font-black text-shadow-xl py-8 lg:px-8 px-28 mt-16 max-lg:py-2 max-lg:px-6 max-lg:mt-4"
            initial="hidden"
            whileInView="reveal"
            transition={{staggerChildren:0.05}}
            viewport={{ once: true }}
            >         {
            chars.map((letter, index)=>{
                return (<motion.span key={index}
                    variants={charVariants}
                    transition={{duration: 0.1, ease:"easeIn"}}
                    className={color}
                >{letter}</motion.span>)
            })
            }

        </motion.div>
        
    )
}

export default TypingAnimation;