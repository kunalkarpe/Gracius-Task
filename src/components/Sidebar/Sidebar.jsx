import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon, House, SearchIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/Logo.png"
import SearchInput from "../../ui/Inputs/SearchInput"
import useRoutesHandler from "../../utility/urUtility"
import { SIDEBAR_DATA } from "./sidebar.constant"

function Sidebar() {
    const { location } = useRoutesHandler()
    const [isHovered, setIsHovered] = useState(false)

    function useIsLargeScreen() {
        const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

        useEffect(() => {
            const handleResize = () => {
                setIsLarge(window.innerWidth >= 1024);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isLarge;
    }
    const isLargeScreen = useIsLargeScreen()
    const isExpanded = isHovered || isLargeScreen

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                h-full bg-linear-to-bl from-[#2C1C5F] from-70% border to-darkBlue
                flex flex-col min-h-0 overflow-hidden
                transition-all duration-300 ease-in-out
                ${isHovered ? "w-[288px] absolute z-50 shadow-2xl" : "w-16 relative z-0"}
                lg:w-[288px] lg:relative lg:z-auto
            `}
        >
            {/* Fixed: logo */}
            <div className="border-b border-white/20 p-4  flex items-center">
                <img
                    src={logo}
                    className={`
            transition-all duration-300
            ${isExpanded ? "w-32" : "w-8"}
            lg:w-32
        `}
                    alt="Logo image"
                />
            </div>

            {/* Fixed: search + dashboard link */}
            <div className="flex  flex-col p-4 pb-0">
                <div
                    className={`w-full overflow-hidden transition-all duration-300 lg:opacity-100 lg:max-h-20`}
                >
                    {isExpanded ? (
                        <SearchInput className="w-full" />
                    ) : (
                        <SearchIcon className="size-5 text-white/60" />
                    )}

                </div>
                <div className="flex border-b border-white/20 py-4    text-white">
                    <Link
                        to={"/dashboard"}
                        className={`flex gap-2 items-center text-sm hover:text-white      ${location.pathname === "/dashboard" ? "text-white" : "text-white/60"}`}
                    >
                        <House className="lg:size-4 md:size-5     " />
                        <span
                            className={`
                                whitespace-nowrap overflow-hidden transition-all duration-300
                                ${isExpanded ? "opacity-100 w-auto ml-0" : "opacity-0 w-0"}
                                lg:opacity-100 lg:w-auto
                            `}
                        >
                            Dashboard
                        </span>
                    </Link>
                </div>
            </div>

            {/* Scrollable: the nav list */}
            <section className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden  px-4 pb-4">
                <div className="flex flex-col lg:gap-2 sm:gap-4 py-2">
                    {SIDEBAR_DATA?.map((sideUnit) => {
                        const hasSubMenu = sideUnit?.children?.length > 0
                        const ICON = sideUnit?.icon

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
                                        <ICON className="lg:size-4 sm:size-5  md:size-5   " />
                                        <span
                                            className={`
                                                whitespace-nowrap overflow-hidden transition-all duration-300
                                                ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
                                                lg:opacity-100 lg:w-auto
                                            `}
                                        >
                                            {sideUnit?.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <Disclosure
                                        key={`${sideUnit?.label}-${isExpanded ? "expanded" : "collapsed"}`}
                                        defaultOpen={isExpanded && isChildActive}
                                    >
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton
                                                    className={`py-2 flex justify-between w-full gap-2 items-center group ${isChildActive ? "text-white" : "text-white/60"}`}
                                                >
                                                    <p className="flex gap-2 items-center overflow-hidden">
                                                        <ICON className="lg:size-4 md:size-5  sm:size-5  shrink-0 " />
                                                        <span
                                                            className={`
                                                                whitespace-nowrap overflow-hidden transition-all duration-300
                                                                ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
                                                                lg:opacity-100 lg:w-auto
                                                            `}
                                                        >
                                                            {sideUnit?.label}
                                                        </span>
                                                    </p>
                                                    <ChevronDownIcon
                                                        className={`
                                                            size-4      transition-all duration-300 group-data-open:rotate-180
                                                            ${isExpanded ? "opacity-100 w-4" : "opacity-0 w-0"}
                                                            lg:opacity-100 lg:w-4
                                                        `}
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel
                                                    className={`text-gray-500 overflow-hidden transition-all duration-300 ${(isExpanded && open) ? "max-h-96" : "max-h-0"} lg:max-h-96`}
                                                    static
                                                >
                                                    {sideUnit?.children?.map((childUnit) => {
                                                        const CHILDICON = childUnit?.icon
                                                        const isActive = location.pathname === childUnit?.path
                                                        return (
                                                            <Link
                                                                key={childUnit?.label}
                                                                to={childUnit?.path}
                                                                className={`flex gap-2 items-center hover:text-white hover:bg-white/60 py-2 ps-6 ${isActive ? "text-white bg-white/10" : "text-white/60"}`}
                                                            >
                                                                <CHILDICON className="lg:size-4 md:size-5   sm:size-5  " />
                                                                <span className="whitespace-nowrap">{childUnit?.label}</span>
                                                            </Link>
                                                        )
                                                    })}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Sidebar