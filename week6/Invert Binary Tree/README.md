# Invert Binary Tree (LeetCode #226)

## Problem Statement
Given the `root` of a binary tree, invert the tree, and return *its root*[cite: 11].

---

## Key Concepts

* **Recursive Swapping (DFS):** At every non-null node, swap its `left` and `right` child pointers, then recursively invert both subtrees.
* **In-Place Pointer Mutation:** Modifies the existing tree structure directly without allocating new `TreeNode` instances.
* **Iterative Level-Order Alternative (BFS):** Uses a queue to visit nodes level by level and swap their left and right children iteratively, avoiding call stack overflow on deeply skewed trees.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Base Case:** If `root === null`, return `null`.
2. **Swap Children:** Store `root.left` in `temp`, set `root.left = root.right`, and set `root.right = temp`.
3. **Recurse:** Call `invertTree(root.left)` and `invertTree(root.right)`.
4. **Return:** Return `root`.

### Execution Trace Example

Given: `root = [4, 2, 7, 1, 3, 6, 9]`[cite: 11]

| Step | Node (`val`) | Action | Subtree State (`left`, `right`) |
| :--- | :--- | :--- | :--- |
| **Step 1** | `4` | Swap children `2` and `7` | `4 -> (7, 2)`[cite: 11] |
| **Step 2** | `7` | Swap children `6` and `9` | `7 -> (9, 6)`[cite: 11] |
| **Step 3** | `9`, `6` | Leaf nodes (`null` children swapped) | `9 -> (null, null)`, `6 -> (null, null)` |
| **Step 4** | `2` | Swap children `1` and `3` | `2 -> (3, 1)`[cite: 11] |
| **Step 5** | `3`, `1` | Leaf nodes (`null` children swapped) | Result: `[4, 7, 2, 9, 6, 3, 1]`[cite: 11] |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — Every node in the tree of size $n$ is visited and its children swapped exactly once.
* **Space Complexity:** $\mathcal{O}(h)$ — Where $h$ is the height of the tree, representing the recursion call stack ($\mathcal{O}(n)$ worst case for a skewed tree, $\mathcal{O}(\log n)$ for a balanced tree).

---

