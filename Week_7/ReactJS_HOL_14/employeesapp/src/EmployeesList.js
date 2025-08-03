import React from "react";
import EmployeeCard from "./EmployeeCard";
import {EmployeesData} from "./Employee";

function EmployeesList() {
  return (
    <div className="employee-list">
      {EmployeesData.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeesList;