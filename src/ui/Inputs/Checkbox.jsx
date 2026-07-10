
const Checkbox = ({ checked, onChange, label }) => {
    return (

        <div className="flex items-center gap-2">
            <input
                className="h-4 w-4 cursor-pointer!"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="text-xs font-semibold text-body capitalize ">
                {label}
            </span>
        </div>
    )
}

export default Checkbox
