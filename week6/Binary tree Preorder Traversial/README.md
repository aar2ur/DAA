# Binary Tree Preorder Traversal (LeetCode #144)

## Problem Statement
Given the `root` of a binary tree, return the *preorder traversal* of its nodes' values[cite: 9].

---

## Key Concepts

* **Preorder Traversal Rule (`Root -> Left -> Right`):** Process the current node's value immediately upon visiting it, then recursively traverse the left subtree, followed by the right subtree.
* **Iterative Stack Order (LIFO):** Because a stack processes elements in Last-In-First-Out order, push `node.right` before `node.left` so that the left child is popped and processed first.

---

## Approach & Step-by-Step Tracing

### Iterative Approach (Explicit Stack)
1. **Edge Case Check:** If `root === null`, return `[]`.
2. **Initialization:** Initialize `result = []` and `stack = [root]`.
3. **Traversal Loop:** While `stack.length > 0`:
   - Pop the top node: `node = stack.pop()`.
   - Record its value: `result.push(node.val)`.
   - If `node.right !== null`, push `node.right` onto `stack`.
   - If `node.left !== null`, push `node.left` onto `stack`.
4. **Return:** Return `result`.

### Execution Trace Example

Given: `root = [1, null, 2, 3]`[cite: 9]

| Step | Action | Stack State (`val`) | `result` |
| :--- | :--- | :--- | :--- |
| **Start** | Push `root(1)` | `[1]` | `[]` |
| **Step 1** | Pop `1`, record `1`, push right (`2`) | `[2]` | `[1]` |
| **Step 2** | Pop `2`, record `2`, push left (`3`) | `[3]` | `[1, 2]` |
| **Step 3** | Pop `3`, record `3` (no children) | `[]` | `[1, 2, 3]` |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Each of the $n$ nodes in the tree is pushed and popped exactly once.
* **Space Complexity:** $\mathcal{O}(n)$ — In the worst case (a completely skewed tree), the stack or recursion depth holds all $n$ nodes ($\mathcal{O}(\log n)$ for a balanced tree).

---

