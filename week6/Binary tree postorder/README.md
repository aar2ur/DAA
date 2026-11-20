# Binary Tree Postorder Traversal (LeetCode #145)

## Problem Statement
Given the `root` of a binary tree, return the *postorder traversal* of its nodes' values[cite: 10].

---

## Key Concepts

* **Postorder Traversal Rule (`Left -> Right -> Root`):** Recursively traverse the left subtree first, then the right subtree, and process the current node's value last.
* **Reversed Modified Preorder Trick (Iterative):** Postorder (`Left -> Right -> Root`) is the exact reverse of `Root -> Right -> Left`. By pushing `node.left` before `node.right` onto a stack and reversing the collected output at the end, we achieve postorder traversal cleanly without tracking visited states.

---

## Approach & Step-by-Step Tracing

### Iterative Approach (Explicit Stack + Reverse)
1. **Edge Case Check:** If `root === null`, return `[]`.
2. **Initialization:** Initialize `result = []` and `stack = [root]`.
3. **Traversal Loop:** While `stack.length > 0`:
   - Pop the top node: `node = stack.pop()`.
   - Record its value: `result.push(node.val)`.
   - If `node.left !== null`, push `node.left` onto `stack`.
   - If `node.right !== null`, push `node.right` onto `stack`.
4. **Reverse & Return:** Return `result.reverse()`.

### Execution Trace Example

Given: `root = [1, null, 2, 3]`[cite: 10]

| Step | Action | Stack State (`val`) | `result` (Before Reverse) |
| :--- | :--- | :--- | :--- |
| **Start** | Push `root(1)` | `[1]` | `[]` |
| **Step 1** | Pop `1`, record `1`, push right (`2`) | `[2]` | `[1]` |
| **Step 2** | Pop `2`, record `2`, push left (`3`) | `[3]` | `[1, 2]` |
| **Step 3** | Pop `3`, record `3` (no children) | `[]` | `[1, 2, 3]` |
| **Final** | Call `result.reverse()` | `[]` | **`[3, 2, 1]`** |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Each of the $n$ nodes is visited once during traversal ($\mathcal{O}(n)$), and reversing the array takes $\mathcal{O}(n)$ time.
* **Space Complexity:** $\mathcal{O}(n)$ — In the worst case (a completely skewed tree), the stack or recursion call stack holds all $n$ nodes ($\mathcal{O}(\log n)$ for a balanced tree).

---

