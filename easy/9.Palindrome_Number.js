/*
Title: 9. Palindrome Number
URL: https://leetcode.com/problems/palindrome-number/
Personal Submission:
    https://leetcode.com/submissions/detail/488476233/
    11510 / 11510 test cases passed.
    Runtime: 224 ms, faster than 53.30% of JavaScript online submissions for Palindrome Number.
    Memory Usage: 48.8 MB, less than 50.73% of JavaScript online submissions for Palindrome Number. 

----
Description
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return x == String(x).split("").reverse().join('');
};

module.exports = isPalindrome;