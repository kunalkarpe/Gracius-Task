import { Bell } from "lucide-react"
import Women from "../../assets/women.jpg"
import Accordion from "../../ui/Accordian/Accordian"
import { NAVBAR_DATA } from "./navbar.constant"
function Navbar() {
    return (
        <nav className="h-17 flex items-center justify-between pl-5 pr-6">
            <div className="flex gap-4">
                {NAVBAR_DATA?.map((navUnit) => {
                    const ICON = navUnit?.icon
                    return (
                        <Accordion key={navUnit?.id} data={null} className="w-58 ring-1 ring-[#D4D4D4] px-2 rounded-sm text-black! text-sm! font-medium" icon={<ICON className="size-6 text-[#A3A3A3]" />} chevronClass="text-[#A3A3A3]" label={navUnit?.label} />
                    )
                })}

            </div>
            <div className="flex gap-6 items-center">
                <div className="flex relative">

                    <Bell className="size-4 text-[#A3A3A3]" />
                    <span className="bg-[#DC2626] rounded-full p-0.5 size-4 flex items-center justify-center text-xs text-white -top-3 left-3 absolute">2</span>
                </div>
                <img src={Women} className="h-8 rounded-full" alt="women image" />
            </div>
        </nav>
    )
}

export default Navbar