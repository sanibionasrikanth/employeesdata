

export default function EmployeeTable({ employees = [] }) {
  if (!employees.length) {
    return <div className="empty">No employees found.</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Emp.id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={emp.id}>
              <td>{idx + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{Number(emp.salary).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
