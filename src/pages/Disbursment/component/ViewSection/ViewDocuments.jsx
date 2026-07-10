import { File } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'
import pdfIMage from "../../../../assets/pdf-svgrepo-com.svg"
const ViewDocuments = ({ isOpen, onToggle }) => {
    return (
        <ViewData isOpen={isOpen} onToggle={onToggle} icon={<File className="size-4" />} label={"Documents"} isTableView={false} comp={
            <div className="grid grid-cols-4 gap-4 w-full">
                {Array.from({ length: 4 })?.map((_, i) => {
                    return (
                        <div className="flex h-16 ring-1 items-center px-2 ring-borderSecondary rounded-sm gap-2 w-full" key={i}>
                            <img src={pdfIMage} className='h-10 w-8' alt="image of pdf" />
                            <div className="flex flex-col">

                                <span className='text-sm text-[#404040] font-medium'>Invocies.pdf</span>
                                <span className='text-[#525252] font-normal'>800 KB</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        } />
    )
}

export default ViewDocuments
