import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'

const TableBase = ({ tableData, selecetedCol, allowColor, filterState, setFilterState }) => {

    const table = useReactTable({
        data: tableData || [],
        columns: selecetedCol || [],
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            globalFilter: filterState,
        },

        onGlobalFilterChange: setFilterState,
        globalFilterFn: "includesString",

    })
    return (
        <div style={{
            scrollbarWidth: "none"
        }} className="flex w-full overflow-y-auto max-h-[calc(100vh-78px)] min-h-full ring-1  ring-borderSecondary rounded-md bg-white" >
            <table className='w-full ring-1  ring-borderSecondary   h-fit'>
                <thead className='sticky top-0 z-10' >
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <th className={`text-start text-[#525252] text-xs bg-[#F9F5FF] h-14 ps-4 ${index === 0 ? "rounded-t-md" : ""} min-w-12 w-fit font-semibold`} key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>



                <tbody   >
                    {table.getRowModel().rows.map((row) => (

                        <tr key={row.id}  >
                            {row.getVisibleCells().map((cell) => (

                                <td className={`h-14 text-sm text-[#171717] font-semibold border-b text-nowrap border-borderSecondary ps-4 min-w-fit  ${allowColor && cell.row.index % 2 !== 0 ? "bg-secondary" : ""} `} key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableBase
