# Search in a Binary Search Tree (LeetCode #700)

## Problem Statement
You are given the `root` of a binary search tree (BST) and an integer `val`[cite: 6].

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`[cite: 6].

---

## Key Concepts

* **Binary Search Tree (BST) Invariant:** For every node in a BST, all values in its left subtree are strictly less than `node.val`, and all values in its right subtree are strictly greater than `node.val`.
* **Half-Tree Pruning:** Unlike a standard binary tree where both branches may need to be searched, BST ordering allows us to discard an entire subtree at every step, reducing search paths to a single root-to-target descent.
* **Iterative Pointer Descent ($\mathcal{O}(1)$ Space):** Moving the `root` pointer down the tree inside a `while` loop eliminates recursion stack overhead.

---

## Approach & Step-by-Step Tracing

### Iterative BST Traversal
1. **Loop Condition:** Continue while `root !== null && root.val !== val`.
2. **Directional Step:**
   - If `val < root.val`, advance `root = root.left`.
   - Else (`val > root.val`), advance `root = root.right`.
3. **Return:** Once the loop terminates, `root` points either to the matching node (along with its intact subtree) or `null` if `val` was not found[cite: 6].

### Execution Trace Example

Given: `root = [4, 2, 7, 1, 3]`, `val = 2`[cite: 6]

| Step | Current `root.val` | Comparison (`val` vs `root.val`) | Action |
| :--- | :--- | :--- | :--- |
| **Step 1** | `4`[cite: 6] | `2 < 4` | Move left to `root.left` (`2`)[cite: 6] |
| **Step 2** | `2`[cite: 6] | `2 === 2` | Loop terminates $\rightarrow$ return node `2` (`[2, 1, 3]`)[cite: 6] |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the BST ($\mathcal{O}(\log n)$ for a balanced BST, $\mathcal{O}(n)$ in the worst case for a skewed BST).
* **Space Complexity:** $\mathcal{O}(1)$ — Iterative traversal uses only a single pointer variable (whereas recursive traversal requires $\mathcal{O}(h)$ call stack space).
