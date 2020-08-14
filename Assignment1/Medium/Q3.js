function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}

console.log(removeDuplicates([1, 0, 1, 0]));
console.log(removeDuplicates(["The", "big", "cat"]));
console.log(removeDuplicates(['John', 'Taylor', 'John']));