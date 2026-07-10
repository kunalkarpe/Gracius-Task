import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import TableBase from '../Table/components/TableBase'

const ViewData = ({ isOpen, onToggle, defaultOpen = true, isTableView = true, comp = <></>, capsule = false, capsuleClassName = "", capsuleText = "", className = "", icon = <></>, label, chevronClass = "", columnSchema = [], tableData = [] }) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen)
    const isControlled = typeof isOpen === "boolean"
    const actualOpen = isControlled ? isOpen : internalOpen

    const handleToggle = () => {
        if (isControlled) {
            onToggle?.()
            return
        }

        setInternalOpen((prevOpen) => !prevOpen)
    }

    const content = (
        <div className="flex  w-full h-full">
            {isTableView ? <TableBase selecetedCol={columnSchema} tableData={tableData} /> : comp}
        </div>
    )

    return (
        <div className="h-full w-full">
            <div className="ring-1 ring-borderSecondary rounded-md overflow-hidden">
                <button type="button" onClick={handleToggle} aria-expanded={actualOpen} className={`px-4 py-3 flex w-full rounded-t-md bg-secondary items-center justify-between group ${className}`}>
                    <div className="flex items-center font-medium justify-center gap-2">
                        {icon}
                        <span className='h-5 max-w-53.5 text-sm'>{label}</span>
                        {capsule ? (
                            <span className={` ${capsuleClassName}  `}>
                                {capsuleText}
                            </span>
                        ) : <></>}
                    </div>
                    <ChevronDownIcon className={`${chevronClass} size-4 ${actualOpen ? "rotate-180" : ""}`} />
                </button>
                {actualOpen ? (
                    <div className="p-4">
                        {content}
                    </div>
                ) : <></>}
            </div>
        </div>
    )
}

export default ViewData
