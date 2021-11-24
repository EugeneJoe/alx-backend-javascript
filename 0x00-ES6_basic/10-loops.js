export default function appendToEachArrayValue(array, appendString) {
  const myArray = new Array(array.length);
  for (const idx of array) {
    myArray[array.indexOf(idx)] = appendString + idx;
  }

  return myArray;
}
