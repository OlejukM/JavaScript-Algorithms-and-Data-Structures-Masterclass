//-----------------------------------------------------FREQUENCY COUNTER.-----------------------------//
//Work with objects;

//TASK 1 
// Check if arr1 elements in square are equal to arr2 elements;

//Solution 1 O(n^2);
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// };
//   console.log(same([1,3,2], [4,9,1]));

//Solution 2 O(n^2);
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) return false;
//     let result = [];
//     arr1.map(el => {
//         result.push(arr2.indexOf(el * el));
//         arr2.splice(arr2.indexOf(el * el), 1);
//     })
//     return !result.includes(-1);
//   }
//   console.log(same([1,3,2], [4,9,1]));

// Solution 3 O(n);
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     arr1.forEach(val => obj1[val] ? obj1[val] += 1 : obj1[val] = 1);
//     arr2.forEach(val => obj2[val] ? obj2[val] += 1 : obj2[val] = 1);

//     for (let key in obj1) {
//         if (!obj2[key * key]) {
//             return false;
//         }

//         if (obj1[key] !== obj2[key * key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

//TASK 2
//Check on Anagram;

//Solution 1
// function validAnagram(str1, str2) {
// if (str1.length !== str2.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for (let c of str1) {
//         obj1[c] = (obj1[c] || 0) + 1;
//     }

//     for (let c of str2) {
//         obj2[c] = (obj2[c] || 0) + 1;
//     }

//     for (let key in obj1) {
//         if (!obj2[key]) {
//             return false;
//         }

//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(validAnagram('anagram', 'nagaram')); //true
// console.log(validAnagram('aaz', 'zza')); //false
// console.log(validAnagram('rat', 'car')); //false
// console.log(validAnagram('awesome', 'awesom')); //false
// console.log(validAnagram('qwerty', 'qeywrt')); //true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); //true

//Solution 2
// function validAnagram(str1, str2) { 
//     if (str1.length !== str2.length) return false;

//     let lookup = {};

//     for (let c of str1) {
//         lookup[c] = (lookup[c] || 0) + 1;
//     }

//     for (let c of str2) {
//         lookup[c] = (lookup[c] || 0) + 1;
//     }

//     for (let key in lookup) {
//         if (lookup[key] % 2) {
//             return false
//         }
//     }
//     return true;
// }

// // Solution 3
// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     let lookup = {};

//     for (let c of str1) {
//         lookup[c] ? lookup[c] += 1 : lookup[c] = 1;
//     }

//     for (let c of str2) {
//         if (!lookup[c]) {
//             return false;
//         } else {
//             lookup[c] -= 1;
//         }
//     }

//     for (let key in lookup) {
//         if (lookup[key] % 2) {
//             return false
//         }
//     }
//     return true;
// }




//-------------------------------------------------------------MULTIPLE POINTERS PATTERN-----------------------------///////
//While 1st element  - 2nd element > 0, keep going;
//If 1st element - 2nd element < 0, take next 1st element of array;

//Task 3
//Accept sorted array of integers. Should return first pair where the sum is 0 else undefined;
//Solution 1 - O(n^2)

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; i++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));


//Solution 2 - O(n);
// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

//Task 4
//Find unique elements in sorted array;
//Solution 1;
// function countUniqueValue(arr) {
//     if (!arr.length) return 0;
//     let left = 0;
//     let right = 1;
//     let uniqueValue = 0;
//     while (right <= arr.length - 1) {
//         if (arr[left] !== arr[right]) {
//             uniqueValue++;
//         }
//         left++;
//         right++;
//     }
//     return uniqueValue + 1;
// }
// console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// function countUniqueValue(arr) {
//     if (!arr.length) return 0;
//     let left = 0;
//     let right = 1;
//     while (right <= arr.length - 1) {
//         if (arr[left] === arr[right]) {
//             right++;
//         } else {
//             left++;
//             arr[left] = arr[right];
//             right++;
//         }
//     }
//     return left + 1;
// }
// console.log(countUniqueValue([-2, -1, -1, 0, 1]));


//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//TIME O(N);
// function sameFrequency(num1, num2) {
//     const strNum1 = num1.toString();
//     const strNum2 = num2.toString();

//     if (strNum1.length !== strNum2.length) return false;

//     let obj = {};

//     for (let c of strNum1) {
//         obj[c] ? obj[c] += 1 : obj[c] = 1;
//     }

