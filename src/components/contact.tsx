import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const formRef = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });
    const formView = useInView(formRef, { amount: 0.3 });
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [budget, setBudget] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = { fullName, email, phoneNumber, subject, budget, message }

        try {
            const response = await fetch('/api/send_mail', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            alert(data.message);

            if (response.status === 200) {
                setFullName("");
                setEmail("");
                setPhoneNumber("");
                setSubject("");
                setBudget("");
                setMessage("");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="sm:w-[75%] mx-auto lg:w-[95%] h-fit pt-[8%] lg:px-5 mt-20 mb-10" id="contact">
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
                <i className="las la-envelope mr-2 text-sm"></i>
                <h1 className="">CONTACT</h1>
            </motion.div>
            <motion.h1
                ref={headingRef}
                className="mt-[5%] text-white text-5xl font-light leading-snug mb-[3%]"
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
                Let's Work <span className="text-primary_green">Together!</span>
            </motion.h1>
            <h1 className="text-2xl font-light text-white mt-8 mb-[6%]">hello@drake.design</h1>
            <motion.div
                ref={formRef}
                className="lg:w-[91%]"
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
                animate={formView ? "animate" : "initial"}
                transition={{
                    duration: 0.8,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="sm:block md:flex gap-5">
                        <div className="sm:w-full md:w-1/2">
                            <label className="text-xs font-normal text-white">
                                FULL NAME <span className="text-red-600">*</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                value={fullName}
                                required
                                className="mt-2 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray"
                                placeholder="Your full name"
                                onChange={ev => {
                                    ev.preventDefault();
                                    setFullName(ev.currentTarget.value);
                                }}
                            />
                        </div>
                        <div className="sm:w-full md:w-1/2 sm:mt-7 md:mt-0">
                            <label className="text-xs font-normal text-white">
                                EMAIL <span className="text-red-600">*</span>
                            </label>
                            <br />
                            <input
                                type="email"
                                value={email}
                                required
                                className="mt-2 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray"
                                placeholder="Your email address"
                                onChange={ev => {
                                    ev.preventDefault();
                                    setEmail(ev.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="sm:block md:flex gap-5 mt-7">
                        <div className="sm:w-full md:w-1/2">
                            <label className="text-xs font-normal text-white">
                                PHONE NUMBER <span className="text-gray_left_bar font-light">Optional</span>
                            </label>
                            <br />
                            <input
                                type="tel"
                                value={phoneNumber}
                                className="mt-2 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray"
                                placeholder="Your phone number"
                                onChange={ev => {
                                    ev.preventDefault();
                                    setPhoneNumber(ev.currentTarget.value);
                                }}
                            />
                        </div>
                        <div className="sm:w-full md:w-1/2 sm:mt-7 md:mt-0">
                            <label className="text-xs font-normal text-white">
                                SUBJECT <span className="text-red-600">*</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                value={subject}
                                required
                                className="mt-2 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray"
                                placeholder="Enter your subject"
                                onChange={ev => {
                                    ev.preventDefault();
                                    setSubject(ev.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full mt-7">
                        <label className="text-xs font-normal text-white">
                            YOUR BUDGET (USD) <span className="text-gray_left_bar font-light">Optional</span>
                        </label>
                        <br />
                        <input
                            type="number"
                            value={budget}
                            className="mt-2 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray"
                            placeholder="A range budget for your project"
                            onChange={ev => {
                                ev.preventDefault();
                                setBudget(ev.currentTarget.value);
                            }}
                        />
                    </div>
                    <div className="w-full mt-7">
                        <label className="text-xs font-normal text-white">
                            MESSAGE
                        </label>
                        <textarea
                            value={message}
                            required
                            className="mt-2 w-full h-40 text-lg text-white placeholder:text-gray_left_bar placeholder:font-light focus:border-none focus:outline-none bg-primary_gray overflow-y-auto resize-none"
                            placeholder="Write your message here ..."
                            onChange={ev => {
                                ev.preventDefault();
                                setMessage(ev.currentTarget.value);
                            }}
                        />
                        <hr className="border border-gray_left_bar" />
                    </div>
                    <button
                        type="submit"
                        className="mt-14 rounded-full px-14 py-3 text-xl text-black border-2 border-primary_green bg-primary_green hover:bg-primary_gray hover:text-primary_green"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </motion.div>
        </div>
    )
}
