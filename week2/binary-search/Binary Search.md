# Binary Search

## 1. Problem
Given a sorted array of integers `nums` and a target value `target`, we need to find the index of `target` in the array. If the target does not exist, return `-1`.

## 2. Approach
I used the Binary Search algorithm:
1. Maintain two pointers: `left` starting at the beginning ($0$) and `right` at the end of the array ($n - 1$).
2. While `left` is less than or equal to `right`, calculate the middle index `mid`.
3. Compare `nums[mid]` with `target`:
   - If `nums[mid] === target`, return `mid`.
   - If `nums[mid] < target`, narrow the search to the right half by setting `left = mid + 1`.
   - If `nums[mid] > target`, narrow the search to the left half by setting `right = mid - 1`.
4. If the loop ends without finding `target`, return `-1`.

## 3. Time Complexity
**Time Complexity: $O(\log n)$**

**Explanation:**  
In each iteration, the algorithm divides the remaining search range in half. For an array of size $n$, the maximum number of steps required to reduce the search range to 1 element is $\log_2(n)$. Therefore, the runtime grows logarithmically with $n$.

## 4. Space Complexity
**Space Complexity: $O(1)$**

**Explanation:**  
The algorithm operates iteratively using a few variables (`left`, `right`, `mid`) and does not allocate any extra data structures proportional to the input size.

## 5. Reflection / Improvement
- **Is there a more efficient approach?** No, $O(\log n)$ is the optimal time complexity for searching in an arbitrary sorted array.
- **What would you need to change?** Nothing needs to be changed in terms of complexity. However, to prevent potential integer overflow in languages with fixed integer limits (though not strictly an issue in JavaScript), `mid` calculation could be written as `left + Math.floor((right - left) / 2)`.
- **What complexity could the improved solution achieve?** The theoretical lower bound remains $O(\log n)$ time and $O(1)$ space.