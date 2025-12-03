import  { useState } from "react";
import EmployeeTable from "./components/employeeTable";
import employeesData from "./data/employees.json";

export default function App() {
  const [employees] = useState(employeesData);
  const [query, setQuery] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  
  const roles = Array.from(new Set(employees.map((e) => e.role))).sort();

  
  const filtered = employees.filter((e) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      e.name.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q) ||
       String(e.id)===q;

    const matchesMinSalary =
      minSalary === "" || Number(e.salary) >= Number(minSalary);

    const matchesRole = roleFilter === "" || e.role === roleFilter;

    return matchesQuery && matchesMinSalary && matchesRole;
  });

  return (
     <div className="app-container">
      <header>
        <h1>Employees Data</h1>
        <p className="subtitle">Simple React app showing employee data</p>
      </header>
     

      <section className="controls">
        <input
          type="text"
          placeholder="Search by name or id..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          aria-label="Filter by role"
        >
          <option value="">All roles</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min salary"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          min="30000"
        />

        <button onClick={() => { setQuery(""); setMinSalary(""); setRoleFilter(""); }}>
          Reset
        </button>
      </section>

      <EmployeeTable employees={filtered} />

      <footer>
        <small>Showing {filtered.length} of {employees.length} employees</small>
      </footer>
    </div>
  );
}
