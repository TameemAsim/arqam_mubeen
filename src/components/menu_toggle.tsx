import { sideMenu } from "@/store/store"
import { useRecoilState } from "recoil"

export default function MenuToggle() {
    const [menuToggle, setMenuToggle] = useRecoilState(sideMenu);

    return (
        <div
            className="px-3 py-4 rounded-full fixed sm:top-12 md:top-14 sm:right-3 md:right-[6%] cursor-pointer bg-primary_gray border hover:border-2 border-gray_left_bar hover:border-primary_green"
            onClick={() => setMenuToggle(!menuToggle)}
        >
            <hr className="w-5 h-[2px] text-gray_left_bar mb-2" />
            <hr className="w-5 h-[2px] text-gray_left_bar" />
        </div>
    )
}