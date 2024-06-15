export default function Right_Menu() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="sm:hidden lg:block fixed top-1/2 right-[6%] -translate-y-1/2 bottom-auto py-6 px-3 text-xl text-gray_left_bar border border-gray_left_bar bg-primary_gray rounded-3xl z-10 bg-transparent">
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("introduce");
                }}
                className="cursor-pointer"
            >
                <i className="las la-home hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("about");
                }}
                className="cursor-pointer"
            >
                <i className="lar la-user hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("resume");
                }}
                className="cursor-pointer"
            >
                <i className="las la-briefcase hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("services");
                }}
                className="cursor-pointer"
            >
                <i className="las la-stream hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("skills");
                }}
                className="cursor-pointer"
            >
                <i className="las la-shapes hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("portfolio");
                }}
                className="cursor-pointer"
            >
                <i className="las la-grip-vertical hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("testimonials");
                }}
                className="cursor-pointer"
            >
                <i className="lar la-comment hover:text-primary_green mb-2"></i>
            </div>
            <div
                onClick={ev => {
                    ev.preventDefault();
                    scrollToSection("contact");
                }}
                className="cursor-pointer "
            >
                <i className="las la-envelope hover:text-primary_green"></i>
            </div>
        </div>
    )
}