// components/dashboard/table/Table.tsx
import React, { useState } from "react";

interface TableProps<T> {
  data: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  pageSizeOptions?: number[];
  initialPageSize?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Table<T extends Record<string, any>>({
  data,
  onEdit,
  onDelete,
  pageSizeOptions = [5, 10, 20],
  initialPageSize = 5,
}: TableProps<T>) {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [page, setPage] = useState(1);

  const sortedData = React.useMemo(() => {
    if (!Array.isArray(data)) return [];

    const copy = [...data];
    if (!sortBy) return copy;

    return copy.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];

      if (valA === valB) return 0;
      const result = valA > valB ? 1 : -1;

      return sortOrder === "asc" ? result : -result;
    });
  }, [data, sortBy, sortOrder]);

  const paginatedData = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const toggleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
    setPage(1);
  };

  return (
    <div className="w-full">
      <div className="overflow-auto border rounded-lg border-gray-600 mb-4">
        <table className="min-w-full bg-white text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  onClick={() => toggleSort(col)}
                  className="px-4 py-2 cursor-pointer whitespace-nowrap">
                  {col}
                  {sortBy === col && (
                    <span className="ml-1">
                      {sortOrder === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col} className="px-4 py-2 whitespace-nowrap">
                    {String(row[col])}
                  </td>
                ))}
                <td className="px-4 py-2 space-x-2">
                  {onEdit && (
                    <button
                      className="text-blue-500"
                      onClick={() => onEdit(row)}>
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      className="text-red-500"
                      onClick={() => onDelete(row)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-6 text-slate-700">
        <div className="text-sm">
          Page {page} of {totalPages}
        </div>
        <div className="space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded disabled:opacity-50">
            Prev
          </button>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border rounded disabled:opacity-50">
            Next
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="border px-2 py-1 rounded text-sm">
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
