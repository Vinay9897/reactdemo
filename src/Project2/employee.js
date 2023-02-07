// child component
const Employee = ({ employees, addEmployee }) => {
    return (<>
        <table style={{ width: '60%' }} className='table'>
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => {
                    return (<tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                    </tr>)
                })
                }
            </tbody>
        </table><br /><br />
        <button onClick={addEmployee} className="btn btn-primary">Add an Employee</button>
    </>)
}
export default Employee;
