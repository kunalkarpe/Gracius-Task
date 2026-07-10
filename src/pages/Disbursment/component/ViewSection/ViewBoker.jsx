import { UsersRound } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'

const ViewBoker = ({ findDetails, isOpen, onToggle }) => {
    const brokerSchema = [
        {
            header: "Broker Name/Code",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex gap-2 items-center justify-center text-sm">
                        <div className="flex flex-col gap-1">
                            {rowData?.name}
                            <span className="text-[#525252] text-sm">CON-001</span>
                        </div>
                        <span className="text-xs items-center justify-center flex text-nowrap rounded-full h-4.5 w-21.5 text-[#404040] bg-secondary ring-1 ring-borderSecondary">
                            Aggregator
                        </span>
                    </div>
                )
            }
        },
        {
            header: "Broker Commission",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm">
                        {rowData?.commission}00 %
                    </div>
                )
            }
        },
        {
            header: "Referral Fee",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm">
                        ₹ {rowData?.referralFee.toLocaleString("en-In")}
                    </div>
                )
            }
        },
        {
            header: "PO No & Date",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm text-pinky">
                        {rowData?.poNumber}
                    </div>
                )
            }
        },
        {
            header: "PO Status",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex items-center justify-center text-xs rounded-full text-success ring-success/40 ring-1 bg-success/10 h-4.5 w-15.75">
                        {rowData?.status}
                    </div>
                )
            }
        },
    ]

    return (
        <div>
            <ViewData isOpen={isOpen} onToggle={onToggle} icon={<UsersRound className="size-4" />} columnSchema={brokerSchema} label={"Broker Information"} tableData={findDetails?.details?.brokers} capsule={true} capsuleClassName="ring-1 ring-pinky/40 rounded-full text-sm text-pinky bg-pinky/10 w-[177px] h-5" capsuleText="Total Referal : ₹ 5,000" />
        </div>
    )
}

export default ViewBoker
