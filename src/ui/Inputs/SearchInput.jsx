import { Search } from "lucide-react"
import { useEffect, useRef } from "react";

function SearchInput({ placeholder = "Search", searchClassName = "", className = "", inputClassname = "", shortcutKey = false, value = "", onChange = () => { } }) {

    const inputRef = useRef(null)

    useEffect(() => {
        if (!shortcutKey) return
        const handleKeyDown = (e) => {
            if (document.activeElement.tagName === "INPUT") return;

            if (e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [shortcutKey]);

    return (
        <div className={`flex items-center justify-between px-2 gap-2 bg-[#42307D] rounded-sm ${className}`}>
            <div className="flex items-center justify-between ps-2 gap-2">

                <Search className={`${searchClassName} size-4 text-white`} />
                <input ref={inputRef} value={value} onChange={onChange} type="text" className={`text-white w-full h-8 outline-none text-sm ${inputClassname}`} placeholder={placeholder} />
            </div>
            {shortcutKey && (

                <span className="text-[#A3A3A3] text-xs ring-1 ring-borderSecondary py-0.5 px-1.5 rounded-xs">K</span>
            )}
        </div>
    )
}

export default SearchInput