const Employee = require('../lib/Employee');
const employee = new Employee("Joe", "123", "devondgray28@gmail.com");

test('if employee constructor information is retrieved', () =>{
@@ -7,5 +7,19 @@ test('if employee constructor information is retrieved', () =>{
  expect(employee.email).toBe("devondgray28@gmail.com");
});

test('if getName() retrieves name', () => {
  expect(employee.getName()).toBe("Dev");
});

test('if getId() retrieves the id', () => {
  expect(employee.getId()).toBe("123");
});

test('if getEmail() retrieves the email', () => {
  expect(employee.getEmail()).toBe("devondgray28@gmail.com");
});

test('if getRole() retrieves the employee role', () => {
  expect(employee.getRole()).toBe('Employee');
});