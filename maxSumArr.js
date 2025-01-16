// function maxSubarraySum(arr, n) {
//   if (n > arr.length) return;
//   let max = 0;
//   //   to gurantee that it will always add (n) numbers subsequently
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

// function maxSubarraySum(arr, n) {
//   if (n > arr.length) return null;
//   let max = 0;
//   let temp = 0;

//   for (let i = 0; i < n; i++) {
//     max += arr[i];
//   }
//   temp = max;
//   for (let i = n; i < arr.length; i++) {
//     temp = temp - arr[i - n] + arr[i];
//     max = Math.max(max, temp);
//     console.log(temp);
//     console.log(max);
//   }
//   return max;
// }
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let longest = 0;
  let obj = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      start = Math.max(start, obj[str[i]]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    obj[str[i]] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
