function runTests() {
                console.clear();
                console.log('1',roundToTwo(5.6789));
                console.log('2',isNumber(42));
                console.log('3',numberLength(12345));
                console.log('4', getIntegerPart(4.99));
                console.log('5', toUpperCaseStr('hello'));
                console.log('6', containsWord('I love coding','love'));
                console.log('7', replaceSpaces('Hello world again'));
                console.log('8', firstAndLastThree('JavaScript'));
                console.log('9', trimString(' hi '));
                console.log('10:', stringLength('hello'));

                let arr =[3,8,12,20];
                console.log('11:',addToEnd(arr,30));
                console.log('12:', removeLast(arr));
                console.log('13:', findIndexGreaterThan10([5,8,11,2]));
                console.log('14:', filterEvenNumbers([1,2,3,4,5,6]));
                console.log('15:', multiplyByTwo([2,4,6]));
                console.log('16:', sumArray([1,2,3,4]));
                console.log('17:', containsElement([10,20,30], 20));
                console.log('18:', mergeArrats([1,2],[3,4]));
                console.log('19:', getSlice([0,1,2,3,4]));
                console.log('20:', sortAscending([5,1,8,2]));

                let obj ={name:'Diana',age:18};
                console.log('21:', getObjectKeys(obj));
                console.log('22:', getObjectValues(obj));
                console.log('23:', hasKey(obj, 'age'));
                console.log('24:', mergeObjects({a:1},{b:2}));
                console.log('25:', getEntries(obj));
            }

function roundToTwo(num) {
    return parseFloat(num.toFixed(2));
}
function isNumber(value) {
    return typeof value=== 'number' && !isNaN(value);
}
function numberLength(num) {
    return num.toString().length;
}
function getIntegerPart(num) {
    return Math.trunc(num);
}

function toUpperCaseStr(str) {
    return str.toUpperCase();
}
function containsWord(str,word) {
    return str.includes(word);
}
function replaceSpaces(str) {
    return str.replace(/ /g,"-");
}
function firstAndLastThree(str) {
    return str.slice(0, 3) + str.slice(-3);
}

function trimString(str) {
    return str.trim();
}
function stringLength(str) {
    return str.length;
}
function addToEnd(arr,elem) {
    arr.push(elem);
    return arr;
}
function removeLast(arr) {
    arr.pop();
    return arr;
}
function findIndexGreaterThan10(arr) {
    return arr.findIndex(num => num > 10);
}
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
function multiplyByTwo(arr) {
    return arr.map(num => num * 2);
}
function sumArray(arr) {
    return arr.reduce((sum,num)=> sum+num,0)
}
function containsElement(arr,elem) {
    return arr.includes(elem);
}
function mergeArrays(arr1,arr2) {
    return arr1.concat(arr2);
}
function getSlice(arr) {
    return arr.slice(1,4);
}
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

function getObjectKeys(obj) {
    return Object.keys(obj);
}
function getObjectValues(obj) {
    return Object.values(obj);
}
function hasKey(obj,key) {
    return obj.hasOwnProperty(key);
}
function mergeObjects(obj1,obj2) {
    return Object.assign({},obj1,obj2);
}
function getEntries(obj) {
    return Object.entries(obj);
}
function mergeArrats(arr1,arr2) {
    return arr1.concat(arr2);
}