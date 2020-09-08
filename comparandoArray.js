let array1 = [2, 4, 5, 9];
let array2 = [2, 4, 11, 12];

let r3 = array1.filter(a => !array2.includes(a));
let r4 = array2.filter(a => !array1.includes(a));
let r5 = [];

array1.forEach(function (element, index, array) {
    if (array2.indexOf(element) == -1)
        r5.push(element);
});

array2.forEach(function (element, index, array) {
    if (array1.indexOf(element) == -1)
        r5.push(element);
});

console.log(r5;)