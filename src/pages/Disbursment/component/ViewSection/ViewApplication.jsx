import { UserRoundCheck } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'

const ViewApplication = ({ findDetails, isOpen, onToggle }) => {
    const applicantInformationSchema = [
        {
            header: "Name",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.name}
                    </div>
                )
            }
        },
        {
            header: 'Type',
            cell: (cell) => {
                const rowData = cell.row.original
                const isApplicant = rowData?.type === "Applicant"
                return (
                    <div className={`text-xs items-center justify-center flex text-nowrap rounded-full h-4.5 w-21.5 ${isApplicant ? "text-success ring-success/40 ring-1 bg-success/10" : "text-[#404040] bg-secondary ring-1 ring-borderSecondary"}`} >
                        {rowData?.type}
                    </div>
                )
            }
        },
        {
            header: "Email ID",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.email}
                    </div>
                )
            }
        },
        {
            header: "Phone Number",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.phone}
                    </div>
                )
            }
        }
    ]
    return (
        
            <ViewData isOpen={isOpen} onToggle={onToggle} icon={<UserRoundCheck className="size-4" />} columnSchema={applicantInformationSchema} label={"Applicant Information"} tableData={findDetails?.details?.applicantInfo} />
      
    )
}

export default ViewApplication
