# Remove Linked List Elements (LeetCode #203)

## Problem Statement
Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.

---

## Key Concepts

* **Dummy Node Pattern:** Essential for handling edge cases where the node to be deleted is the head of the list. The `dummy` node anchors the sequence, preventing head-pointer loss.
* **In-Place Re-linking:** Bypasses target nodes by updating pointer references directly (`current.next = current.next.next`) without extra memory allocation.
* **Conditional Advancement:** The traversal pointer advances only when no deletion occurs, ensuring consecutive target values are properly evaluated.

---

## Approach & Step-by-Step Tracing

1. **Initialization:** Create a `dummy` node (`{ val: 0, next: head }`) and set `current = dummy`.
2. **Traversal Loop:** Iterate while `current.next !== null`.
3. **Value Check:**
   - If `current.next.val === val`: Bypass the node by setting `current.next = current.next.next`.
   - Else: Advance `current = current.next`.
4. **Return:** Return `dummy.next` as the new head.

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — We traverse each node of the list once.
* **Space Complexity:** $\mathcal{O}(1)$ — In-place pointer modifications with constant auxiliary memory.

---

## Implementation (JavaScript)

```javascript
/**
 * Definition for singly-linked list node.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = { val: 0, next: head };
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};