import { atom } from "recoil";

type section = "introduce" | "about"

export const section = atom({
    key: "section",
    default: "introduce" as section
})