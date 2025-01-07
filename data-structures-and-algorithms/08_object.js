/*

  [01] Object

  ▣ An object is an un-ordered collection of key-value pairs.
    ◉ The key must either be a string or symbol data type where as the value can be of any data type.
  ▣ To retrieve a value, we can use the corresponding key.
    ◉ This can be achieved using dot or bracket notation (when key has space or -).
  ▣ An object is not an iterable. We cannot use it with a for-of loop.

  [02] Time complexity of objects

  ▣ insert / remove / access - O(1)
  ▣ search - O(n)
  ▣ Object.keys() / Object.values() / Object.entries() - O(n)

*/

const employee = {
  name: "John",
  dob: "01st March",
  "employee-id": 1090807,
  "office name": "Infosys",
}

// ▣ Accessing object values using keys.
console.log(`Hi ${employee.name}, you're birthday is on : ${employee.dob}`);
console.log(`Your ${employee["office name"]} employee id is : ${employee["employee-id"]}\n`);

// ▣ Adding a key-value pairs to object.
employee.designation = "Senior associate consultant";
employee.role = "Frontend developer";
console.log("Employee :", employee, "\n");

// ▣ Removing a key-value pair from an object.
delete employee.dob;
console.log("Employee :", employee, "\n");

// ▣ Adding and calling a function which is defined in the object.
// NOTE - don't use arrow function here, since it doesn't have its own this context.
employee.sayName = function () {
  console.log("My name is :", this.name);
}
employee.sayName();

// OBJECT METHODS

// ▣ Object.keys()
// ◉ Method returns an array with the keys of an object.
const employeeKeysArr = Object.keys(employee);
console.log("Employee object keys :", employeeKeysArr, "\n");

// ▣ Object.values()
// ◉ Method returns an array of the property values of an object.
const employeeValuesArr = Object.values(employee);
console.log("Employee object values :", employeeValuesArr, "\n");

// ▣ Object.entires()
// ◉ Method returns an array of the key/value pairs of an object.
// ◉ This method makes it simple to use objects in loops e.g.
for (let [employeeKey, employeeVal] of Object.entries(employee)) {
  console.log(employeeKey, ":", employeeVal);
}
