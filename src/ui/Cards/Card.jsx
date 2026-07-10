

const Card = ({ title, desc, isCurr = false, className = "", textClassName = "" }) => {
    return (
        <div className={`w-full h-26.5 flex flex-col bg-white rounded-sm items-center justify-center gap-1 px-4 ring-1 ring-[#D4D4D4] ${className}`}>
            <p className="text-sm text-[#525252] w-full">{title}</p>
            <p className={`font-semibold font-[poppins] text-[#171717] text-2xl w-full ${textClassName}`}>{isCurr ? <>₹ {desc.toLocaleString("en-In")}</> : desc}</p>
        </div>
    )
}

export default Card
