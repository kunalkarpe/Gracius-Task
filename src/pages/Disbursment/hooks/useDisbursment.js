import { useState } from "react"
import useRoutesHandler from "../../../utility/urUtility"

export function useDisburse() {

    const [checkedColumn, setCheckedColumn] = useState([])
    const [title, setTitle] = useState("")
    const [showModal, setShowModal] = useState(false)
    const { navigateTo } = useRoutesHandler()
    function appendLocalStorageData(data) {
        let prevData = localStorage?.getItem("tableColumn")
        let newArr = prevData ? JSON.parse(prevData) : []
        newArr.push(data)
        localStorage.setItem("tableColumn", JSON.stringify(newArr))
    }


    const handleSubmit = () => {
        const data = {
            name: title,
            column: checkedColumn
        }
        appendLocalStorageData(data)
        setTitle("")
        setCheckedColumn([])
        setShowModal(false)
    }

    return { states: { checkedColumn, setCheckedColumn, title, setTitle, showModal, setShowModal }, function: { handleSubmit }, routing: { navigateTo } }
}