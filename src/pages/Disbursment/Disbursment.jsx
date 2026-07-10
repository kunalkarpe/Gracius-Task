import { Outlet } from "react-router-dom"
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb"
import Table from "../../components/Table/Table"
import Accordion from "../../ui/Accordian/Accordian"
import Card from "../../ui/Cards/Card"
import AddTypeModal from "./component/AddType"
import { DISBURS_CAPSULE_DATA, DISBURS_CARDS_CONSTANT, DISBURS_USERS } from "./disbursment.constant"
import { useDisburse } from "./hooks/useDisbursment"
import { EyeIcon } from "lucide-react"
import Button from "../../ui/Button/Button"

function Disbursment() {
    const { states: { checkedColumn, setCheckedColumn, setShowModal, setTitle, showModal, title }, function: { handleSubmit }, routing: { navigateTo } } = useDisburse()

    const columnSchema = [
        {
            header: "#",
            accessorFn: (row, index) => index + 1,
            cell: (cell) => <div>{cell.row.index + 1}</div>
        },
        {
            header: "Disbursement Date",
            accessorFn: (row) => row?.disbursementDate,
            cell: (cell) => <div>{cell.row.original?.disbursementDate}</div>
        },
        {
            header: "Loan id",
            accessorFn: (row) => row?.details?.loanId,
            cell: (cell) => <div>{cell.row.original?.details?.loanId}</div>
        },
        {
            header: "Status",
            accessorFn: (row) => row?.status,
            cell: (cell) => <div className="flex justify-start">{cell.row.original?.status}</div>
        },
        {
            header: "Applicant Name",
            accessorFn: (row) => row?.applicantName,
            cell: (cell) => <div className="flex justify-start">{cell.row.original?.applicantName}</div>
        },
        {
            header: "Bank Name",
            accessorFn: (row) => row?.bankName,
            cell: (cell) => <div className="flex justify-start">{cell.row.original?.bankName}</div>
        },
        {
            header: "Verified",
            accessorFn: (row) => row?.verifiedAmount,
            cell: (cell) => (
                <div className="flex justify-start">
                    ₹ {cell.row.original?.verifiedAmount?.toLocaleString("en-In")}
                </div>
            )
        },
        {
            header: "Referral %",
            accessorFn: (row) => row?.referralPercent,
            cell: (cell) => <div className="flex justify-start">{cell.row.original?.referralPercent} %</div>
        },
        {
            header: "Credit Executive",
            accessorFn: (row) => row?.creditExecutive,
            cell: (cell) => <div className="flex justify-start">{cell.row.original?.creditExecutive}</div>
        },
        {
            header: "Actions",
            accessorFn: () => { },

            cell: (cell) => {
                const loanId = cell.row.original?.id
                console.log(cell.row.original)
                return (

                    <Button className="w-7 h-7 border flex items-center justify-center border-warning rounded-sm" buttonType={"tertiary"} btnText={""} onClick={() => {
                        return navigateTo({
                            url: `/rms/disbursement/${loanId}`
                        })
                    }} icon={<EyeIcon className="size-4 text-warning  rounded-xs!" />} />

                )
            }
        }
    ]

    return (
        <div className="flex flex-col gap-4 p-4 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col">

                    <p className="font-semibold text-xl text-[#171717]">Disbursement</p>
                    <Breadcrumb />
                </div>
                <div className="flex gap-2 items-center justify-center">
                    {DISBURS_CAPSULE_DATA?.map((cardUnit) => {
                        const ICON = cardUnit?.icon
                        return (
                            <div key={cardUnit?.id} className="flex text-nowrap gap-2 text-sm items-center justify-center h-9 ring-1 ring-[#D4D4D4] rounded-sm shadow-sm bg-white px-2">
                                <ICON className="size-4 text-[#A3A3A3]" /> {cardUnit?.title}
                            </div>
                        )
                    })}

                    <Accordion data={null} label={"Add Disbursement"} chevronClass="text-white!" className="bg-primary text-white! rounded-sm px-2 h-9!" />
                </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-6 gap-2">
                {DISBURS_CARDS_CONSTANT?.map((disUnit) => {
                    return (
                        <Card key={disUnit?.id} desc={disUnit?.desc} title={disUnit?.title} />
                    )
                })}
            </div>
            {/* Table */}
            <Table allowColor={true} column={checkedColumn} onNextClick={() => { setShowModal(true) }} setColumn={setCheckedColumn} tableColumnSchema={columnSchema} tableData={DISBURS_USERS} localStorageKey="tableColumn" />
            {showModal && (
                <AddTypeModal handleChange={(e) => { setTitle(e.target.value) }} handleClose={() => setShowModal(false)} isOpen={showModal} value={title} handleSubmit={handleSubmit} />
            )}
            <Outlet />
        </div>
    )
}

export default Disbursment