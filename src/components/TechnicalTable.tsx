interface TechnicalTableProps {
  headers: string[]
  rows: string[][]
}

export function TechnicalTable({ headers, rows }: TechnicalTableProps) {
  return (
    <div className="overflow-x-auto border border-outline-variant bg-white">
      <table className="w-full min-w-[680px] border-collapse text-left">
        <thead className="bg-industrial-navy text-white">
          <tr>
            {headers.map((header) => (
              <th className="px-5 py-4 font-label" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className="border-b border-outline-variant/70 even:bg-surface-container-low last:border-0" key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td className={`px-5 py-4 text-sm ${cellIndex === 0 ? 'font-bold text-industrial-navy' : 'text-steel-gray'}`} key={`${cell}-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