//     for (let c of strNum2) {
//         obj[c] ? obj[c] -= 1 : false;
//     }

//     for (let key in obj) {
//         if (obj[key] !== 0) {
//             return false;
//         }
//     }

//     return true;
// }

//OR

// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
//   }

// console.log(sameFrequency(182, 281)); //true
// console.log(sameFrequency(34, 14)); //false
// console.log(sameFrequency(3589578, 5879385)); //true
// console.log(sameFrequency(22, 222)); //false

//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//TIME O(N);
//SPACE O(N);
//--FREQUENCY COUNTER SOLUTION;
// function areThereDuplicates(...args) {
//     let obj = {};

//     for (let c of args) {
//         obj[c] ? obj[c] += 1 : obj[c] = 1;
//     }

//     for (let key in obj) {
//         if (obj[key] % 2 === 0) {
//             return true;
//         }
//     }
//     return false;
// }

//--------------Multiple Pointers Solution

// function areThereDuplicates(...args) {
//     args.sort();
//     let start = 0;
//     let next = 1;

//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true;
//         } else {
//             start++;
//             next++;
//         }
//     }
//     return false;
// }

// console.log(areThereDuplicates(1, 2, 3)); //false
// console.log(areThereDuplicates(1, 2, 2)); //true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

//--One Liner Solution
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }


//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
//There may be more than one pair that matches the average target.
//--Multiple Pointers
//TIME O(N);
//SPACE O(1);
// function averagePair(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         let avg = (arr[start] + arr[end]) / 2;

//         if (avg === target) return true;
//         else if (avg < target) start++;
//         else end--;
//     }
//     return false;
// }
// console.log(averagePair([1, 2, 3], 2.5)); //true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
// console.log(averagePair([], 4)); //false

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
//TIME O(N + M);
//SPACE O(1);
// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;

//     while (j < str2.length) {
//         console.log(str2[j], str1[i]);
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// console.log(isSubsequence('abc', 'acb'));

//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//TIME O(N)
//SPACE O(1)
// function maxSubarraySum(arr, num) {
//     if (num > arr.length) return null;

//     let maxSum = 0;
//     let tempSum = 0;

//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;

//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
// console.log(maxSubarraySum([2, 3], 3)); //null


// function maxSubarraySum(arr, num) {
//     if (num > arr.length) return null;

//     let maxSum = 0;
//     let tempSum = 0;

//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;

//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
// console.log(maxSubarraySum([2, 3], 3)); //

//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
//This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead
//function minSubArrayLen(arr, int) {
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > int) return 1;
//    }
//
//    let num = 2;
//    let sum = 0;
//
//    while (num <= arr.length) {
//        for (let i = 0; i < num; i++) {
//            sum += arr[i];
//        }
//
//        if (sum >= int) {
//            return num;
//        }
//
//        for (let i = num; i < arr.length; i++) {
//            sum = sum - arr[i - num] + arr[i];
//            if (sum >= int) {
//                return num;
//            }
//        }
//        num++;
//        sum = 0;
//    }
//    return 0;
//}
//console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
//console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
//console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
//console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0

//function minSubArrayLen(nums, sum) {
//    let total = 0;
//    let start = 0;
//    let end = 0;
//    let minLen = Infinity;
//   
//    while (start < nums.length) {
//      // if current window doesn't add up to the given sum then 
//          // move the window to right
//      if(total < sum && end < nums.length){
//        total += nums[end];
//              end++;
//      }
//      // if current window adds up to at least the sum given then
//          // we can shrink the window 
//      else if(total >= sum){
//        minLen = Math.min(minLen, end-start);
//              total -= nums[start];
//              start++;
//      } 
//      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//      else {
//        break;
//      }
//    }
//   
//    return minLen === Infinity ? 0 : minLen;


// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//function findLongestSubstring(str) {
//    let longest = 0;
//    let seen = {};
//    let start = 0;
//
//    for (let i = 0; i < str.length; i++) {
//        let char = str[i];
//        if (seen[char]) {
//            start = Math.max(start, seen[char]);
//        }
//
//        longest = Math.max(longest, i - start + 1);
//        seen[char] = i + 1;
//    }
//    return longest;
//}
//
//findLongestSubstring(''); //0
//findLongestSubstring('rhitmschool') //7
//findLongestSubstring('thisisawesome'); //6
//findLongestSubstring('thecatinthehat');//7
//findLongestSubstring('bbbbbb');//1
//findLongestSubstring('longestsubstring');//8
//findLongestSubstring('thisishowwedoit');//6


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RECURSION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!


