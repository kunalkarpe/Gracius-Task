
function Button({ type = "button", buttonType = "primary" | "secondary" | "tertairy", className = "", onClick, icon = <></>, btnText, disabled = false }) {
    if (buttonType === "primary") {
        return (
            <button onClick={onClick} type={type} className={`w-8 h-6 rounded-sm text-white flex items-center justify-center ring-1 ring-primary bg-primary ${className}`}>
                {icon ?? <></>}  {btnText}
            </button>
        )
    }
    if (buttonType === "secondary") {
        return (
            <button disabled={disabled} onClick={onClick} type={type} className={`w-8 h-6 rounded-sm text-[#404040] text-sm font-medium flex items-center justify-center gap-2 disabled:cursor-not-allowed bg-white ring-1 ring-[#D4D4D4] ${className}`}>
                {icon ?? <></>}  {btnText}
            </button>
        )
    }
    if (buttonType === "tertiary") {

        return (
            <button disabled={disabled} onClick={onClick} type="button" className={`ring-1 ring-white/60 disabled:cursor-not-allowed  ${className}`}>{btnText}{icon}</button>
        )
    }
}

export default Button