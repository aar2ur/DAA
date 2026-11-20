# Merge Two Binary Trees (LeetCode #617)

## Problem Statement
You are given two binary trees `root1` and `root2`[cite: 14].

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree[cite: 14].

Return *the merged tree*[cite: 14].

**Note:** The merging process must start from the root nodes of both trees[cite: 14].

---

## Key Concepts

* **Simultaneous Preorder Traversal (DFS):** Both trees are traversed in lockstep (`root1` and `root2` advance together into `.left` and `.right` subtrees).
* **Subtree Short-Circuiting:** When one node is `null`, the entire remaining subtree of the non-null node is attached directly without needing to traverse its children[cite: 14].
* **In-Place vs. Immutable Merging:** Updating `root1` directly achieves $\mathcal{O}(1)$ auxiliary node allocation, while instantiating `new TreeNode(...)` preserves the original input trees untouched.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach (In-Place)
1. **Null Base Cases:**
   - If `root1 === null`, return `root2`[cite: 14].
   - If `root2 === null`, return `root1`[cite: 14].
2. **Merge Overlapping Values:** Add `root2.val` to `root1.val`[cite: 14].
3. **Recurse on Children:**
   - `root1.left = mergeTrees(root1.left, root2.left)`.
   - `root1.right = mergeTrees(root1.right, root2.right)`.
4. **Return:** Return `root1`[cite: 14].

### Execution Trace Example

Given: `root1 = [1, 3, 2, 5]`, `root2 = [2, 1, 3, null, 4, null, 7]`[cite: 14]

| Call | `root1` (`val`) | `root2` (`val`) | Action | Resulting Node Value |
| :--- | :--- | :--- | :--- | :--- |
| `mergeTrees(1, 2)` | `1` | `2` | Overlap $\rightarrow$ `1 + 2`[cite: 14] | `3`[cite: 14] |
| `mergeTrees(3, 1)` | `3` | `1` | Overlap $\rightarrow$ `3 + 1`[cite: 14] | `4`[cite: 14] |
| `mergeTrees(5, null)` | `5` | `null` | `root2` is `null` $\rightarrow$ return `5`[cite: 14] | `5`[cite: 14] |
| `mergeTrees(null, 4)` | `null` | `4` | `root1` is `null` $\rightarrow$ return `4`[cite: 14] | `4`[cite: 14] |
| `mergeTrees(2, 3)` | `2` | `3` | Overlap $\rightarrow$ `2 + 3`[cite: 14] | `5`[cite: 14] |
| `mergeTrees(null, null)` | `null` | `null` | Return `null` | `null`[cite: 14] |
| `mergeTrees(null, 7)` | `null` | `7` | `root1` is `null` $\rightarrow$ return `7`[cite: 14] | `7`[cite: 14] |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(\min(n, m))$ — Where $n$ and $m$ are the number of nodes in `root1` and `root2`. Recursion only visits overlapping nodes and terminates immediately when either branch hits `null`.
* **Space Complexity:** $\mathcal{O}(\min(h_1, h_2))$ — Representing the recursion call stack depth, bounded by the shorter tree height ($\mathcal{O}(\min(n, m))$ in the worst case for skewed trees, $\mathcal{O}(\log(\min(n, m)))$ for balanced trees).

---