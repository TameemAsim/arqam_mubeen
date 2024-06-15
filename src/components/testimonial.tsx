import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react"
import Slider from "react-slick";

type TestimonialCardProps = {
    reviewerImage: string;
    reviewerName: string;
    reviewerTitle: string;
    companyOfReviewer: string;
    reviewText: string;
    projectReviewed: string;
};

const testimonials = [
    {
        reviewerImage: "testimonial-1.jpg",
        reviewerName: "Paublo Dybala",
        reviewerTitle: "CEO",
        companyOfReviewer: "Juventus FC",
        reviewText: "Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!.",
        projectReviewed: "Juventus FC Website",
    },
    {
        reviewerImage: "testimonial-2.jpg",
        reviewerName: "Christina Morillo",
        reviewerTitle: "Marketing Manager",
        companyOfReviewer: "Invision App Inc",
        reviewText: "Extremely professional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.",
        projectReviewed: "PROJECT",
    },
    {
        reviewerImage: "testimonial-3.jpg",
        reviewerName: "Phil Foden",
        reviewerTitle: "Founder",
        companyOfReviewer: "Envato LLC",
        reviewText: "Drake was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer that you can trust with any project from A-Z.",
        projectReviewed: "PROJECT",
    },
]

export function TestimonialCard({
    reviewerImage,
    reviewerName,
    reviewerTitle,
    companyOfReviewer,
    reviewText,
    projectReviewed,
}: TestimonialCardProps) {

    return (
        <div
            className="p-12 w-full border border-gray_left_bar rounded-3xl"
        >
            <div className="flex gap-3 mb-11">
                <img
                    src={reviewerImage}
                    alt="reviewerImage"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h3 className="text-lg text-white font-light">{reviewerName}</h3>
                    <h3 className="text-sm text-gray_left_bar font-normal">{reviewerTitle} of
                        &nbsp;<span className="text-primary_green">{companyOfReviewer}</span>
                    </h3>
                </div>
            </div>
            <h2 className="text-2xl font-light text-white mb-7">&ldquo; {reviewText} &rdquo;</h2>
            <h3 className="text-xs font-normal text-white">{projectReviewed}</h3>
        </div>
    )
}

const PrevArrow = (props: any) => {
    const { onClick } = props;

    return (
        <button
            className="text-lg font-black w-12 h-12 absolute bottom-[-70px] text-white hover:text-primary_green rounded-full border-2 border-gray_left_bar hover:border-primary_green"
            onClick={onClick}
        >
            <i className="las la-angle-left" />
        </button>
    )
}

const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
        <button
            className="text-lg font-black w-12 h-12 absolute bottom-[-70px] left-28 text-white hover:text-primary_green rounded-full border-2 border-gray_left_bar hover:border-primary_green"
            onClick={onClick}
        >
            <i className="las la-angle-right" />
        </button>
    )
}

export default function Testimonials() {
    const titleRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);
    const titleView = useInView(titleRef, { amount: "some" });
    const headingView = useInView(headingRef, { amount: 0.7 });
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <div
            className="sm:w-[75%] mx-auto lg:w-[95%] h-fit  pt-[8%] lg:px-5 mt-20"
            id="testimonials"
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
                <i className="lar la-comment mr-2 text-sm"></i>
                <h1 className="">TESTIMONIAL</h1>
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
                Trusted by <span className="text-primary_green">Hundered Clients</span>
            </motion.h1>
            <motion.div
                className="lg:w-[91%]"
            >
                <Slider ref={sliderRef} {...settings} afterChange={(newIndex) => setCurrentIndex(newIndex)}>
                    {testimonials.map((testimonial, index) => {

                        return (
                            <TestimonialCard
                                key={index}
                                reviewerImage={testimonial.reviewerImage}
                                reviewerName={testimonial.reviewerName}
                                reviewerTitle={testimonial.reviewerTitle}
                                companyOfReviewer={testimonial.companyOfReviewer}
                                reviewText={testimonial.reviewText}
                                projectReviewed={testimonial.projectReviewed}
                            />
                        )
                    })}
                </Slider>
                <h5 className="text-sm font-light text-gray_left_bar mt-9 ml-16">
                    <span className="text-white">{currentIndex + 1}</span> / 3
                </h5>
            </motion.div>
        </div>
    )
}