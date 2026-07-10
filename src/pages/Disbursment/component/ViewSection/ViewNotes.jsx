import { FileText } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'

const ViewNotes = ({ isOpen, onToggle }) => {
    return (
        <ViewData isOpen={isOpen} onToggle={onToggle} icon={<FileText className="size-4" />} label={"Notes / Additional Information"} isTableView={false} comp={
            <span className=' text-sm font-normal'>Party applied for a home loan for property purchase in Chennai. Documents verified successFully and income proof has been submitted. Awaiting final bank approval and disbursement confirmation. </span>
        } />
    )
}

export default ViewNotes
