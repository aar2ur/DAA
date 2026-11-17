# Minimum Depth of Binary Tree (LeetCode #111)

## Problem Statement
Given a binary tree, find its minimum depth[cite: 7].

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node[cite: 7].

**Note:** A leaf is a node with no children[cite: 7].

---

## Key Concepts

* **Leaf Node Constraint:** Unlike maximum depth, a `null` child on a node that still has another child does **not** count as a valid path termination. A valid path must end at a node where both `left === null` and `right === null`[cite: 7].
* **Single-Child Handling (DFS):** If a node has only one non-null child, recursion must follow that existing branch rather than taking `Math.min(0, childDepth)`.
* **Early Exit Optimization (BFS):** Level-order traversal naturally finds the nearest leaf first, allowing immediate termination without exploring deeper subtrees.

---

## Approach & Step-by-Step Tracing

### Recursive DFS Approach
1. **Empty Tree Check:** If `root === null`, return `0`.
2. **Skewed Node Checks:**
   - If `root.left === null`, return `1 + minDepth(root.right)`.
   - If `root.right === null`, return `1 + minDepth(root.left)`.
3. **Both Children Exist:** Return `1 + Math.min(minDepth(root.left), minDepth(root.right))`.

### Execution Trace Example

Given: `root = [3, 9, 20, null, null, 15, 7]`[cite: 7]

| Call | Node (`val`) | Condition | Returned Value |
| :--- | :--- | :--- | :--- |
| `minDepth(9)` | `9` | Both children `null` (`1 + Math.min(0, 0)`) | `1` |
| `minDepth(15)` | `15` | Both children `null` | `1` |
| `minDepth(7)` | `7` | Both children `null` | `1` |
| `minDepth(20)` | `20` | Both children exist (`1 + Math.min(1, 1)`) | `2` |
| `minDepth(3)` | `3` | Both children exist (`1 + Math.min(1, 2)`) | **`2`** |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — In the worst case (a completely skewed tree), all $n$ nodes are visited. With BFS, balanced trees terminate early in $\mathcal{O}(n/2)$ operations.
* **Space Complexity:** $\mathcal{O}(h)$ for DFS (call stack height, $\mathcal{O}(n)$ worst case / $\mathcal{O}(\log n)$ balanced) and $\mathcal{O}(w)$ for BFS (maximum width of the tree, up to $\mathcal{O}(n/2)$).
