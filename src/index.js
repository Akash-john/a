//1.Find the minimum and maximum elements in array.

// function minMaxValue(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return { min, max };
// }

// const arr = [1, 2, 3, 5, 4, 6, 7];

// const result = minMaxValue(arr);

// console.log(result);

//2. Reverse an array
// function reverseAnArray(arr) {
//   let reversedeArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedeArray.push(arr[i]);
//   }
//   return reversedeArray;
// }

// const arr = [1, 2, 3, 5, 4, 6, 7];
// const result = reverseAnArray(arr);
// console.log(result);

//inbuilt methods

// const reverseArray = (arr) => {
//   return arr.reverse();
// };

// const arr = [1, 2, 3, 5, 4, 6, 7];
// const result = reverseArray(arr);

// console.log(result);

//3.Find the sum of all Elements in array

// function sumAllElements(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// //using reduce method
// function reduce(arr) {
//   const result = arr.reduce((sum, arr) => (sum += arr), 0);

//   return result;
// }

// const arr = [1, 2, 3, 5];
// const result = sumAllElements(arr);
// const result1 = reduce(arr);
// console.log(result, result1);

//4.Remove Duplicates from an Array
//creating obj

// function removeDuplicates(arr) {
//   let uniqueElements = {};
//   let uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements[arr[i]]) {
//       uniqueElements[arr[i]] = true;
//       uniqueArray.push(arr[i]);
//     }
//   }

//   return uniqueArray;
// }

//using Filter method

// function removeDuplicates(arr) {
//   const result = arr.filter((elmt, index) => arr.indexOf(elmt) === index);

//   return result;
// }

// const arr = [1, 2, 2, 3, 3, 4, 5, 5];

// const result = removeDuplicates(arr);

// console.log(result);

//5.Finding the  second largest Element in an Array
//using sort method
// function secondLargest(arr) {
//   const result = arr.sort((a, b) => b - a);
//   return result[1];
// }

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return console.log("array doesn't meet the length");
//   }

//   let largest = -Infinity; //smallest possible value
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let currentItem = arr[i];
//     if (currentItem > largest) {
//       secondLargest = largest;
//       largest = currentItem;
//     } else if (currentItem > secondLargest && currentItem < largest) {
//       secondLargest = currentItem;
//     }
//   }

//   return secondLargest;
// }

// const arr = [2, 3, 5, 77, 88];
// const result = secondLargest(arr);
// console.log(result);

//6.Find the missing number in an array containing 1 to N;

// function missingNo(arr) {
//   let n = arr.length + 1;
//   let sum = (n * (n + 1)) / 2;

// let actualSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   actualSum += arr[i];
// }

//   const actualSum = arr.reduce((acc, curr) => (acc += curr));

//   let missingNumber = sum - actualSum;

//   return missingNumber;
// }

//7.Merge two sorted Array into Single sorted array;

//merging algorithm //merge sort.

// function mergeTwoArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }
//   return mergedArray;
// }

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8, 10];

// const result = mergeTwoArrays(arr1, arr2);

// console.log(result);

//8.bubble sort

// function bubbleSort(arr) {
//   let len = arr.length;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// const arr = [1, 3, 4, 2, 5];

// const result = bubbleSort(arr);

// console.log(result);

//9.Rotating an array to the right by k steps

// function rotateArray(arr, k) {
//   k = k % arr.length;

//   for (let i = 0; i < k; i++) {
//     let lastElement = arr.pop();
//     arr.unshift(lastElement);
//   }

//   return arr;
// }

// const arr = [1, 3, 4, 2, 5];
// const result = rotateArray(arr, 2);
// console.log(result);

//10.Rotate Array to the Left k step

// function rotateArrayLeft(arr, k) {
//   let n = arr.length;
//   let rotation = k % n;

//   for (let i = 0; i < rotation; i++) {
//     let temp = arr[0];
//     for (let j = 0; j < n - 1; j++) {
//       arr[j] = arr[j + 1];
//     }

//     arr[n - 1] = temp;
//   }

//   return arr;
// }

// const arr = [1, 2, 3, 4, 5];

// const result = rotateArrayLeft(arr, 1);

// console.log(result);

//11.Example two-dimensional array
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// function loopingTwoDimensional(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
// }

// //reverse loop
// function loopingReverse(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       console.log(arr[i][j]);
//     }
//   }
// }

// console.log(loopingReverse(matrix));

//12.find the intersection in two arrays

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// function intersection(arr1, arr2) {
//   let intersection = [];

//   //create set to get unique elements
//   const set1 = new Set(arr1);
//   //iterate throught second array
//   for (let i = 0; i < arr2.length; i++) {
//     if (set1.has(arr2[i])) {
//       intersection.push(arr2[i]);
//       set1.delete(arr2[i]);
//     }
//   }

//   return intersection;
// }

// const result = intersection(arr1, arr2);

