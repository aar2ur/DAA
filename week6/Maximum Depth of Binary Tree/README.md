# Maximum Depth of Binary Tree (LeetCode #104)

## Problem Statement
Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

---

## Key Concepts

* **Recursive Depth-First Search (DFS):** Computes the height bottom-up. Each node contributes `1` to the maximum height returned by its left and right subtrees.
* **Base Case Termination:** A `null` child returns a depth of `0`, naturally stopping recursion at leaf boundaries.
* **Breadth-First Search (BFS) Alternative:** Processes the tree level by level using a queue, incrementing a depth counter after each full level is traversed.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Base Case:** If `root === null`, return `0`.
2. **Recursive Calls:** Recursively calculate `leftDepth = maxDepth(root.left)` and `rightDepth = maxDepth(root.right)`.
3. **Combine Results:** Return `1 + Math.max(leftDepth, rightDepth)`.

### Execution Trace Example

Given: `root = [3, 9, 20, null, null, 15, 7]`

| Call | Node (`val`) | `leftDepth` | `rightDepth` | Returned Value (`1 + max`) |
| :--- | :--- | :--- | :--- | :--- |
| `maxDepth(9)` | `9` | `0` | `0` | `1` |
| `maxDepth(15)` | `15` | `0` | `0` | `1` |
| `maxDepth(7)` | `7` | `0` | `0` | `1` |
| `maxDepth(20)` | `20` | `1` (from 15) | `1` (from 7) | `2` |
| `maxDepth(3)` | `3` | `1` (from 9) | `2` (from 20) | **`3`** |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Every node in the tree of size $n$ is visited once.
* **Space Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the tree, representing the maximum depth of the recursion call stack ($\mathcal{O}(n)$ in the worst case for a completely skewed tree, and $\mathcal{O}(\log n)$ for a balanced tree).
