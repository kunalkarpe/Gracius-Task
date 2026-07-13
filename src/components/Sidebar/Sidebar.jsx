import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon, House } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/Logo.png"
import SearchInput from "../../ui/Inputs/SearchInput"
import { SIDEBAR_DATA } from "./sidebar.constant"

function Sidebar() {
    const location = useLocation()

    return (
        <aside className="h-full w-[288px] bg-linear-to-bl from-[#2C1C5F] from-70% border to-darkBlue flex flex-col min-h-0 overflow-hidden relative">

            {/* Fixed: logo */}
            <div className="border-b border-white/20 p-4 shrink-0">
                <img src={logo} className="w-32 h-fit" alt="Logo image" />
            </div>

            {/* Fixed: search + dashboard link */}
            <div className="flex flex-col p-4 pb-0 shrink-0">
                <SearchInput />
                <div className="flex border-b border-white/20 py-4 text-white">
                    <Link
                        to={"/dashboard"}
                        className={`flex gap-2 items-center text-sm hover:text-white ${location.pathname === "/dashboard" ? "text-white" : "text-white/60"}`}
                    >
                        <House className="size-4 " /> Dashboard
                    </Link>
                </div>
            </div>

            {/* Scrollable: the nav list */}
            <section className="flex-1 min-h-0 overflow-y-auto px-4 pb-4">
                <div className="flex flex-col gap-2 py-2">
                    {SIDEBAR_DATA?.map((sideUnit) => {
                        const hasSubMenu = sideUnit?.children?.length > 0
                        const ICON = sideUnit?.icon

                        // does the current path match any child of this section?
                        const isChildActive = sideUnit?.children?.some(
                            (child) => location.pathname.startsWith(child?.path)
                        )

                        return (
                            <div className="text-sm" key={sideUnit?.label}>
                                {!hasSubMenu ? (
                                    <Link
                                        to={sideUnit?.path}
                                        className={`flex gap-2 items-center hover:text-white ${location.pathname === sideUnit?.path ? "text-white" : "text-white/60"}`}
                                    >
                                        <ICON className="size-4 " /> {sideUnit?.label}
                                    </Link>
                                ) : (
                                    <Disclosure defaultOpen={isChildActive}>
                                        {({ open }) => (<>
                                            <DisclosureButton className={`py-2 flex justify-between w-full gap-2 items-center group ${isChildActive ? "text-white" : "text-white/60"}`}>
                                                <p className="flex gap-2 items-center">
                                                    <ICON className="size-4 " /> {sideUnit?.label}
                                                </p>
                                                <ChevronDownIcon className="size-4 group-data-open:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="text-gray-500" static={isChildActive || open}>
                                                {sideUnit?.children?.map((childUnit) => {
                                                    const CHILDICON = childUnit?.icon
                                                    const isActive = location.pathname === childUnit?.path
                                                    return (
                                                        <Link
                                                            key={childUnit?.label}
                                                            to={childUnit?.path}
                                                            className={`flex gap-2 items-center hover:text-white hover:bg-white/60 py-2 ps-6 ${isActive ? "text-white bg-white/10" : "text-white/60"}`}
                                                        >
                                                            <CHILDICON className="size-4 " /> {childUnit?.label}
                                                        </Link>
                                                    )
                                                })}
                                            </DisclosurePanel>
                                        </>)}

                                    </Disclosure>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Sidebar