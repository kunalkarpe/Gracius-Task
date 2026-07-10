import { HandCoinsIcon } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'

const ViewDisbursment = ({ findDetails, isOpen, onToggle }) => {
    const disbursementInformationSchema = [

        {
            header: "Disbursement ID",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.id}
                    </div>
                )
            }
        },
        {
            header: "Disbursement Date",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.date}
                    </div>
                )
            }
        },
        {
            header: "Disbursement Amount",
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
            header: " Veirified Disbursement Amount",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-success/60 text-sm" >
                        ₹ {rowData?.verifiedAmount.toLocaleString("en-In")}
                    </div>
                )
            }
        },
        {
            header: "UTR Number",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex justify-start text-sm" >
                        {rowData?.utr}
                    </div>
                )
            }
        },
        {
            header: "Tranche",
            cell: () => {
                return (
                    <div className="flex justify-start text-sm" >
                        Full
                    </div>
                )
            }
        },
        {
            header: "Disbursement Status",
            cell: (cell) => {
                const rowData = cell.row.original
                return (
                    <div className="flex items-center justify-center text-xs rounded-full text-warning bg-warning/20 ring-1 ring-warning/40 h-4.5 w-15.75" >
                        {rowData?.status}
                    </div>
                )
            }
        },
    ]
    return (
        <div>
            <ViewData isOpen={isOpen} onToggle={onToggle} icon={<HandCoinsIcon className="size-4" />} columnSchema={disbursementInformationSchema} label={"Disbursements Information"} tableData={findDetails?.details?.disbursements} />
        </div>
    )
}

export default ViewDisbursment
