import { useState } from "react"
import { useParams } from "react-router-dom"
import { DISBURS_USERS, SINGLE_DISBURSE_TABLE_NAME } from "../disbursment.constant"

export function useSingleDisburse() {
    const { id } = useParams()
    const [openTableIds, setOpenTableIds] = useState(null)
    const [showActivityLog, setShowActivityLog] = useState(false)

    const findDetails = DISBURS_USERS?.find((user) => user?.id === id)
    const totalCommision = findDetails?.details?.commission?.reduce((acc, curVal) => {
        return acc + curVal?.amount
    }, 0)
    const tableIds = SINGLE_DISBURSE_TABLE_NAME?.map((table) => table?.id) ?? []
    const isTableOpen = (tableId) => openTableIds === null || openTableIds.includes(tableId)
    const openTable = (tableId) => setOpenTableIds([tableId])
    const tooggleActivityLog = () => setShowActivityLog(!showActivityLog)
    const toggleTable = (tableId) => {
        setOpenTableIds((currentOpenIds) => {
            if (currentOpenIds === null) {
                return tableIds.filter((id) => id !== tableId)
            }

            if (currentOpenIds.includes(tableId)) {
                return currentOpenIds.filter((id) => id !== tableId)
            }

            return [tableId]
        })
    }

    return { states: { openTableIds, setOpenTableIds, showActivityLog, setShowActivityLog }, variables: { findDetails, totalCommision, tableIds }, function: { isTableOpen, openTable, toggleTable, tooggleActivityLog } }
}