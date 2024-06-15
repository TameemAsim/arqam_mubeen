import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const portfolio1Ref = useRef(null);
    const portfolio2Ref = useRef(null);
    const portfolio3Ref = useRef(null);
    const portfolio4Ref = useRef(null);
    const portfolio5Ref = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });
    const portfolio1View = useInView(portfolio1Ref, { amount: 0.7 });
    const portfolio2View = useInView(portfolio2Ref, { amount: 0.7 });
    const portfolio3View = useInView(portfolio3Ref, { amount: 0.7 });
    const portfolio4View = useInView(portfolio4Ref, { amount: 0.7 });
    const portfolio5View = useInView(portfolio5Ref, { amount: 0.7 });

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="portfolio"
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
                <i className="las la-grip-vertical mr-2"></i>
                <h1 className="">PORTFOLIO</h1>
            </motion.div>
            <motion.h1
                ref={headingRef}
                className="mt-[5%] text-white text-5xl font-light leading-snug mb-[6%]"
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
                animate={headingView ? "animate" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                Featured <span className="text-primary_green">Projects</span>
            </motion.h1>
            <motion.div
                ref={portfolio1Ref}
                className="lg:w-[91%] h-fit group cursor-pointer mb-16"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 6,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={portfolio1View ? "visible" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                <img
                    className="w-full rounded-3xl"
                    src="portfolio1.jpg"
                    alt="portfolio1"
                ></img>
                <div
                    className="w-fit relative sm:bottom-8 sm:left-2 md:bottom-14 md:left-4 flex gap-3"
                >
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">Figma</h3>
                    </a>
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">Framer</h3>
                    </a>
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">Wordpress</h3>
                    </a>
                </div>
                <a
                    href="#"
                    className="text-2xl font-light text-white hover:underline"
                >
                    Bureau - Architecture Studio Website
                </a>
            </motion.div>
            <div
                className="sm:block md:flex lg:w-[91%] md:gap-5 mb-16"
            >
                <motion.div
                    ref={portfolio2Ref}
                    className="flex-grow h-fit group cursor-pointer sm:mb-16 md:mb-0"
                    variants={{
                        initial: {
                            opacity: 0.5,
                            x: -50,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        }
                    }}
                    initial="initial"
                    animate={portfolio2View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="w-full rounded-3xl"
                        src="portfolio2.jpg"
                        alt="portfolio2"
                    ></img>
                    <div
                        className="w-fit relative sm:bottom-8 sm:left-2 md:bottom-14 md:left-4 flex gap-3"
                    >
                        <a
                            href="#"
                            className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                        >
                            <h3 className="sm:text-xs md:text-sm font-normal">Wordpress</h3>
                        </a>
                        <a
                            href="#"
                            className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                        >
                            <h3 className="sm:text-xs md:text-sm font-normal">Larevel/PHP</h3>
                        </a>
                    </div>
                    <a
                        href="#"
                        className="text-2xl font-light text-white hover:underline"
                    >
                        Moonex WordPress Theme
                    </a>
                </motion.div>
                <motion.div
                    ref={portfolio3Ref}
                    className="flex-grow h-fit group cursor-pointer"
                    variants={{
                        initial: {
                            opacity: 0.5,
                            x: 50,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        }
                    }}
                    initial="initial"
                    animate={portfolio3View ? "visible" : "initial"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <img
                        className="w-full rounded-3xl"
                        src="portfolio3.jpg"
                        alt="portfolio3"
                    ></img>
                    <div
                        className="w-fit relative sm:bottom-8 sm:left-2 md:bottom-14 md:left-4 flex gap-3"
                    >
                        <a
                            href="#"
                            className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                        >
                            <h3 className="sm:text-xs md:text-sm font-normal">Figma</h3>
                        </a>
                        <a
                            href="#"
                            className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                        >
                            <h3 className="sm:text-xs md:text-sm font-normal">Webflow</h3>
                        </a>
                    </div>
                    <a
                        href="#"
                        className="text-2xl font-light text-white hover:underline"
                    >
                        Taskly Dashboard
                    </a>
                </motion.div>
            </div>
            <motion.div
                ref={portfolio4Ref}
                className="lg:w-[91%] h-fit group cursor-pointer mb-16"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 40,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={portfolio4View ? "visible" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                <img
                    className="w-full rounded-3xl"
                    src="portfolio4.jpg"
                    alt="portfolio4"
                ></img>
                <div
                    className="w-fit relative sm:bottom-8 sm:left-2 md:bottom-14 md:left-4 flex gap-3"
                >
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">Figma</h3>
                    </a>
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">React</h3>
                    </a>
                </div>
                <a
                    href="#"
                    className="text-2xl font-light text-white hover:underline"
                >
                    Hinterland - Real State Site Redesign
                </a>
            </motion.div>
            <motion.div
                ref={portfolio5Ref}
                className="lg:w-[91%] h-fit group cursor-pointer mb-16"
                variants={{
                    initial: {
                        opacity: 0.5,
                        y: 40,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                initial="initial"
                animate={portfolio5View ? "visible" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                <img
                    className="w-full rounded-3xl"
                    src="portfolio5.jpg"
                    alt="portfolio5"
                ></img>
                <div
                    className="w-fit relative sm:bottom-8 sm:left-2 md:bottom-14 md:left-4 flex gap-3"
                >
                    <a
                        href="#"
                        className="rounded-full sm:py-1 sm:px-3 md:py-2 md:px-5 bg-white text-black group-hover:bg-primary_gray group-hover:text-white transition duration-400"
                    >
                        <h3 className="sm:text-xs md:text-sm font-normal">Framer</h3>
                    </a>
                </div>
                <a
                    href="#"
                    className="text-2xl font-light text-white hover:underline"
                >
                    Lewis Portfolio Framer Template
                </a>
            </motion.div>
        </div>
    )
}