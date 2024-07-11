export default function Contact_Card() {

    return (
        <div className="sm:block lg:hidden border border-gray_left_bar rounded-3xl w-[75%] mx-auto mt-10 bg-transparent text-white">
            <div className="flex mt-4 sm:mx-3 md:mx-5">
                <div className="basis-1/2 flex justify-start">
                    <img src="logo.png" alt="logo" className="w-[140px] h-[35px]" />
                </div>
                <div className="basis-1/2 flex justify-end">
                    <div className="text-white">
                        <h1 className="text-sm">Framer Designer</h1>
                        <h1 className="text-sm text-end">& Developer</h1>
                    </div>
                </div>
            </div>
            <img src="me.jpg" alt="me" className="rounded-3xl w-auto max-w-[250px] mt-5 mx-auto" />
            <div className="mt-10 text-center">
                <h1 className="text-2xl font-light">hello@drake.design</h1>
                <h1 className="text-2xl font-light">Based in Los Angeles, CA</h1>
                <h1 className="mt-7 text-sm text-gray_left_bar">&copy; 2022 Drake. All Rights Reserved</h1>
            </div>
            <div className="mt-7 flex justify-center gap-2">
                <a href="#" className="w-12 h-12 rounded-full border hover:border-2 text-gray_left_bar hover:text-primary_green border-gray_left_bar hover:border-primary_green flex justify-center items-center">
                    <i className="lab la-twitter text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border hover:border-2 text-gray_left_bar hover:text-primary_green border-gray_left_bar hover:border-primary_green flex justify-center items-center">
                    <i className="lab la-dribbble text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border hover:border-2 text-gray_left_bar hover:text-primary_green border-gray_left_bar hover:border-primary_green flex justify-center items-center">
                    <i className="lab la-instagram text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border hover:border-2 text-gray_left_bar hover:text-primary_green border-gray_left_bar hover:border-primary_green flex justify-center items-center">
                    <i className="lab la-github text-xl"></i>
                </a>
            </div>
            <div className="w-full flex justify-center">
                <button className="w-[90%] h-12 my-8 border-2 border-primary_green text-primary_gray hover:text-primary_green bg-primary_green hover:bg-primary_gray rounded-3xl">
                    <div className="flex justify-center gap-2">
                        <i className="las la-envelope text-3xl font-semibold"></i>
                        <h1 className="text-lg bg-transparent mt-1 font-medium">HIRE ME!</h1>
                    </div>
                </button>
            </div>
        </div>
    )
}
// Finish