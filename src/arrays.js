function getNthElement(index, array) {
  return array[index % array.length];
};

function arrayToCSVString(array) {
  return string = array.join([separator = ',']);
};

function csvStringToArray(string) {
  return array = string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

function addToArray2(element, array) {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(string => string.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

function reverseWordsInArray(strings) {
  return strings.map(string => string.split('').reverse().join(''));
};

function onlyEven(numbers) {
  return numbers.filter(x => x % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index + 1))
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiouAEIOU]/i.test(string));
};

function removeSpaces(string) {
  return string.replace(/\s/g, '');
}

const sumNumbers = numbers => {
  return numbers.reduce((partialSum, a) => partialSum + a, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length -1) -b.charCodeAt(b.length -1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
