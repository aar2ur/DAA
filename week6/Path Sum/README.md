# Path Sum (LeetCode #112)

## Problem Statement
Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`[cite: 8].

A **leaf** is a node with no children[cite: 8].

---

## Key Concepts

* **Top-Down Subtraction (DFS):** Instead of carrying an extra accumulator parameter, subtract `root.val` from `targetSum` at each recursive step until reaching a leaf.
* **Strict Leaf Termination:** A valid path must end specifically at a leaf (`root.left === null && root.right === null`)[cite: 8]. Matching `targetSum` at an internal node with children does **not** count.
* **Short-Circuit Evaluation (`||`):** Using logical OR allows recursion to stop immediately once any valid root-to-leaf path is discovered.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Empty Node Base Case:** If `root === null`, return `false`.
2. **Subtract Current Value:** Compute `remaining = targetSum - root.val`.
3. **Leaf Check:** If `root.left === null && root.right === null`, return `remaining === 0`.
4. **Recurse:** Return `hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining)`.

### Execution Trace Example

Given: `root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]`, `targetSum = 22`[cite: 8]

| Call | Node (`val`) | `remaining` (`targetSum - val`) | Leaf? | Action / Result |
| :--- | :--- | :--- | :--- | :--- |
| `hasPathSum(5, 22)` | `5` | `22 - 5 = 17` | No | Recurse left (`4`) |
| `hasPathSum(4, 17)` | `4` | `17 - 4 = 13` | No | Recurse left (`11`) |
| `hasPathSum(11, 13)` | `11` | `13 - 11 = 2` | No | Recurse left (`7`) |
| `hasPathSum(7, 2)` | `7` | `2 - 7 = -5` | Yes | `-5 !== 0` $\rightarrow$ `false` |
| `hasPathSum(2, 2)` | `2` | `2 - 2 = 0` | Yes | **`0 === 0` $\rightarrow$ `true`** |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — In the worst case (when no valid path exists or it is the rightmost path), every node in the tree of size $n$ is visited once.
* **Space Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the tree, representing the recursion call stack ($\mathcal{O}(n)$ worst case for a skewed tree, $\mathcal{O}(\log n)$ for a balanced tree).

