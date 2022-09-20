const Manager = require('../lib/Manager');
const manager = new Manager("Dev","123","devondgray28@gmail.com", "867-5309");

test('if constructor parameters are being retrieved', () => {
  expect(manager.name).toBe("Dev");
  expect(manager.id).toBe("123");
  expect(manager.email).toBe("devondgray28@gmail.com");
  expect(manager.officeNumber).toBe("867-5309");
});

test('if getOfficeNumber() retrieves manager office number', () => {
  expect(manager.getOfficeNumber()).toBe("867-5309");
});

test('if getRole() retrieves manager role', () => {
  expect(manager.getRole()).toBe("Manager");
});