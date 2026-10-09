# Linked List Cycle (LeetCode #141)

## Problem Statement
Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

---

## Key Concepts

* **Floyd's Cycle-Finding Algorithm (Tortoise and Hare):** Uses two pointers moving at different speeds (`slow` moves 1 step, `fast` moves 2 steps).
* **Catch-up Mechanism:** If a cycle exists, the fast pointer will eventually enter the loop and catch up to the slow pointer from behind, meeting at the exact same node (`slow === fast`).
* **Linear Traversal Termination:** If no cycle exists, `fast` or `fast.next` will hit `null`, indicating a finite list.

---

## Approach & Step-by-Step Tracing

1. **Edge Case Check:** If `head` is `null` or `head.next` is `null`, return `false` immediately.
2. **Pointer Initialization:** Set both `slow` and `fast` pointers to `head`.
3. **Traversal:** 
   - Advance `slow` by 1 node: `slow = slow.next`.
   - Advance `fast` by 2 nodes: `fast = fast.next.next`.
4. **Collision Detection:** Inside the loop, check if `slow === fast`. If true, a cycle is detected (`return true`).
5. **Termination:** If the loop terminates because `fast` reaches `null`, return `false`.

### Execution Trace Example

Given: `head = [3, 2, 0, -4]`, `pos = 1` (tail `-4` connects back to node `2`).

| Step | Slow Pointer (`val`) | Fast Pointer (`val`) | Condition (`slow === fast`) |
| :--- | :--- | :--- | :--- |
| **Start** | `3` (head) | `3` (head) | Skip check at init |
| **Step 1** | `2` | `0` | `2 !== 0` (Continue) |
| **Step 2** | `0` | `2` (cycled back) | `0 !== 2` (Continue) |
| **Step 3** | `-4` | `-4` | **`-4 === -4` (Cycle Found!)** |

---

## Complexity Analysis

* **Time Complexity:** $\mathcal{O}(n)$ — If no cycle exists, `fast` reaches the end in $n/2$ steps. If a cycle exists, `fast` catches `slow` within $k$ iterations (where $k$ is the length of the cycle).
* **Space Complexity:** $\mathcal{O}(1)$ — Only two memory references (`slow` and `fast`) are used regardless of list size.

---