# Range Sum of BST (LeetCode #938)

## Problem Statement
Given the `root` node of a binary search tree and two integers `low` and `high`, return *the sum of values of all nodes with a value in the **inclusive** range `[low, high]`*[cite: 7].

---

## Key Concepts

* **BST Subtree Pruning:** Leveraging the binary search tree ordering property (`left.val < node.val < right.val`) avoids visiting entire branches guaranteed to fall outside `[low, high]`.
* **Lower-Bound Pruning (`root.val < low`):** Every node in `root.left` is strictly smaller than `root.val` and therefore `< low`, so only `root.right` needs to be explored.
* **Upper-Bound Pruning (`root.val > high`):** Every node in `root.right` is strictly greater than `root.val` and therefore `> high`, so only `root.left` needs to be explored.

---

## Approach & Step-by-Step Tracing

### Pruned Recursive DFS
1. **Base Case:** If `root === null`, return `0`.
2. **Below Range (`root.val < low`):** Prune the left subtree and return `rangeSumBST(root.right, low, high)`.
3. **Above Range (`root.val > high`):** Prune the right subtree and return `rangeSumBST(root.left, low, high)`.
4. **Inside Range (`low <= root.val <= high`):** Return `root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)`.

### Execution Trace Example

Given: `root = [10, 5, 15, 3, 7, null, 18]`, `low = 7`, `high = 15`[cite: 7]

| Call | `root.val` | Range Check `[7, 15]` | Action | Returned Value |
| :--- | :--- | :--- | :--- | :--- |
| `rangeSumBST(10)` | `10` | In range | `10 + left(5) + right(15)` | `10 + 7 + 15 = 32` |
| `rangeSumBST(5)` | `5` | `5 < 7` (Below `low`) | Prune left (`3`), recurse right (`7`) | `7` |
| `rangeSumBST(7)` | `7` | In range (`7 === low`) | `7 + left(null) + right(null)` | `7` |
| `rangeSumBST(15)` | `15` | In range (`15 === high`) | `15 + left(null) + right(18)` | `15 + 0 + 0 = 15` |
| `rangeSumBST(18)` | `18` | `18 > 15` (Above `high`) | Prune right, recurse left (`null`) | `0`[cite: 7] |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — In the worst case (when all nodes lie inside `[low, high]`), every node in the tree of size $n$ is visited once; on average, pruning skips subtrees outside the range.
* **Space Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the tree, representing the recursion call stack ($\mathcal{O}(n)$ worst case for a skewed BST, $\mathcal{O}(\log n)$ for a balanced BST).

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
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (root === null) {
        return 0;
    }

    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }

    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};  