// console.log(result);

//13.find the union of two arrays

//using ARray from method
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// function union(arr1, arr2) {
//   const unionSet = new Set([...arr1, ...arr2]);
//   return Array.from(unionSet);
// }

// function union(arr1, arr2) {
//   let union = [...arr1];

//   for (let i = 0; i < arr2.length; i++) {
//     if (!union.includes(arr2[i])) {
//       union.push(arr2[i]);
//     }
//   }

//   return union;
// }

// const result = union(arr1, arr2);
// console.log(result);

//14.Remove specific value from an array

// const arr1 = [1, 2, 3, 4, 5];

//using filter and normal approach
// function removeSpecificValue(arr, value) {
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== value) {
//     result.push(arr[i]);
//   }
// }

//   const result = arr.filter((element) => element !== value);
//   return result;
// }

// const result = removeSpecificValue(arr1, 3);

// console.log(result);

//15.kth smallest in an array

// function findKthSmallest(nums, k) {
//   return mergeSort(nums)[k - 1];
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   //to find the mid value and left and right halves of the
//   //array
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let merged = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       merged.push(left[i]);
//       i++;
//     } else {
//       merged.push(right[j]);
//       j++;
//     }
//   }

//   while (i < left.length) {
//     merged.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     merged.push(right[j]);
//     j++;
//   }

//   return merged;
// }
// var array = [4, 2, 9, 7, 5];
// var k = 2;

// var kthSmallest = findKthSmallest(array, k);
// console.log(kthSmallest);

//16.kth largest element in the array

// function kthLargest(arr, k) {
//   return mergeSort(arr)[k - 1];
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let merged = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] > right[j]) {
//       merged.push(left[i]);
//       i++;
//     } else {
//       merged.push(right[j]);
//       j++;
//     }
//   }

//   while (i < left.length) {
//     merged.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     merged.push(right[j]);
//     j++;
//   }

//   return merged;
// }
// var array = [4, 2, 9, 7, 5];
// var k = 2;
// const kthLargestelement = kthLargest(array, k);
// console.log(kthLargestelement); // Output: 7

//17.Frequency of each elements in array

// function frequencyOfElements(arr) {
//   let frequencyElements = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     // if (frequencyElements[currentElement]) {
//     //   frequencyElements[currentElement]++;
//     // } else {
//     //   frequencyElements[currentElement] = 1;
//     // }

//     //using map
//     if (frequencyElements.has(currentElement)) {
//       frequencyElements.set(
//         currentElement,
//         frequencyElements.get(currentElement) + 1
//       );
//     } else {
//       frequencyElements.set(currentElement, 1);
//     }
//   }

//   return frequencyElements;
// }

// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const result = frequencyOfElements(arr);
// console.log(result);

//18.Find the average of all elements in an array
// function average(arr) {
//   if (arr.lenght === 0) {
//     return 0;
//   }
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// const arr = [1, 2, 3, 4, 5];
// const result = average(arr);
// console.log(result);

//19.Check if an array contains a specific value.

// function specificValue(arr, value) {
//   //builtin methods
//   // return arr.includes(value);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return true;
//     }
//   }

//   return false;
// }

// const arr = [1, 2, 3, 4, 5];
// const result = specificValue(arr, 2);
// console.log(result);

//20.Find the maximum sum subarray in an array
// const maxSubArray = (nums) => {
//   let maxSum = Number.MIN_SAFE_INTEGER;
//   let runningSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     runningSum = Math.max(runningSum + nums[i], nums[i]);
//     maxSum = Math.max(maxSum, runningSum);
//   }

//   return maxSum;
// };
// const arr = [1, -2, 3, 4, -5, 8];

// const result = maxSubArray(arr);
// console.log(result);

//21.Find the majority element in an array
// function majorityElement(arr) {
//   let majorityElement = null;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (count === 0) {
//       majorityElement = arr[i];
//       count = 1;
//     } else if (majorityElement === arr[i]) {
//       count++;
//     } else {
//       count--;
//     }
//   }

//   return majorityElement;
// }

// const arr = [3, 2, 3, 1, 3, 4, 3];
// const result = majorityElement(arr);
// console.log(result);

//22.check if the array is palindrome
// const isPalindrome = (arr) => {
//   let left = 0;
//   let right = arr.lenght - 1;

//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// const arr = [1, 2, 3, 2, 1];

// const result = isPalindrome(arr);
// console.log(result)

//23.longestIncreasing sub array

// function longestIncreasingSubArray(arr) {
//   let maxLength = 1;
//   let start = 0;
//   let end = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       end = i;
//     } else {
//       start = i;
//     }
//     const currentLength = end - start + 1;
//     maxLength = Math.max(maxLength, currentLength);
//   }

//   return maxLength;
// }

// const arr = [2, 4, 1, 5, 7];

// const result = longestIncreasingSubArray(arr);
// console.log(result);
