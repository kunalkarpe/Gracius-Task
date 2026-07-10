import { SliderModal } from "../../../../ui/Modal/SliderModal"
import Women from "../../../../assets/women.jpg"
import { VIEW_ACTIVITY_LOG } from "../../disbursment.constant"


const ViewActivity = ({ onClose, isOpen }) => {
    return (
        <SliderModal
            className={"flex flex-col gap-2"}
            containerClass={""}
            handleCloseModal={onClose}
            isOpen={isOpen}
            title={"Activity Log"}
            onClose={onClose}
        >
            <div className="flex flex-col px-4 gap-2.5">
                {
                    VIEW_ACTIVITY_LOG?.map((viewUnit) => {
                        return (
                            <div className="flex flex-col border-b border-borderSecondary ">
                                <div className="flex justify-between h-14 ">
                                    <div className="flex gap-2">

                                        <img src={Women} className="h-8 w-8 rounded-full" alt={"Image of loan created person"} />
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-[#171717]">{viewUnit?.title}</p>
                                            <p className="font-normal text-sm text-[#525252]">{viewUnit?.name}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs font-normal text-[#525252]">{viewUnit?.time}</p>
                                </div>


                                {viewUnit?.child ? (
                                    <div className="pb-3">
                                        <div className="grid grid-cols-2 h-16 place-content-center px-2  border border-borderSecondary rounded-sm bg-secondary">

                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm font-normal text-[#525252]">From</p>
                                                <span className="flex items-center justify-center gap-1 ring-1 ring-info bg-info/10 rounded-sm text-info text-xs w-fit px-1.5 py-0.5">
                                                    <span className="rounded-full  h-1.5 w-1.5 bg-info" />
                                                    Verified</span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm font-normal text-[#525252]">To</p>
                                                <span className="flex items-center justify-center gap-1  ring-1 ring-warning bg-warning/20 rounded-sm text-warning text-xs w-fit px-1.5 py-0.5">
                                                    <span className="rounded-full  h-1.5 w-1.5 bg-warning" />
                                                    Processed</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : <></>}
                            </div>

                        )
                    })
                }

                <div className="flex flex-col border-b border-borderSecondary ">
                    <div className="flex justify-between h-14 ">
                        <div className="flex gap-2">

                            <img src={Women} className="h-8 w-8 rounded-full" alt={"Image of loan created person"} />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-[#171717]">Updated</p>
                                <p className="font-normal text-sm text-[#525252]">Amit SHarma</p>
                            </div>
                        </div>
                        <p className="text-xs font-normal text-[#525252]">20  May (9:20 PM)</p>
                    </div>
                    <div className="flex flex-col gap-1 pb-3">
                        <p className="text-black text-xs font-medium">Disbursed Amount</p>
                        <div className="grid grid-cols-2 h-16 place-content-center px-2  border border-borderSecondary rounded-sm bg-secondary">

                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-normal text-[#525252]">From</p>
                                <span className="text-sm font-medium text-[#404040]">₹30,00,000</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-normal text-[#525252]">To</p>
                                <span className="text-sm  font-medium text-[#404040]">₹31,00,000</span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SliderModal>
    )
}

export default ViewActivity
