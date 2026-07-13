import { ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'
import SearchInput from "../../ui/Inputs/SearchInput"
import TableBase from './components/TableBase'
import TableFilter from './components/TableFilter'
import TableSavedColumn from './components/TableSavedColumn'
import Accordion from '../../ui/Accordian/Accordian'
import { PER_PAGE } from './table.constant'
import Selector from '../../ui/Selector/Selector'
import Button from '../../ui/Button/Button'

const Table = ({ tableData, tableColumnSchema, column, setColumn, onNextClick, localStorageKey = "", allowColor = false, }) => {
    const addFilterSchema = [...tableColumnSchema, {
        id: "filter",
        size: 0,
        header: () => (

            <TableFilter label='' column={column} setColumn={setColumn} onNextClick={onNextClick} className={"ring-1 ring-borderSecondary h-5 w-5 p-1 outline-borderSecondary rounded-xs flex items-center justify-center"} icon={<SlidersHorizontal className='size-4' />} options={tableColumnSchema} />
        ),
        cell: () => null,
    },]
    const [searchQuery, setSearchQuery] = useState("")

    const [selecetedCol, setSelectedCol] = useState(addFilterSchema)
    const [perPage, setPerpage] = useState(PER_PAGE?.[0])
    const [pageNo, setPageno] = useState(1)
    const totalPage = (Number(tableData.length) / Number(perPage))
    const columnsData = JSON.parse(localStorage.getItem(localStorageKey)) || []
    const handleColumn = () => {
        const findColumn = columnsData?.find((col) => col?.name === selecetedCol)
        const filteredCol = tableColumnSchema?.filter((tabCol) => findColumn?.column?.includes(tabCol?.header))
        setSelectedCol(filteredCol)
    }
    const startingNumber = pageNo === 1 ? 0 : (pageNo * perPage) - perPage
    const endingNumber = pageNo === 1 ? perPage : pageNo * perPage
    const tableSlicedData = tableData?.slice(startingNumber, endingNumber)
    const handleNextPage = () => { setPageno(pageNo + 1) }
    const handlePrevPage = () => { setPageno(pageNo - 1) }

    useEffect(() => {
        function checkPage() {
            if (pageNo > totalPage) {
                setPageno(1)
            }
        }
        checkPage()
    }, [pageNo, totalPage])

    return (
        <div className="rounded-lg ring-1 ring-borderSecondary px-4 py-2 gap-1 flex flex-col min-h-120 w-full bg-white
        ">
            <div className="flex items-center  justify-between py-2">
                <SearchInput value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} shortcutKey={true} inputClassname='text-black!' searchClassName='text-[#A3A3A3]!' className={"w-72 h-9 bg-white! text-black! ring-1 ring-[#D4D4D4]! rounded-sm! font-semibold"} label={""} placeholder={"Search user by name..."} type={"text"} />
                <div className="flex items-center gap-2">
                    <TableSavedColumn label="Save View" icon={<ChevronDown className='size-4' />} className={"flex rounded-sm justify-center gap-2 items-center px-2 h-9 font-semibold text-sm border border-[#D4D4D4] w-33.75 text-[#737373] size-8  focus:outline-none  focus:ring-2 focus:ring-[#9E77ED] focus:ring-offset-1 focus:ring-offset-white"


                    } handleOnClick={handleColumn} options={columnsData} setSelectedCol={setSelectedCol} selectedCol={selecetedCol} />
                    <Accordion data={[]} label={"Export All"} className='flex rounded-sm justify-center gap-2 items-center px-2 h-9 font-semibold text-sm border border-[#D4D4D4] w-33.75 text-[#737373] size-8  focus:outline-none  focus:ring-2 focus:ring-[#9E77ED] focus:ring-offset-1 focus:ring-offset-white' />

                </div>

            </div>
            <TableBase allowColor={allowColor} selecetedCol={selecetedCol} tableData={tableSlicedData} filterState={searchQuery} setFilterState={setSearchQuery} />
            <div className="flex justify-between">

                <div className="flex w-full h-17 gap-2 divide-x-2 divide-borderSecondary items-center">
                    <div className="flex items-center gap-1 w-36 pe-2">
                        <p className='text-[#404040] text-sm font-medium'>Page</p>
                        <input type="text" className='h-9 w-9 rounded-sm ring-1 ring-[#D4D4D4]   text-center' value={pageNo} onChange={(e) => setPageno(e.target.value)} />
                        of {totalPage}
                    </div>
                    <div className="flex gap-2 items-center  w-full">
                        <span className='text-[#404040] text-nowrap  text-sm font-medium'>Rows per page</span>
                        <Selector handleChange={(value) => {
                            setPerpage(value);
                            if (pageNo > totalPage) {
                                setPageno(1)
                            }

                        }} options={PER_PAGE} value={perPage} />
                    </div>
                </div>
                <div className="flex w-full gap-2 items-center">
                    <Button disabled={pageNo === 1} buttonType={"tertiary"} className='h-9 w-9  border flex justify-center items-center border-[#D4D4D4] rounded-sm' btnText={""} onClick={handlePrevPage} type='button' icon={<ChevronLeft className='size-4 text-[#D4D4D4]' />} />
                    <div className="flex gap-2">

                        {
                            Array.from({ length: totalPage })?.map((_, i) => {
                                return (
                                    <Button buttonType={"tertiary"} className={`h-9 w-9 rounded-sm  ${pageNo === (i + 1) ? "ring-1 ring-secondary bg-secondary " : ""}`} btnText={i + 1} onClick={() => setPageno(i + 1)} />
                                )
                            })
                        }
                    </div>
                    <Button disabled={pageNo === totalPage} buttonType={"tertiary"} className='h-9 w-9 border flex justify-center items-center border-[#D4D4D4] rounded-sm' btnText={""} onClick={handleNextPage} type='button' icon={<ChevronRight className='size-4 text-[#D4D4D4]' />} />

                </div>
            </div>
        </div>
    )
}

export default Table
