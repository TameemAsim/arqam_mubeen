import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const skill1Ref = useRef(null);
    const skill2Ref = useRef(null);
    const skill3Ref = useRef(null);
    const skill4Ref = useRef(null);
    const skill5Ref = useRef(null);
    const skill6Ref = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });
    const skill1View = useInView(skill1Ref, { amount: 0.7 });
    const skill2View = useInView(skill2Ref, { amount: 0.7 });
    const skill3View = useInView(skill3Ref, { amount: 0.7 });
    const skill4View = useInView(skill4Ref, { amount: 0.7 });
    const skill5View = useInView(skill5Ref, { amount: 0.7 });
    const skill6View = useInView(skill6Ref, { amount: 0.7 });

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="skills"
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
                <i className="las la-shapes mr-2"></i>
                <h1 className="">SKILLS</h1>
            </motion.div>
            <motion.h1
                ref={headingRef}
                className="mt-[5%] text-white text-5xl font-light leading-snug mb-[6%]"
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
                My <span className="text-primary_green">Advantages</span>
            </motion.h1>
            <div
                className="lg:w-[90%] flex flex-wrap gap-5"
            >
                <motion.div
                    ref={skill1Ref}
                    className="sm:w-[45%] md:w-[28%] lg:w-[20%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            x: 60,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill1View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="figma.png"
                        alt="figma"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">92%</h2>
                </motion.div>
                <motion.div
                    ref={skill2Ref}
                    className="sm:w-[45%] md:w-[28%] lg:w-[20%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            y: 60,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill2View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="framer.png"
                        alt="framer"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">85%</h2>
                </motion.div>
                <motion.div
                    ref={skill3Ref}
                    className="sm:w-[45%] md:w-[28%] lg:w-[20%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            y: -60,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill3View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="webflow.png"
                        alt="webflow"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">80%</h2>
                </motion.div>
                <motion.div
                    ref={skill4Ref}
                    className="sm:w-[45%] md:w-[29%] lg:w-[21%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            x: -60,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill4View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="react.png"
                        alt="react"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">90%</h2>
                </motion.div>
                <motion.div
                    ref={skill5Ref}
                    className="sm:w-[45%] md:w-[29%] lg:w-[21%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            x: 60,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill5View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="wordpress.png"
                        alt="wordpress"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">86%</h2>
                </motion.div>
                <motion.div
                    ref={skill6Ref}
                    className="sm:w-[45%] md:w-[29%] lg:w-[21%] border border-gray_left_bar hover:border-primary_green transition duration-200 pt-14 pb-12"
                    style={{
                        borderRadius: "85px",
                    }}
                    variants={{
                        initial: {
                            opacity: 0.5,
                            y: 60,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    initial="initial"
                    animate={skill6View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="m-auto mb-7 text-lg font-normal"
                        src="laravel.png"
                        alt="laravel"
                    ></img>
                    <h2 className="text-3xl font-light text-primary_green text-center">70%</h2>
                </motion.div>
            </div>
        </div>
    )
}