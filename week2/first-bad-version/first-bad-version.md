# 278. First Bad Version

## 1. Problem
We have $n$ versions `[1, 2, ..., n]` and an API function `isBadVersion(version)`. Since all versions after a bad one are also bad, we need to find the **first bad version** while minimizing the number of API calls.

## 2. Approach
I used Binary Search over the range `[1, n]`:
1. Maintain two pointers: `left = 1` and `right = n`.
2. While `left < right`, calculate `mid = Math.floor(left + (right - left) / 2)`.
3. Call `isBadVersion(mid)`:
   - If `true`, the first bad version is at `mid` or to its left, so set `right = mid`.
   - If `false`, the first bad version is strictly to the right, so set `left = mid + 1`.
4. When `left === right`, the loop ends, and `left` points to the first bad version.

## 3. Time Complexity
**Time Complexity: $O(\log n)$**

**Explanation:**  
Each step cuts the search space of $n$ versions in half, making at most $\log_2(n)$ API calls.

## 4. Space Complexity
**Space Complexity: $O(1)$**

**Explanation:**  
The algorithm uses a constant amount of extra memory for `left`, `right`, and `mid` pointers.

## 5. Reflection / Improvement
- **Is there a more efficient approach?** No, $O(\log n)$ is optimal when searching in a range.
- **What would you need to change?** Using `left + Math.floor((right - left) / 2)` prevents potential integer overflow compared to `Math.floor((left + right) / 2)` in fixed-width integer environments.
- **What complexity could the improved solution achieve?** $O(\log n)$ time complexity and $O(1)$ space complexity remain optimal.