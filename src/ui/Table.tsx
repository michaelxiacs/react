import { useState } from "react"

interface Employee {
  name: string
  position: string
  employed: string
}

const employees: Employee[] = []

for (let i = 0; i < 101; i += 1) {
  employees.push({
    name: "John Doe",
    position: "Manager",
    employed: "23/04/18",
  })
}

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 10
  const lastPage = Math.ceil(employees.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  return (
    <div className="w-1/2">
      <div className="w-full overflow-x-scroll rounded-xl bg-white text-gray-700 shadow-md">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="h-[5vh] border-b bg-gray-200">
              <th>
                <p className="pl-4 text-sm antialiased">Name</p>
              </th>
              <th>
                <p className="pl-4 text-sm antialiased">Position</p>
              </th>
              <th>
                <p className="pl-4 text-sm antialiased">Employee</p>
              </th>
              <th>
                <p className="pl-4 text-sm antialiased" />
              </th>
            </tr>
          </thead>
          <tbody key={currentPage}>
            {employees.slice(startIndex, endIndex).map((employee, index) => (
              <tr key={index} className="h-[5vh] border-b">
                <td>
                  <p className="pl-4 text-sm antialiased">{employee.name}</p>
                </td>
                <td>
                  <p className="pl-4 text-sm antialiased">
                    {employee.position}
                  </p>
                </td>
                <td>
                  <p className="pl-4 text-sm antialiased">
                    {employee.employed}
                  </p>
                </td>
                <td>
                  <button className="pl-4 text-sm antialiased">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-large mt-4 space-x-2 text-end text-gray-700 antialiased">
        <span className="">
          {currentPage}/{lastPage}
        </span>
        <button
          className="rounded-md border bg-gray-200 px-5 py-1 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <button
          className="rounded-md border bg-gray-200 px-5 py-1 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === lastPage}
        >
          {">"}
        </button>
      </div>
    </div>
  )
}
