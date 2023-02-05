import { useState } from "react";
import Employee from "./employee";
const Employees = () => {
    const [employees, setEmployees] = useState([
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
    ]);
    const addEmployee = () => {
        setEmployees([
            ...employees,
            { empId: 6789, name: "Sam", designation: "TL" },
        ]);
    };
    return <Employee employees={employees} addEmployee={addEmployee} />;
};
export default Employees;
