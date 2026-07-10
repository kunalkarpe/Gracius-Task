import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";


const Accordion = ({ label, data, className = "", icon = <></>, chevronClass = "" }) => {
    return (
        <div className="flex w-full">

            <Disclosure >
                <DisclosureButton className={`py-2 flex gap-2 items-center justify-between  group ${className}`}> {icon ?? <></>} {label} <ChevronDownIcon className={`${chevronClass} size-4 group-data-open:rotate-180 `} /></DisclosureButton>
                <DisclosurePanel className="text-gray-500">
                    {data}
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
};

export default Accordion;