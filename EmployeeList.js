import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import {employeeApi} from './api';
export default function EmployeeList() {
  const [empList, setEmpList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [responseMessage, setResponseMessage] = React.useState("");
  React.useEffect(() => {
    axios
      .get(employeeApi+"/getEmployees")
      .then((res) => {
        setEmpList(res.data);
        setIsLoading(false);
      })
      .catch((e) => {setResponseMessage(e.response.data.message);});
  }, []);

  const deleteEmployee = (e) => {
    axios
      .delete(employeeApi+"/deleteEmployee/" + e.currentTarget.getAttribute("data-id"))
      .then((res) => {
        setResponseMessage("Employee is deleted successfully");
        axios
          .get(employeeApi+"/getEmployees")
          .then((res) => {
            setEmpList(res.data);
            setIsLoading(false);
            console.log();
          })
          .catch((e) => {setResponseMessage(e.response.data.message);});
      })
      .catch((e) => {
        console.log(e)
        setResponseMessage(e.response.data.message);
      });
  };
  const addEmployee = (obj) => {
    axios
      .post(employeeApi+"/addEmployee", obj)
      .then((res) => {
        setEmpList([...empList, res.data]);
      })
      .catch((e) => {
        setResponseMessage(e.response.data.message);
      });
  };

  return (
    <div>
      {responseMessage}
      <EmployeeForm addEmployee={addEmployee} />
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
            <th>Project Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            empList.map((e) => (
              <tr>
                <td>{e.empId}</td>
                <td>{e.empName}</td>
                <td>{e.empSalary}</td>
                <td>{e.projectId}</td>
                <td>
                  <input
                    data-id={e.empId}
                    type="button"
                    value="Delete"
                    class="btn btn-primary"
                    onClick={deleteEmployee}
                  />
                  <Link to={`/updateEmployee/${e.empId}`}>
                    <input
                      type="button"
                      value="Update"
                      class="btn btn-primary"
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
