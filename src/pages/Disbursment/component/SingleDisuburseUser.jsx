import { Archive, FileClock, SquarePen } from "lucide-react"
import Breadcrumb from "../../../components/BreadCrumb/BreadCrumb"
import Button from "../../../ui/Button/Button"
import Card from "../../../ui/Cards/Card"
import { ViewApplication, ViewBoker, ViewCommission, ViewDisbursment, ViewDocuments, ViewLoanDetails, ViewNotes, ViewActivity } from "../component/ViewSection/index.jsx"
import { DOT_STYLES, SINGLE_DISBURS_CARDS_CONSTANT, SINGLE_DISBURSE_TABLE_NAME, STATUS_STYLES } from "../disbursment.constant"
import { useSingleDisburse } from "../hooks/useSingleDisbursUser"

const SingleDisuburseUser = () => {

    const { states: { openTableIds, showActivityLog }, function: { isTableOpen, openTable, toggleTable, tooggleActivityLog }, variables: { findDetails, totalCommision } } = useSingleDisburse()

    return (
        <div className=" gap-5 flex flex-col p-4 ">
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-xl text-[#171717]">{findDetails?.id}</p>
                    <Breadcrumb />
                </div>

                <div className="flex items-center gap-2">
                    <Button btnText={"Archive"} onClick={() => { }} buttonType={"secondary"} icon={<Archive className="size-4 text-[#A3A3A3]" />} className=" text-nowrap   h-9! w-35! ring-1 ring-[#D4D4D4]  " type="button" />

                    <Button btnText={"Activity Logs"} onClick={tooggleActivityLog} buttonType={"secondary"} icon={<FileClock className="size-4 text-[#A3A3A3]" />} className=" text-nowrap   h-9! w-35! ring-1 ring-[#D4D4D4]  " type="button" />

                    <Button buttonType={"primary"} btnText={"Edit Loan"} icon={<SquarePen className="size-4" />} className="h-9 w-29 flex items-center justify-center" />
                </div>
            </div>

            <div className="flex flex-col bg-white rounded-sm h-full p-4 gap-2">
                {/* Name */}
                <div className="flex ">
                    <div className="flex flex-col">
                        <div className="flex gap-4 items-center">

                            <p className="font-semibold text-[#171717] text-xl">{findDetails?.applicantName}</p>
                            <span className={`h-5.5 w-21.75 rounded-sm font-medium text-xs py-0.5 px-1.5 flex justify-center gap-1 items-center  ${STATUS_STYLES[findDetails?.status]}`}> <span className={`h-1.5 w-1.5 rounded-full ${DOT_STYLES[findDetails?.status]}`} /> {findDetails?.status}</span>
                        </div>
                        <p className="text-sm text-[#525252] font-normal">{findDetails?.details?.loanType}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 divide-y divide-borderSecondary">

                    {/* Cards */}
                    <div className="grid grid-cols-5 gap-2 pb-4">
                        {SINGLE_DISBURS_CARDS_CONSTANT?.map((disUnit, i) => {

                            const comm = findDetails?.details?.commission?.reduce((acc, curVal) => {
                                return acc + curVal?.amount
                            }, 0)
                            const obj = {
                                ...findDetails,
                                commission: comm,
                                referral: 5000,
                                total: comm + 5000

                            }
                            return (
                                <Card key={i} textClassName={`${disUnit?.accessorKey === "total" ? "  text-success!" : ""}`} className={`${disUnit?.accessorKey === "total" ? "bg-success/10! text-success!" : ""}`} isCurr={true} key={disUnit?.id} desc={obj[disUnit?.accessorKey]} title={disUnit?.title} />
                            )
                        })}
                    </div>

                    <div className="flex w-full gap-6">
                        {/* Table nmas */}
                        <div className="flex flex-col gap-2 w-54.25">
                            {SINGLE_DISBURSE_TABLE_NAME?.map((tUnit, i) => {
                                const isActive = openTableIds?.length === 1 && openTableIds.includes(tUnit?.id)
                                return (
                                    <button key={i} type="button" onClick={() => openTable(tUnit?.id)} className={`h-9 cursor-pointer text-center flex items-center justify-start font-medium  px-2 rounded-sm text-sm ${isActive ? "bg-[#F9F5FF] text-primary  " : "text-[#737373]"}`} key={tUnit?.id}>
                                        {tUnit?.name}
                                    </button>
                                )
                            })}

                        </div>
                        <div className="flex flex-col flex-1 gap-4">
                            <ViewApplication isOpen={isTableOpen(1)} onToggle={() => toggleTable(1)} findDetails={findDetails} />
                            <ViewLoanDetails isOpen={isTableOpen(2)} onToggle={() => toggleTable(2)} findDetails={findDetails} />
                            <ViewDisbursment isOpen={isTableOpen(3)} onToggle={() => toggleTable(3)} findDetails={findDetails} />

                            <ViewCommission isOpen={isTableOpen(4)} onToggle={() => toggleTable(4)} totalCommision={totalCommision} findDetails={findDetails} />

                            <ViewBoker isOpen={isTableOpen(5)} onToggle={() => toggleTable(5)} findDetails={findDetails} />
                            <ViewNotes isOpen={isTableOpen(6)} onToggle={() => toggleTable(6)} />
                            <ViewDocuments isOpen={isTableOpen(7)} onToggle={() => toggleTable(7)} />
                        </div>
                    </div>
                </div>
            </div>
            {
                showActivityLog && (
                    <ViewActivity
                        isOpen={showActivityLog}
                        onClose={tooggleActivityLog}
                    />
                )
            }
        </div>
    )
}

export default SingleDisuburseUser
