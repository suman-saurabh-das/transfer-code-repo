/*

  [01] Set

  ▣ A set is a data structure that can hold a collection of values. 
    ◉ The values however must be unique.
  ▣ Set can contain a mix of different data types.
    ◉ We can store strings, booleans, numbers or even objects all in the same set.
  ▣ Sets are dynamically sized.
    ◉ We don't have to declare the size of a set before creating it.
  ▣ Sets do not maintain an insertion order.
  ▣ Sets are iterables. They can be used with a for-of loop.
  
  [02] Set vs Arrays

  ▣ Arrays can contain duplicate values whereas Sets cannot.
  ▣ Insertion order is maintained in arrays but it is not the case with sets.
  ▣ Searching and deleting an element in the set is faster compared to arrays. 

*/

// Creating a new Set
const numberSet = new Set([1, 2, 3, 4]);
console.log("Number set :", numberSet, "\n");

// ▣ Set.size
// ◉ Returns the number of elements in the set.
// ◉ It is a property and not a method.
console.log("Set is of size :", numberSet.size, "\n");

// ▣ Iterate through each element.
for (let item of numberSet) {
  if (item === 3) {
    console.log("Element found :", item);
  }
}
numberSet.forEach((item) => {
  if (item === 2) {
    console.log("Element found :", item, "\n");
  }
});

// SET METHODS

// ▣ Set.add()
// ◉ Add an element to the set.
// ◉ Adding the same element to the set has no effect.
const addReturnVal = numberSet.add(5);
console.log("Number set :", numberSet, "| Add return value :", addReturnVal, "\n");
numberSet.add(5);
console.log("Number set :", numberSet, "| Add return value :", addReturnVal, "\n");

// ▣ Set.has()
// ◉ To check if an element is in the set.
const checkIfNumberExists = numberSet.has(1);
console.log("Number set has value 1 :", checkIfNumberExists, "\n");

// ▣ Set.delete(value)
// ◉ To delete the specified value from a set. 
const deleteReturnVal = numberSet.delete(3);
console.log("Number set :", numberSet, "| Delete return value :", deleteReturnVal, "\n");

// ▣ Set.clear()
// ◉ To delete all values from a set.
const clearReturnVal = numberSet.clear();
console.log("Number set :", numberSet, "| Clear return value :", clearReturnVal, "\n");
