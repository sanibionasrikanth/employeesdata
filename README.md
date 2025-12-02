# employeesdata
# EmployeeApp (React)

Simple React frontend that displays employee data from a local JSON file.
## Features
- Table with employee details (Name, Role, Salary)
- Search (by name or role)
- Role filter (dropdown)
- Minimum salary filter
- Reset filters

## Setup (Vite)
1. `npm create vite@latest employeeapp -- --template react`
2. Copy the `src/` files and `index.html` from this repo into the created folder (or replace the default files).
3. `cd employeeapp`
4. `npm install`
5. `npm run dev`
6. Open the URL shown in terminal (e.g. `http://localhost:5173`).
## Technologies Used
   React.js
   javascript
   Json
## Notes
- To adapt to a REST API, replace the local `employees.json` import with a fetch call in `App.jsx`:
```js
useEffect(() => {
  fetch('/api/employees').then(r=>r.json()).then(setEmployees)
}, []);
## How to Run
1. Clone the project
   https://github.com/sanibionasrikanth/employeesdata.git
2. Install dependencies
   npm install
3. Start the project
   npm run dev
