import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
const List = () => {
    const [employees, setEmployees] = useState([{ empId: 1234, name: "Vinay", position: "SE" },
    { empId: 2345, name: "Shivam", position: "SDE" },
    { empId: 3456, name: "Priyansh", position: "ASE" }]);

    const addEmployee = () => {
        setEmployees([
            ...employees,
            { empId: 6789, name: "Sam", designation: "TL" },
        ]);
    };

    return (<>
        <table>
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => {
                    return (
                        <tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>);
};

export default List;