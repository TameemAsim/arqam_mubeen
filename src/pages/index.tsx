import { RecoilRoot } from "recoil";

import About from "@/components/about";
import Contact_Card from "@/components/contact_card";
import Introduction from "@/components/introduction";
import Left_Sidebar from "@/components/left_sidebar";
import Right_Menu from "@/components/right_menu";
import Resume from "@/components/resume";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonial";
import Contact from "@/components/contact";
import MenuToggle from "@/components/menu_toggle";
import RightSideMenu from "@/components/right_side_menu";

export default function Home() {

  return (
    <RecoilRoot>
      <div className="sm:ml-0 lg:ml-[30%]">
        <Left_Sidebar />
        <Contact_Card />
        <Introduction />
        <MenuToggle />
        <RightSideMenu />
        <Right_Menu />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </RecoilRoot>

  );
}
