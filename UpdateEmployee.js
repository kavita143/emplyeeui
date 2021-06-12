import React from "react";
import axios from "axios";
import { useParams,Link} from "react-router-dom";
import { employeeApi } from "./api";


export default function UpdateEmployee() {
  const { id } = useParams();
  const [emp, setEmp] = React.useState({});
  const getData = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const [responseMessage, setResponseMessage] = React.useState("");
  React.useEffect(() => {
    axios
      .get(employeeApi + "/getEmployee/" + id)
      .then((res) => {
        setEmp(res.data[0]);
      })
      .catch((e) => {
        setResponseMessage(e.response.data.message);
      });
  }, []);

  const UpdateEmployee = (e) => {
    axios
      .put(employeeApi + "/updateEmployee/" + emp.empId, emp)
      .then((res) => {
        setResponseMessage("updated successfully");
      })
      .catch((e) => {
        setResponseMessage(e.response.data.message);
      });
  };

  return (
    <div>
      <Link to={"/getEmps"}>
        <input type="button" class="btn btn-primary" value="Back to List" />
      </Link>
      {responseMessage}
      <div class="form-group">
        Employee Id
        <input
          class="form-control"
          type="text"
          name="empId"
          readOnly={true}
          value={emp.empId}
          onChange={getData}
        />
      </div>
      <div class="form-group">
        Employee Name
        <input
          type="text"
          class="form-control"
          name="empName"
          value={emp.empName}
          onChange={getData}
        />
      </div>
      <div class="form-group">
        Employee Salary
        <input
          type="text"
          class="form-control"
          name="empSalary"
          value={emp.empSalary}
          onChange={getData}
        />
      </div>
      <div class="form-group">
        Project Id
        <input
          type="text"
          class="form-control"
          name="projectId"
          value={emp.projectId}
          onChange={getData}
        />
      </div>
      <button class="btn btn-primary"  onClick={UpdateEmployee}>
        Update Employee
      </button>
    </div>
  );
}