//Write a function called power which accepts a base and an exponent.
//The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
//function power(num1, num2) {
//    if (num2 === 0) return 1;
//    return num1 * power(num1, num2 - 1);
//}
//console.log(power(2, 4)); //16

//Write a function factorial which accepts a number and returns the factorial of that number.
//A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
//function factorial(num) {
//    if (num < 0) return 1;
//    if (num <= 1) return 1;
//    return num * factorial(num - 1);
//}
//console.log(factorial(1)); //1;
//console.log(factorial(2)); //2;
//console.log(factorial(4)); //24;
//console.log(factorial(7)); //5040;

//Write a function called productOfArray which takes in an array of number and returns the product of them all;
//function productOfArray(arr) {
//    let result = 1;
//    function helper(helperInput) {
//        if (helperInput.length === 0) return;
//
//        result *= helperInput[0];
//
//        return helper(helperInput.slice(1));
//    }
//    helper(arr);
//
//    return result;
//}
//console.log(productOfArray([1, 2, 3])); //6
//console.log(productOfArray([1, 2, 3, 10])); //60

// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function;
// function recursiveRange(num) {
//     if (num === 1) return 1;
//     return num + recursiveRange(num - 1);
// }
// console.log(recursiveRange(6));
// console.log(recursiveRange(10));

//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// function fib(num) {
//     if (num <= 2) return 1;
//     return fib(num - 1) + fib(num - 2);
// }
// console.log(fib(4)); //3
// console.log(fib(10)); //55
// console.log(fib(28)); //317811
// console.log(fib(35)); // 9227465

// function fib(n) {
//     let a = 1, b = 0, temp;
//     while (n <= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         n--;
//     }
//     return b;
// }


//Write a recursive function called reverse which accepts a string and returns a new string in reverse;
// function reverse(str) {
//     let result = '';
//     function helper(helperInput) {
//         if (helperInput.length === 0) return;
//         result += helperInput.slice(helperInput.length - 1);
//         return helper(helperInput.slice(0, -1));
//     }
//     helper(str);
//     return result;
// }
// console.log(reverse('awesome'));
// console.log(reverse('rithmschool'));

// function reverse(str){
//     if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

//--------------------------------
// function isPalindrome(str) {
//     if (str.length === 1) return true;
//     if (str.length === 2) return str[0] === str[1];
//     if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//     return false;
// }

//----------------------------------
// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

// function flatten(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(flatten([1, 2, 3, [4, 5]])); // [1,2,3,4,5];
// console.log(flatten([[1], [2], [3]])); // [1,2,3];
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); //[1,2,3];
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5];


//------------------------------------------------------------------------BINARY SEARCH-------------------------------------------------//
// function binarySearch(arr, val) {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);

//     while (arr[middle] !== val && start <= end) {
//         if (val < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === val ? middle : 1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
//---------------------------------------------------------------------END OF BINARY SEARCH-----------------------------//

//Naive String Search
// function stringSearch(str1, str2) {
//     let count = 0;

//     for (let i = 0; i < str1.length; i++) {
//         for (let j = 0; j < str2.length; j++) {
//             if (str2[j] !== str1[i + j]) break;
//             if(j === str2.length -1) count++;
//         }
//     }
//     return count;
// }
// console.log(stringSearch('lorie loled', 'lo'));

//KNP COMING SOON!!



//------------------------------------------------------------------BUBBLE SORT-------------------------------------------------------------//
// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             console.log(1); //28 func calls.
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([8,1,2,3,4,5,6,7]));

// BUBBLE SORT OPTIMIZATION.
// function bubbleSort(arr) {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             console.log(1); //13 func calls.
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) break;
//     }
//     return arr;
// }
// console.log(bubbleSort([8,1,2,3,4,5,6,7]));




//------------------------------------------------------------------SELECTION SORT-------------------------------------------------------//
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[lowest];
//         arr[lowest] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort([34, 22, 10, 19, 17]));


// SELECTION SORT OPTIMIZATION.
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) { //OPTIMIZATION
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([34, 22, 10, 19, 17]));


//------------------------------------------------------------------INSERTION SORT-------------------------------------------------------//

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         console.log(arr);
//         arr[j + 1] = key;
//         console.log(arr);
//     }
//     return arr;
// }
// console.log(insertionSort([5, 3, 1, 4, 6]));
