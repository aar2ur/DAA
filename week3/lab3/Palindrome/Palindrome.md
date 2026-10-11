# Palindrome Linked List (LeetCode #234)

## Problem Statement
Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

---

## Key Concepts

* **Tortoise and Hare Midpoint Finding:** Locates the exact middle node of the linked list in a single pass.
* **In-Place List Reversal:** Reverses the second half of the linked list pointers without allocating auxiliary arrays, satisfying the $\mathcal{O}(1)$ space constraint.
* **Dual-Pointer Comparison:** Simultaneously traverses the first half and the reversed second half to validate value symmetry.

---

## Approach & Step-by-Step Tracing

1. **Find Middle:** Use `slow` and `fast` pointers to locate the midpoint.
2. **Reverse Second Half:** Invert the `next` pointers from the middle node to the end.
3. **Compare Halves:** Iterate with `left` (starting at `head`) and `right` (starting at the reversed sub-list head). Check if all values match.
4. **Return:** Return `true` if values match all the way through, otherwise `false`.

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — We traverse the list to find the middle, reverse the half, and compare nodes, all of which scale linearly.
* **Space Complexity:** $\mathcal{O}(1)$ — No extra data structures are used; pointers are adjusted in place.
