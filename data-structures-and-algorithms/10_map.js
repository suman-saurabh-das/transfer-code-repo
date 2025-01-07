/*

  [01] Map

  ▣ A map is an unsorted collection of key-value pairs.
    ◉ Both key and values can be of any data type.
  ▣ To retrieve a value, we can use the corresponding key.
  ▣ Maps are iterables. They can be used with a for-of loop.

  [02] Objects vs Maps

  ▣ Objects are unordered where as maps are ordered.
  ▣ Keys in objects can only be string or symbol type whereas in maps, they can be of any type.
  ▣ An object has a prototype and may contain a few default keys which may collide with our own keys, if not careful. A map doesn't contain any keys by default.
  ▣ Objects are not iterables whereas maps are iterables.
  ▣ The number of items in an object must be determined manually where as it is readily available with the size property in a map.
  ▣ Apart from storing data, we can attach functionality to an object whereas maps are restricted to just storing data.

*/

// ▣ Creating a new Map
const foodMap = new Map([["chocolates", 10], ["burgers", 5], ["ice-creams", 8]]);
console.log("Food Map :", foodMap, "\n");

// ▣ Map.size
// ◉ Returns the number of key-values in a map.
// ◉ It is a property and not a method.
console.log("Map is of size :", foodMap.size, "\n");

// ▣ Iterate through each element.
for (let [key, value] of foodMap) {
  console.log(`${key}: ${value}`);
}
console.log();
foodMap.forEach((value, key) => {
  console.log(key ,":", value);
})
console.log();

console.log("Food Map :", foodMap, "\n");
console.log("Food Map :", foodMap, "\n");

// MAP METHODS

// ▣ Map.set()
// ◉ Adds an element to the map.
const setReturnVal = foodMap.set("pizzas", 3);
console.log("Food Map :", foodMap, "| return value :", setReturnVal, "\n");

// ▣ Map.has()
// ◉ Checks if a key exists in a map.
const checkIfKeyExists = foodMap.has("pizzas");
console.log("Food map has value pizza :", checkIfKeyExists);

// Map.delete(key)
// ◉ To delete the specified key-value pair from a map.
const deleteReturnVal = foodMap.delete("chocolates");
console.log("Food map :", foodMap, "| Delete return value :", deleteReturnVal, "\n");

// ▣ Map.clear()
// ◉ To delete all values from a map.
const clearReturnVal = foodMap.clear();
console.log("Food map :", foodMap, "| Clear return value :", clearReturnVal, "\n");