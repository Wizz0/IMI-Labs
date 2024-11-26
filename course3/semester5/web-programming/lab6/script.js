let arr = [1, 20, 3, 4650, 5];
let str = ["aaac", "bbcb", "ccskibidi", "dop", ["yes", "yess", "yees"]];

//1
const new_arr1 = arr.map((ch, ind) => {return ch + 2 * ind});
console.log("Task 1: " + new_arr1);

//2
console.log("Task 2: " + arr.filter(item => item % 10 === 0).length);

//3
/*
const new_arr2 = arr.reduce(accum, item, index) => {
    new_arr2.push(arr[index] + item);
};
console.log(new_arr2);
*/
const avg = (a, b) => (a + b) / 2;
const fn = (arr) => 
    arr.reduce((accum, curr, index, arr) => {
    if (index > 0) {
        accum.push(avg(arr[index - 1], curr));
    }
    return accum;
}, []);
let new_arr2 = fn(arr);
console.log("Task 3: " + new_arr2);


//4
let fn1 = (k) => {
    let res = 0;
    let n = arr[k];
    while (n) {
        res = res * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return res;
}
console.log("Task 4: " + fn1(3));

//5
const isPrime = (num) => {
    if (num <= 1) return false; 
    for (let i = 2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
};
let new_arr3 = arr.filter(num => !isPrime(num));
console.log("Task 5: " + new_arr3);

//6
let fn2 = (k,n) => {
    return str[n-1][k-1];
}
console.log("Task 6: " + fn2(1, 3));

//7
const fn3 = (arr) => {
 const lower = arr.filter(item => typeof item === 'string' && item === item.toLowerCase());
 arr.splice(1, 0, lower);
 return arr;
};
console.log("Task 7: " + fn3(str));


//8
let fn4 = (k) => {return str[4][k-1].length;};
console.log("Task 8: " + fn4(1));

//9
let fn5 = (k,n) => {
    let res = str;
    let temp = res[k];
    res[k] = res[n];
    res[n] = temp;
    return res;
}
console.log("Task 9: " + fn5(1,2));

//10
let fn6 = () => {
    let count = 0;
    let str2 = "";
    for (let i = 0; i < str.length-1; i += 2) { 
        str2 += str[i];
    }
    for (let i=0; i<str2.length; i++){
        if (str2[i].toLowerCase() === 'c') { 
            count++;
        }
    }
    return count;
}
console.log("Task 10: " + fn6()); 

//11
let fn7 = (arr) => {
    let res = "";
    for (let i=0; i<arr.length-1; i++){
        res += arr[i][0];
    }
    let krabovie_chipsi = arr[arr.length-1];
    for (let i=0; i<krabovie_chipsi.length; i++){
        res += krabovie_chipsi[i][0];
    }
    return res;
}
console.log("Task 11: " + fn7(str));

//12
let fn8 = (arr) => {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      let word = "";
      for (let j = arr[i].length - 1; j >= 0; j--) { 
        word += arr[i][j]; 
      }
      res.push(word);
  }
  return res;
}
console.log("Task 12: " + fn8(str));