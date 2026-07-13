import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'

const TableBase = ({ tableData, selecetedCol, allowColor, filterState, setFilterState, className = "" }) => {

    const table = useReactTable({
        data: tableData || [],
        columns: selecetedCol || [],
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            globalFilter: filterState,
            columnPinning: {
                // column ids you want pinned to the left
                right: ['filter'],       // or pinned to the right
            },
        },

        onGlobalFilterChange: setFilterState,
        globalFilterFn: "includesString",
        enableColumnPinning: true,
    })
    return (
        <div style={{
            scrollbarWidth: "none"
        }} className={`flex max-w-full w-[calc(100vw-120px)] overflow-auto max-h-[calc(100vh-78px)] min-h-full ring-1  ring-borderSecondary rounded-md bg-white ${className}`} >
            <table className='w-full ring-1  ring-borderSecondary   h-fit'>
                <thead className='sticky top-0 z-10' >
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => {
                                const isPinned = header.column.getIsPinned()
                                return (
                                    <th
                                        style={{
                                            width: header.getSize(),
                                            position: isPinned ? 'sticky' : undefined,
                                            left: isPinned === 'left' ? `${header.column.getStart('left')}px` : undefined,
                                            right: isPinned === 'right' ? `${header.column.getAfter('right')}px` : undefined,
                                            zIndex: isPinned ? 20 : undefined,
                                        }}
                                        className={`text-start text-[#525252] text-xs bg-[#F9F5FF] h-14 ps-4 ${index === 0 ? "rounded-t-md" : ""} sm:w-4 sm:pe-4 w-fit font-semibold`} key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </th>
                                )
                            }
                            )}
                        </tr>
                    ))}
                </thead>



                <tbody   >
                    {table.getRowModel().rows.map((row) => (

                        <tr key={row.id}  >
                            {row.getVisibleCells().map((cell) => (

                                <td className={`h-14 text-sm text-[#171717] font-semibold border-b text-nowrap border-borderSecondary ps-4 sm:pe-2 md:pe:0  min-w-fit  ${allowColor && cell.row.index % 2 !== 0 ? "bg-secondary" : ""} `} key={cell.id}>
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
