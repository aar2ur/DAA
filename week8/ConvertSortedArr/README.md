# Convert Sorted Array to Binary Search Tree (LeetCode #108)

## Problem Statement
Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a **height-balanced** binary search tree*.

---

## Key Concepts

* **Middle Element as Root (Divide & Conquer):** Picking the middle element of a sorted subarray guarantees that roughly half of the remaining elements fall into the left subtree (`< nums[mid]`) and half into the right subtree (`> nums[mid]`), keeping subtree heights within 1 level of each other.
* **Index Bounds Instead of Array Slicing:** Passing `left` and `right` boundary pointers rather than calling `nums.slice(...)` avoids $\mathcal{O}(n)$ subarray allocations per recursive call, keeping total runtime strictly $\mathcal{O}(n)$.
* **Preorder Tree Construction:** Instantiates the root node first, then recursively attaches its `left` and `right` children until `left > right` (empty subarray base case).

---

## Approach & Step-by-Step Tracing

### Recursive Boundary Helper (`build(left, right)`)
1. **Base Case:** If `left > right`, return `null`.
2. **Select Midpoint:** Compute `mid = Math.floor((left + right) / 2)` and instantiate `node = new TreeNode(nums[mid])`.
3. **Construct Subtrees:**
   - `node.left = build(left, mid - 1)`
   - `node.right = build(mid + 1, right)`
4. **Return:** Return `node`, starting with `build(0, nums.length - 1)`.

### Execution Trace Example

Given: `nums = [0, 1, 2, 3, 4, 5, 6, 7]`

| Call | Subarray `[left..right]` | `mid` | `nums[mid]` (Root) | Left Range | Right Range |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `build(0, 7)` | `[0, 1, 2, 3, 4, 5, 6, 7]` | `3` (or `4` with upper mid) | `3` (`4` if `Math.ceil`) | `[0..2]` | `[4..7]` |
| `build(0, 2)` | `[0, 1, 2]` | `1` | `1` | `[0..0]` (`0`) | `[2..2]` (`2`) |
| `build(4, 7)` | `[4, 5, 6, 7]` | `5` | `5` | `[4..4]` (`4`) | `[6..7]` (`6 -> 7`) |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Every element in `nums` of length $n$ is visited and turned into a `TreeNode` exactly once.
* **Space Complexity:** $\mathcal{O}(\log n)$ — Auxiliary recursion call stack depth is bounded by the height of the balanced tree (excluding the $\mathcal{O}(n)$ space required for the output tree itself).

---

## Implementation (JavaScript)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function build(left, right) {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    return build(0, nums.length - 1);
};