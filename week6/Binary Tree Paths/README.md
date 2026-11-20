# Binary Tree Paths (LeetCode #257)

## Problem Statement
Given the `root` of a binary tree, return *all root-to-leaf paths in **any order***[cite: 12].

A **leaf** is a node with no children[cite: 12].

---

## Key Concepts

* **Top-Down Path Accumulation (DFS):** Passes a string representation of the path down the recursion tree, appending `->` only when descending to a non-null child.
* **Immutable String Branching:** Because JavaScript strings are immutable primitives, each recursive branch receives its own independent copy of `currentPath`, eliminating the need for manual backtracking pop operations.
* **Leaf Boundary Recording:** A path is finalized and pushed to the result array strictly when `node.left === null && node.right === null`[cite: 12].

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Initialization:** Create an empty `paths` array. If `root === null`, return `paths`.
2. **Helper Traversal (`dfs(node, currentPath)`):**
   - Append `node.val` to `currentPath`.
   - If `node.left === null && node.right === null`, push `currentPath` into `paths` and return.
   - If `node.left !== null`, call `dfs(node.left, currentPath + "->")`.
   - If `node.right !== null`, call `dfs(node.right, currentPath + "->")`.
3. **Start & Return:** Invoke `dfs(root, "")` and return `paths`.

### Execution Trace Example

Given: `root = [1, 2, 3, null, 5]`[cite: 12]

| Call | Node (`val`) | `currentPath` | Leaf? | Action |
| :--- | :--- | :--- | :--- | :--- |
| `dfs(1, "")` | `1` | `"1"` | No | Recurse left (`2`) and right (`3`) |
| `dfs(2, "1->")` | `2` | `"1->2"` | No | Recurse right (`5`) |
| `dfs(5, "1->2->")` | `5` | `"1->2->5"` | Yes | Push `"1->2->5"` to `paths`[cite: 12] |
| `dfs(3, "1->")` | `3` | `"1->3"` | Yes | Push `"1->3"` to `paths`[cite: 12] |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n \cdot h)$ — Each of the $n$ nodes is visited once, and constructing/copying path strings of length up to the tree height $h$ takes $\mathcal{O}(h)$ time per leaf ($\mathcal{O}(n^2)$ worst case for a skewed tree, $\mathcal{O}(n \log n)$ for a balanced tree).
* **Space Complexity:** $\mathcal{O}(h)$ — Auxiliary recursion stack depth proportional to the height of the tree (excluding the output array).

---
