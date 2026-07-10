import { HandCoins } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'

const ViewCommission = ({ findDetails, totalCommision, isOpen, onToggle }) => {
    const commissionSchema = [
        {
            header: "Party Name (Used Code)",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.partyName}
                    </div>
                )
            }
        },
        {
            header: "Sub-Code Commision (Net)%",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.commissionPercent}00 %
                    </div>
                )
            }
        },
        {
            header: "Sub-Gross Commision %",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.commissionPercent}00 %
                    </div>
                )
            }
        },
        {
            header: "Commision Amount",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-success/60 text-sm " >
                        ₹ {rowData?.amount.toLocaleString("en-In")}
                    </div>
                )
            }
        },
        {
            header: "Invoice No",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-info text-sm" >
                        {rowData?.invoice}
                    </div>
                )
            }
        },
        {
            header: "Invoice Status",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex items-center justify-center text-xs rounded-full text-success ring-success/40 ring-1 bg-success/10 h-4.5 w-15.75" >
                        {rowData?.status}
                    </div>
                )
            }
        },
    ]
    return (
        <div>
            <ViewData isOpen={isOpen} onToggle={onToggle} icon={<HandCoins className="size-4" />} columnSchema={commissionSchema} label={"Commision"} tableData={findDetails?.details?.commission} capsule={true} capsuleClassName="ring-1 ring-success/40 rounded-full text-sm text-success bg-success/10 w-[216px] h-5" capsuleText={`Total Commission : ₹ ${totalCommision.toLocaleString("en-IN")}`} />

        </div>
    )
}

export default ViewCommission
