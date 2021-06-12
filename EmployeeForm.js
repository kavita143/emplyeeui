import React from "react";

export default function EmployeeForm(props) {
  const [emp, setEmp] = React.useState({});
  const getData = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const addEmployee = (e) => {
    props.addEmployee(emp);
  };
  return (
    <div>
      <div class="form-group">
        Name{" "}
        <input
          type="text"
          class="form-control"
          name="empName"
          onChange={getData}
        />
      </div>
      <div class="form-group">
        Salary{" "}
        <input
          type="text"
          class="form-control"
          name="empSalary"
          onChange={getData}
        />
      </div>
      <div class="form-group">
        Project Id{" "}
        <input
          type="text"
          class="form-control"
          name="projectId"
          onChange={getData}
        />
      </div>
      <input type="submit" onClick={addEmployee} />
    </div>
  );
}
