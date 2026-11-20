# Sum of Left Leaves (LeetCode #404)

## Problem Statement
Given the `root` of a binary tree, return *the sum of all left leaves*[cite: 13].

A **leaf** is a node with no children. A **left leaf** is a leaf that is the left child of another node[cite: 13].

---

## Key Concepts

* **Parent-Level Lookahead (DFS):** Since a node does not hold a reference to its parent, checking whether `root.left` is a leaf (`root.left.left === null && root.left.right === null`) directly from the parent eliminates the need for extra boolean flags (`isLeft`).
* **Right Subtree Traversal:** Even though a right child itself is never a left leaf, its subtree can still contain left leaves (e.g., node `15` under `20`), so recursion must always proceed into `root.right`[cite: 13].
* **Single-Node Edge Case:** A tree consisting solely of `root` has no left leaves and returns `0`.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Base Case:** If `root === null`, return `0`.
2. **Initialize Accumulator:** Set `sum = 0`.
3. **Inspect Left Child:**
   - If `root.left !== null && root.left.left === null && root.left.right === null`, add `root.left.val` to `sum`.
   - Else, recursively add `sumOfLeftLeaves(root.left)` to `sum`.
4. **Inspect Right Subtree:** Recursively add `sumOfLeftLeaves(root.right)` to `sum`.
5. **Return:** Return `sum`.

### Execution Trace Example

Given: `root = [3, 9, 20, null, null, 15, 7]`[cite: 13]

| Call | Node (`val`) | Left Child Check | Right Subtree Call | Accumulated Sum |
| :--- | :--- | :--- | :--- | :--- |
| `sumOfLeftLeaves(3)` | `3` | `9` is a leaf $\rightarrow$ `+9`[cite: 13] | Recurse on `20` | `9 + 15 = 24`[cite: 13] |
| `sumOfLeftLeaves(20)` | `20` | `15` is a leaf $\rightarrow$ `+15`[cite: 13] | Recurse on `7` | `15 + 0 = 15` |
| `sumOfLeftLeaves(7)` | `7` | `null` $\rightarrow$ `0` | `null` $\rightarrow$ `0` | `0` |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Every node in the tree of size $n$ is visited at most once.
* **Space Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the tree, representing the recursion call stack ($\mathcal{O}(n)$ worst case for a skewed tree, $\mathcal{O}(\log n)$ for a balanced tree).

---
