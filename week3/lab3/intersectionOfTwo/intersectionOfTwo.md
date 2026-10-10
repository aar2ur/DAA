# Intersection of Two Linked Lists (LeetCode #160)

## Problem Statement
Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

---

## Key Concepts

* **Two-Pointer Synchronization:** By redirecting a pointer to the head of the opposite list once it hits `null`, both pointers traverse a combined distance of $len(A) + len(B)$. 
* **Equidistant Meeting Point:** This offset adjustment guarantees that both pointers align and meet precisely at the intersection node in the second pass, eliminating length discrepancies.
* **Space Optimization:** Achieves $\mathcal{O}(1)$ auxiliary space without needing a Hash Set to track visited nodes.

---

## Approach & Step-by-Step Tracing

1. **Initialization:** Set `ptrA = headA` and `ptrB = headB`.
2. **Traversal Loop:** Iterate while `ptrA !== ptrB`.
3. **Pointer Switch:** 
   - When `ptrA` reaches `null`, redirect it to `headB`. Otherwise, advance: `ptrA = ptrA.next`.
   - When `ptrB` reaches `null`, redirect it to `headA`. Otherwise, advance: `ptrB = ptrB.next`.
4. **Result:** Return `ptrA` (which is either the intersection node or `null` if no intersection exists).

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n + m)$ — Where $n$ and $m$ are the lengths of the two lists. Each pointer traverses at most the length of both lists combined.
* **Space Complexity:** $\mathcal{O}(1)$ — Constant memory used for pointer references.
