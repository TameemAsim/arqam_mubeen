import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const service1Ref = useRef(null);
    const service2Ref = useRef(null);
    const service3Ref = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });
    const service1View = useInView(service1Ref, { amount: 0.7 });
    const service2View = useInView(service2Ref, { amount:  0.7 });
    const service3View = useInView(service3Ref, { amount: 0.7 });

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="services"
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
                <i className="las la-stream mr-2"></i>
                <h1 className="">SERVICES</h1>
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
                My <span className="text-primary_green">Specializations</span>
            </motion.h1>
            <motion.div
            ref={service1Ref}
            className="lg:mr-20 mb-3 h-fit px-12 py-11 border border-gray_left_bar hover:border-primary_green rounded-3xl"
            variants={{
                hidden: {
                    opacity: 0.3,
                    y: 60,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial="hidden"
            animate={service1View ? "visible" : "hidden"}
            transition={{
                duration: 1,
            }}
            >
                <i className="las la-bezier-curve float-right text-3xl text-primary_green"></i>
                <h1 className="text-2xl font-normal text-white mb-2">Website Design</h1>
                <h3 className="text-sm font-light text-gray_left_bar mb-7">I created digital products with unique ideas use Figma & Framer</h3>
            </motion.div>
            <motion.div
            ref={service2Ref}
            className="lg:mr-20 mb-3 h-fit px-12 py-11 border border-gray_left_bar hover:border-primary_green rounded-3xl"
            variants={{
                hidden: {
                    opacity: 0.3,
                    y: 60,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial="hidden"
            animate={service2View ? "visible" : "hidden"}
            transition={{
                duration: 1,
            }}
            >
                <i className="las la-code float-right text-3xl text-primary_green"></i>
                <h1 className="text-2xl font-normal text-white mb-2">Development</h1>
                <h3 className="text-sm font-light text-gray_left_bar mb-7">I build website go live with Framer, Webflow or WordPress</h3>
            </motion.div>
            <motion.div
            ref={service3Ref}
            className="lg:mr-20 mb-3 h-fit px-12 py-11 border border-gray_left_bar hover:border-primary_green rounded-3xl"
            variants={{
                hidden: {
                    opacity: 0.3,
                    y: 60,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial="hidden"
            animate={service3View ? "visible" : "hidden"}
            transition={{
                duration: 1,
            }}
            >
                <i className="las la-bezier-curve float-right text-3xl text-primary_green"></i>
                <h1 className="text-2xl font-normal text-white mb-2">SEO/Marketing</h1>
                <h3 className="text-sm font-light text-gray_left_bar mb-7">Increase the traffic for your website with SEO optimized</h3>
            </motion.div>
        </div>
    )
}