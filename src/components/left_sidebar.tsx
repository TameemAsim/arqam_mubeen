Mexport default function Left_Sidebar() {

    return (
        <div className="fixed left-[2%] bg-transparent text-white text-center border border-b-0 border-t-0 border-gray_left_bar rounded-md h-full sm:hidden lg:w-[27%] lg:block">
            <button
                className="fixed left-[1.25%] top-12 bg-primary_gray pt-2 pb-2"
            >
                <i className="las la-cog animate-spin-slow text-xl"></i>
            </button>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img src="logo.png" alt="logo" className="w-[140px] h-[35px] mt-3 md:ml-5 pr-1 pl-1" />
                </div>
                <div className="pl-0 md:pl-7 text-center">
                    <h1 className="text-sm mt-3">Team of Marketing</h1>
                    <h1 className="text-sm text-end">BBA</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="w-[70%] mt-8 rounded-3xl" src="me.jpg" alt="me" />
            </div>
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
            <button className="w-[90%] h-12 mt-8 border-2 border-primary_green text-primary_gray hover:text-primary_green bg-primary_green hover:bg-primary_gray rounded-3xl">
                <div className="flex justify-center gap-2">
                    <i className="las la-envelope text-3xl font-semibold"></i>
                    <h1 className="text-lg bg-transparent mt-1 font-medium">HIRE ME!</h1>
                </div>
            </button>
        </div>
    )
} 
