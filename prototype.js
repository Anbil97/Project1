const person = {
    name: 'John'
  };
  
  const employee = {
    role: 'Developer'
  };
  
  // Set the prototype of employee to person
  Object.setPrototypeOf(employee, person);
  
  console.log(employee.name); // John
  