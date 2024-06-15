import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Introduction() {
    const introductionRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit pt-[8%] lg:px-5"
            id="introduce"
        >
            <div className="w-fit py-2 px-5 rounded-3xl flex text-white text-xs font-light items-center border border-gray_left_bar">
                <i className="las la-home mr-2"></i>
                <h1 className="">INTRODUCE</h1>
            </div>
            <h1 className="text-white mt-[5%] sm:text-5xl md:text-7xl font-light leading-tight">
                Say Hi from <span className="text-primary_green">Drake</span>,
            </h1>
            <h1 className="text-white sm:text-5xl md:text-7xl font-light leading-tight">
                Framer Designer and Developer
            </h1>
            <h1 className="text-md ml-1 text-gray_left_bar mt-[3%]">I design and code beautifully simple things and i love what i do.</h1>
            <h1 className="text-md ml-1 text-gray_left_bar">Just simple like that!</h1>
            <div className="sm:block md:flex mt-3">
                <motion.div
                    ref={ref1}
                    variants={{
                        hidden: {
                            opacity: 0.5,
                            x: -60,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <h1 className="text-primary_green font-light text-7xl md:mt-[47%]">10+</h1>
                    <h1 className="text-md font-light text-gray_left_bar mt-[1%] ml-1">YEARS OF</h1>
                    <h1 className="text-md font-light text-gray_left_bar ml-1">EXPERIENCE</h1>
                </motion.div>
                <motion.div
                    className="md:ml-20"
                    ref={ref2}
                    variants={{
                        hidden: {
                            opacity: 0.5,
                            x: 60,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <h1 className="text-primary_green font-light text-7xl md:mt-[27.5%]">182+</h1>
                    <h1 className="text-md font-light text-gray_left_bar mt-[1%] ml-1">PROJECTS COMPLETED ON</h1>
                    <h1 className="text-md font-light text-gray_left_bar ml-1">15 COUNTRIES</h1>
                </motion.div>
                <a href='#portfolio' className='sm:hidden md:block h-44 w-44 mx-auto mt-8'>
                    <img src="my_projects.jpg" alt="my_projects" className='rotate rounded-full' />
                </a>
            </div>
            <a href='#portfolio' className='sm:block md:hidden h-44 w-44 mx-auto mt-8'>
                <img src="my_projects.jpg" alt="my_projects" className='rotate rounded-full' />
            </a>
        </div>
    )
}