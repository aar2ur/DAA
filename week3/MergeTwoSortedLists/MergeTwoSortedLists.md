# Merge Two Sorted Lists (LeetCode #21)

## Problem Statement
You are given the heads of two sorted linked lists, `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

---

## Key Concepts

* **Linked List Structure:** Unlike standard JavaScript Arrays, Linked Lists do not support index-based access (`arr[i]`) or built-in methods like `.map()` or `.filter()`. Navigation is performed manually via object references (`node.next`).
* **Dummy Node Pattern:** A temporary initial node (`dummy = { val: 0, next: null }`) serves as a fixed anchor for building the new list. It eliminates edge-case checks for assigning the initial head pointer.

---

## Approach & Step-by-Step Tracing

1. **Initialization:** 
   - Create a `dummy` node (`{ val: 0, next: null }`) and set a tracking pointer `current = dummy`.
2. **Comparison Loop:**
   - Iterate with `while (list1 !== null && list2 !== null)`.
   - Compare values: if `list1.val < list2.val`, attach `list1` to `current.next` and advance `list1`. Otherwise, attach `list2` and advance `list2`.
   - Advance `current` to `current.next`.
3. **Attach Remainder:**
   - After the loop, attach any remaining elements from non-empty lists via `current.next = list1 !== null ? list1 : list2`.
4. **Return:**
   - Return `dummy.next` (the head of the new merged list).

### Execution Trace Example

Given:
* `list1 = 1 -> 2 -> 4 -> null`
* `list2 = 1 -> 3 -> 4 -> null`

| Step | Action | Attached Node | Current Merged State (`dummy.next`) |
| :--- | :--- | :--- | :--- |
| **Start** | Init `dummy` and `current` | N/A | `null` |
| **Step 1** | Compare `1` vs `1` (pick `list2`) | `1` | `1 -> null` |
| **Step 2** | Compare `1` vs `3` (pick `list1`) | `1` | `1 -> 1 -> null` |
| **Step 3** | Compare `2` vs `3` (pick `list1`) | `2` | `1 -> 1 -> 2 -> null` |
| **Step 4** | Compare `4` vs `3` (pick `list2`) | `3` | `1 -> 1 -> 2 -> 3 -> null` |
| **Step 5** | Compare `4` vs `4` (pick `list2`) | `4` | `1 -> 1 -> 2 -> 3 -> 4 -> null` |
| **End** | Loop stops; attach remaining `list1` | `4` | `1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null` |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n + m)$ — Where $n$ and $m$ are the lengths of `list1` and `list2`. We iterate through each node at most once.
* **Space Complexity:** $\mathcal{O}(1)$ — We splice and adjust existing node pointers in-place without allocating new list nodes.

---

## Implementation (JavaScript)

* Best solution i suppose