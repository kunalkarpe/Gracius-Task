import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import Button from "../../../ui/Button/Button";
import Checkbox from "../../../ui/Inputs/Checkbox";

const TableSavedColumn = ({ className, headText = "", options, handleOnClick, setSelectedCol, selectedCol, label = "", icon = <></> }) => {

    return (
        <Popover as="div" className="relative">
            {({ open }) => (
                <> <PopoverButton as={"button"} className={className} >
                    {label}
                    <span className={`inline-block transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                        }`}>
                        {icon}
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
                        <PopoverPanel className="z-30 absolute right-0 shadow-md shadow-[#0000001A] pt-4 ring-1 ring-borderSecondary mt-2  bg-white w-66.5 rounded-sm">
                            {headText ?
                                <p className="px-4 py-2 text-sm text-subHeading  font-semibold">
                                    {headText ?? <></>}
                                </p>
                                : <></>}
                            <section>
                                {options?.map((columnUnit) => (
                                    <div
                                        key={columnUnit?.name}
                                        className="h-9 px-4 flex items-center justify-between gap-2 cursor-pointer    "

                                    >
                                        <Checkbox
                                            checked={options?.name?.includes(selectedCol)}
                                            onChange={() => setSelectedCol(columnUnit?.name)}
                                            label={columnUnit?.name}
                                        />

                                    </div>
                                ))}
                            </section>


                            <div className="flex gap-3 border-t border-borderSecondary py-4 px-3">
                                <Button btnText={"Apply"} onClick={handleOnClick} buttonType={"primary"} className='w-42.5 h-8!' type='submit' />
                                <Button btnText={"Cancel"} onClick={() => { }} buttonType={"secondary"} className='w-42.5 h-8!' type='button' />
                            </div>
                        </PopoverPanel>
                    </Transition>
                </>
            )}

        </Popover>
    )
}

export default TableSavedColumn
