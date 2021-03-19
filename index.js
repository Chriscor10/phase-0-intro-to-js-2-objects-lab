// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress:'',
    };

function updateEmployeeWithKeyAndValue (employee, name, streetAddress) {
  const employee1 = {...Object};
  employee1.name = 'Sam'
  employee1.streetAddress = '11 Broadway'
  return employee1; 

}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress) {
  employee.name = 'Sam',
  employee.streetAddress = '12 Broadway';
  return employee;
}

function deleteFromEmployeeByKey (employee, name, streetAddress) {
const employee2 = {...Object};
delete employee2.name
return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee.name
return employee
}