# Binary Tree Inorder Traversal (LeetCode #94)

## Problem Statement
Given the `root` of a binary tree, return the *inorder traversal* of its nodes' values[cite: 5].

---

## Key Concepts

* **Inorder Traversal Rule (`Left -> Root -> Right`):** For every node, recursively visit its left subtree first, record the current node's value, and finally visit its right subtree.
* **Recursive DFS:** Uses the implicit call stack to backtrack from leaf nodes back up to parent nodes.
* **Iterative Stack Simulation:** Replaces recursion with an explicit `stack` array to drill down the leftmost branch before processing the node and shifting right.

---

## Approach & Step-by-Step Tracing

### Iterative Approach (Explicit Stack)
1. **Initialization:** Create an empty `result` array, an empty `stack`, and set `current = root`.
2. **Loop Condition:** Continue while `current !== null` or `stack.length > 0`.
3. **Drill Left:** Push `current` onto the `stack` and move `current = current.left` until hitting `null`.
4. **Process Node:** Pop the top node from `stack`, assign it to `current`, and push `current.val` into `result`.
5. **Shift Right:** Move to the right child (`current = current.right`) and repeat.

### Execution Trace Example

Given: `root = [1, null, 2, 3]`[cite: 5]

| Step | Action | Stack State (`val`) | `current` (`val`) | `result` |
| :--- | :--- | :--- | :--- | :--- |
| **Start** | Initialize `current = root(1)` | `[]` | `1` | `[]` |
| **Step 1** | Push `1`, move left (`null`) | `[1]` | `null` | `[]` |
| **Step 2** | Pop `1`, record `1`, move right (`2`) | `[]` | `2` | `[1]` |
| **Step 3** | Push `2`, move left (`3`) | `[2]` | `3` | `[1]` |
| **Step 4** | Push `3`, move left (`null`) | `[2, 3]` | `null` | `[1]` |
| **Step 5** | Pop `3`, record `3`, move right (`null`) | `[2]` | `null` | `[1, 3]` |
| **Step 6** | Pop `2`, record `2`, move right (`null`) | `[]` | `null` | `[1, 3, 2]` |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Every node in the tree of size $n$ is visited exactly once.
* **Space Complexity:** $\mathcal{O}(n)$ — In the worst case (a completely skewed tree), the recursion call stack or explicit stack holds all $n$ nodes. For a balanced tree, space is $\mathcal{O}(\log n)$.
