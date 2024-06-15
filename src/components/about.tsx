import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: "some" });

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="about"
        >
            <motion.div
                ref={titleRef}
                className="w-fit py-2 px-5 rounded-3xl flex text-white text-xs font-light items-center border border-gray_left_bar"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 40,
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={titleView ? "animate" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                <i className="las la-user mr-2"></i>
                <h1 className="">ABOUT</h1>
            </motion.div>
            <motion.h1
                ref={headingRef}
                className="mt-[5%] text-white text-5xl font-light leading-snug"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 60,
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={headingView ? "animate" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                Every great design begin with<br></br>
                an even <span className="text-primary_green">better story</span>
            </motion.h1>
            <motion.p
                ref={headingRef}
                className="text-gray_left_bar mt-[5%] sm:pr-10 lg:pr-52"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 60,
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={headingView ? "animate" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
            </motion.p>
        </div>
    )
}