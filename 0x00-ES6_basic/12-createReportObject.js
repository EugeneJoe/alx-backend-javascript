export default function createReportObject(employeesList) {
  const data = {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      const num = Object.keys(employees).length;
      return num;
    },
  };
  return data;
}
