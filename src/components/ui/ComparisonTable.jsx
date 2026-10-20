const HIGHLIGHT = 'bg-brand-orange/10'

export default function ComparisonTable({ caption, columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-line bg-ink-raised">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <colgroup>
            <col className="w-[30%]" />
            {columns.map((column) => (
              <col key={column.id} className="w-[35%]" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <td className="p-3 sm:p-6" />
              {columns.map((column) => (
                <th
                  key={column.id}
                  scope="col"
                  className={`p-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] sm:p-6 sm:text-xs ${
                    column.highlight ? `${HIGHLIGHT} text-brand-orange` : 'text-mist-muted'
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-ink-line">
                <th scope="row" className="p-3 align-top text-sm font-semibold text-white sm:p-6 sm:text-base">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={columns[i].id}
                    className={`p-3 align-top text-sm leading-relaxed sm:p-6 sm:text-base ${
                      columns[i].highlight ? `${HIGHLIGHT} text-white` : 'text-mist-muted'
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
