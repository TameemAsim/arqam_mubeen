import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function Resume() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const experiencesRef = useRef([]);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });

    const experiences = [
        {
            date: "2020 - Present",
            jobs: [
                {
                    position: "Framer Desinger & Developer",
                    company: "Brunodee Agency",
                },
                {
                    position: "Front-End WordPress Developer",
                    company: "Envato Market",
                },
            ],
        },
        {
            date: "2013 - 2019",
            jobs: [
                {
                    position: "Webflow Developer & Co-Founder",
                    company: "Designflow Studio",
                },
                {
                    position: "Web Designer",
                    company: "Freelance",
                },
                {
                    position: "Leader Team of Marketing",
                    company: "AHA Marketing Agency",
                },
            ],
        },
        {
            date: "2010 - 2013",
            jobs: [
                {
                    position: "Bachelor Degree of Information Technology",
                    company: "US RMIT University",
                },
            ],
        },
    ];

    const experiencesView = experiences.map((_, index) => {
        // @ts-ignore
        experiencesRef.current[index] = useRef(null);
        return useInView(experiencesRef.current[index], { amount: 0.01 });
    });

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="resume"
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
                <i className="las la-briefcase mr-2"></i>
                <h1 className="">RESUME</h1>
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
                Education & <span className="text-primary_green">Experience</span>
            </motion.h1>
            <div>
                {experiences.map((experience, index) => {
                    return (
                        <motion.div
                            key={index}
                            ref={experiencesRef.current[index]}
                            className="h-fit w-full pl-16 group pb-5 mb-4"
                            variants={{
                                hidden: {
                                    opacity: 0.3,
                                    x: 60,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                            initial="hidden"
                            animate={experiencesView[index] ? "visible" : "hidden"}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <div className="rounded-full h-3 w-3 bg-gray_left_bar group-hover:bg-primary_green relative top-[18px] right-16"></div>
                            <h3
                                className="font-light text-gray_left_bar group-hover:text-primary_green mb-6"
                                style={{
                                    fontSize: "16px",
                                }}
                            >
                                {experience.date}
                            </h3>
                            {experience.jobs.map((job, jobIndex) => {
                                return (
                                    <div key={jobIndex}>
                                        <h1 className="text-2xl font-light text-white mb-1">{job.position}</h1>
                                        <h2 className="text-sm font-normal text-gray_left_bar mb-5">{job.company}</h2>
                                    </div>
                                )
                            })}
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}