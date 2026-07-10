import { Banknote } from 'lucide-react'
import ViewData from '../../../../components/ViewData/ViewData'
import { SINGLE_DISBURS_LOAN_DETAILS, SINGLE_DISBURS_SANCTION_DETAILS, SINGLE_DISBURS_TEAM_DETAILS } from '../../disbursment.constant'

const ViewLoanDetails = ({ findDetails, isOpen, onToggle }) => {
    const loanObj = {
        loanId: findDetails?.details?.loanId,
        loantype: findDetails?.details?.loanType,
        bank: findDetails?.bankName,
        stage: findDetails?.details?.stage,
        sanctionDate: findDetails?.disbursementDate,
        sanctionAmt: findDetails?.sanctionedAmount?.toLocaleString("en-In"),
        verifiedAmt: findDetails?.verifiedAmount?.toLocaleString("en-In"),
        creditExecutive: findDetails?.creditExecutive,
        bankExecutive: "Amit Mishra",
        source: "Ramesh Kumar"
    }
    return (

        <ViewData isOpen={isOpen} onToggle={onToggle} icon={<Banknote className="size-4" />} label={"Loan Details"} isTableView={false} comp={
            <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-4 gap-2">
                    {SINGLE_DISBURS_LOAN_DETAILS?.map((loanUnit, i) => {

                        return (
                            <div key={i} className="flex flex-col gap-1 h-21">
                                <span className='font-normal text-sm text-[#525252]'>{loanUnit?.name}</span>
                                <span className={`font-medium ${loanUnit?.label === "loantype" ? " h-5 w-20 text-xs   flex items-center justify-center text-darkBlue ring-1 bg-darkBlue/20 ring-darkBlue/40 rounded-full" : "text-[#171717]"}`}>{loanObj[loanUnit?.label]}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-2 h-30">
                    <p className='font-medium text-sm'>Sanction Details:</p>
                    <div className="grid grid-cols-4 gap-2 ">
                        {SINGLE_DISBURS_SANCTION_DETAILS?.map((loanUnit, i) => {

                            return (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className='font-normal text-sm text-[#525252]'>{loanUnit?.name}</span>
                                    <span className={`text-[#171717] font-medium   ${loanUnit?.label !== "sanctionDate" ? "text-error " : ""}`}>  {loanUnit?.label !== "sanctionDate" ? "₹" : ""} {loanObj[loanUnit?.label]}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2 h-30">
                    <p className='font-medium text-sm'>Team Details:</p>
                    <div className="grid grid-cols-4 gap-2">
                        {SINGLE_DISBURS_TEAM_DETAILS?.map((loanUnit, i) => {

                            return (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className='font-normal text-sm text-[#525252]'>{loanUnit?.name}</span>
                                    <span className={`text-[#171717] font-medium `}>    {loanObj[loanUnit?.label]}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        } />
    )
}

export default ViewLoanDetails
