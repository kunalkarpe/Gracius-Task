import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
const Selector = ({ handleChange, value, options, }) => {
    return (
        <div className="relative w-full">
            <Listbox value={value} onChange={(e) => handleChange(e)}>
                <ListboxButton className='md:h-9 md:w-16 sm:w-12 sm:h-8 rounded-sm   ring-1 ring-[#D4D4D4] flex items-center justify-around  text-center'>{value} <ChevronDown className="size-4" /> </ListboxButton>
                <ListboxOptions
                    className={clsx(
                        "w-(--button-width) [--anchor-gap:4px] shadow-md border bg-white border-borderSecondary rounded-sm max-h-48 overflow-y-auto outline-none z-50 absolute p-2",

                    )}
                    anchor={"top"}
                >
                    {options.map((optUnit) => (
                        <ListboxOption key={optUnit} value={optUnit} className="data-focus:bg-primary/20 text-primary rounded-sm h-6 flex items-center font-semibold text-sm ps-2">
                            {optUnit}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div >
    )
}

export default Selector
