import { sideMenu } from "@/store/store";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { scrollToSection } from "./right_menu";

export default function RightSideMenu() {
    const [menuToggle, setMenuToggle] = useRecoilState(sideMenu);
    const menuRef = useRef(null);
    const menuView = useInView(menuRef);

    return (
        <div
            className={`${menuToggle ? "fixed" : "hidden"} top-0 left-0 flex w-screen h-screen z-10`}
        >
            <div className="h-screen flex-grow opacity-50" style={{ backgroundColor: "#565656" }} onClick={() => setMenuToggle(!menuToggle)}></div>
            <motion.div
                ref={menuRef}
                style={{ backgroundColor: "#191919" }}
                className="w-[345px] h-screen fixed top-0 right-0 pl-20 pt-14"
                variants={{
                    initial: {
                        x: 300,
                    },
                    visible: {
                        x: 0,
                    },
                }}
                initial="initial"
                animate={menuView ? "visible" : "initial"}
                transition={{
                    duration: 0.4,
                }}
            >
                <h2 className="text-lg font-normal text-gray_left_bar">Menu</h2>
                <div
                    className="flex gap-2 mt-9 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("introduce");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-home text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Home</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("about");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="lar la-user text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">About</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("resume");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-briefcase text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Resume</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("services");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-stream text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Services</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("skills");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-shapes text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Skills</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("portfolio");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-grip-vertical text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Portfolio</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("testimonials");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="lar la-comment text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Testimonial</h4>
                </div>
                <div
                    className="flex gap-2 mt-3 cursor-pointer group"
                    onClick={ev => {
                        ev.preventDefault();
                        scrollToSection("contact");
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <i className="las la-envelope text-xl text-gray_left_bar group-hover:text-primary_green group-focus:text-primary_green" />
                    <h4 className="text-xs text-gray_left_bar group-hover:text-white group-focus:text-white font-normal my-auto">Contact</h4>
                </div>
                <h2 className="text-lg font-normal text-gray_left_bar mt-10">Social</h2>
                <div className="flex gap-3 mt-5">
                    <a href="#">
                        <i className="lab la-twitter text-lg text-gray_left_bar hover:text-primary_green" />
                    </a>
                    <a href="#">
                        <i className="lab la-dribbble text-lg text-gray_left_bar hover:text-primary_green" />
                    </a>
                    <a href="#">
                        <i className="lab la-instagram text-lg text-gray_left_bar hover:text-primary_green" />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}