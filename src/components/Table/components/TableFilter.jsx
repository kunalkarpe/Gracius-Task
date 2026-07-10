import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import Button from "../../../ui/Button/Button";
import Checkbox from "../../../ui/Inputs/Checkbox";

const TableFilter = ({ icon = <></>, className, headText, label = "", options, column, setColumn, onNextClick }) => {

    const handleChange = (columnName) => {
        setColumn((prev) => (
            prev?.includes(columnName) ? prev?.filter((prevUnit) => prevUnit !== columnName) : [...prev, columnName]
        ))
    }
    const handleOnCick = () => {
        onNextClick()
    }
    return (
        <Popover as="div" className="relative">
            {({ open }) => (
                <>
                    <PopoverButton as={"button"} className={className} >{label}
                        <span className={`inline-block transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                            }`}>{icon}
                        </span>
                    </PopoverButton>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <PopoverPanel className="z-30 absolute right-10 mt-2 h-fit py-2  w-64 shadow-xl shadow-extraLightGray min-w-max  bg-white   rounded-lg">
                            {headText !== undefined ?
                                <p className="px-4 py-2 text-sm text-subHeading  font-semibold">
                                    {headText}
                                </p>
                                : <></>}
                            <section className="flex  flex-col justify-center">
                                {options.map((columnUnit, i) => (
                                    <div
                                        key={i}
                                        className="h-9 px-4 flex items-center justify-between gap-2    "

                                    >
                                        <Checkbox checked={column?.includes(columnUnit?.header)}
                                            onChange={() => handleChange(columnUnit?.header)}
                                            label={columnUnit?.header}
                                        />

                                    </div>
                                ))}
                            </section>

                            <div className="flex gap-3 items-center justify-center border-t border-borderSecondary pt-4 px-2">

                                <Button btnText={"Save View"} onClick={handleOnCick} buttonType={"primary"} className='w-full rounded-sm!  h-8!' type='submit' />
                                <Button btnText={"Cancel"} onClick={() => { }} buttonType={"secondary"} className='w-full rounded-sm! h-8!' type='button' />

                            </div>
                        </PopoverPanel>
                    </Transition>
                </>
            )}


        </Popover>
    )
}

export default TableFilter
