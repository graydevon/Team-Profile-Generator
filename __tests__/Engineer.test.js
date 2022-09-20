const Engineer = require('../lib/Engineer');
const engineer = new Engineer("Dev","123","devondgray28@gmail.com","graydevon");

test('if constructor parameters are being retrieved',() => {
  expect(engineer.name).toBe("Dev");
  expect(engineer.id).toBe("123");
  expect(engineer.email).toBe("devondgray28@gmail.com");
  expect(engineer.github).toBe("graydevon");
});

test('if getGithub() retrieves github name', () => {
  expect(engineer.getGithub()).toBe("graydevon");
});

test('if getRole() retrieved engineer role', () => {
  expect(engineer.getRole()).toBe("Engineer");
});