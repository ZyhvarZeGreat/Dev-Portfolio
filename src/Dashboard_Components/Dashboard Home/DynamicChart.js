import React, { useState, useEffect } from 'react';
import {  Bar } from 'react-chartjs-2';
const DynamicChart = () => {
  const [employeeSalary, setEmployeeSalary] = useState({});
  const [employeeAge, setEmployeeAge] = useState({});



  return (
    <div className="container">
    <Bar  data={{labels: [
      '2019','2020','2021','2022','2023','2024','2025'
    ]}}

      height={400}
      width={600}
    />
    </div>
    )
    
}

export default DynamicChart