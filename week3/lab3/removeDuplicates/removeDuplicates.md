# Remove Duplicates from Sorted List (LeetCode #83)

## Problem Statement
Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list **sorted** as well.

---

## Key Concepts

* **In-Place Node Deletion:** Duplicates are removed by re-linking node pointers (`current.next = current.next.next`) rather than allocating new nodes.
* **Conditional Pointer Advancement:** The traversal pointer (`current`) must ONLY advance when no deletion occurs. If a duplicate is removed, `current` remains on the same node to handle consecutive duplicates (e.g., `1 -> 1 -> 1`).
* **Head Preservation:** A separate pointer (`current = head`) traverses the list while keeping `head` anchored to return the modified list correctly.

---

## Approach & Step-by-Step Tracing

1. **Initialization:** Set a reference pointer `current = head`.
2. **Loop Condition:** Iterate while both `current` and `current.next` are not `null`.
3. **Duplicate Check:**
   - If `current.val === current.next.val`: Bypass the duplicate node by reassigning `current.next = current.next.next`.
   - Else: Move forward to the next node (`current = current.next`).
4. **Return:** Return the original `head`.

### Execution Trace Example

Given: `head = [1, 1, 2]`

| Step | Current Node (`val`) | Next Node (`val`) | Action | Resulting List State |
| :--- | :--- | :--- | :--- | :--- |
| **Start** | `1` | `1` | Detect duplicate (`1 === 1`) | `1 -> 1 -> 2` |
| **Step 1** | `1` | `1` | Re-link `current.next = node(2)` | `1 -> 2` |
| **Step 2** | `1` | `2` | Compare (`1 !== 2`), advance `current` | `1 -> 2` |
| **Step 3** | `2` | `null` | Loop terminates (`current.next === null`) | `1 -> 2` |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — We traverse the list of $n$ nodes exactly once.
* **Space Complexity:** $\mathcal{O}(1)$ — Modifications are performed in-place using only one additional pointer variable.