/**
 * @param {Object} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};


const node4 = { val: -4, next: null };
const node3 = { val: 0, next: node4 };
const node2 = { val: 2, next: node3 };
const node1 = { val: 3, next: node2 };

node4.next = node2;

// Проверяем
console.log("Has Cycle:", hasCycle(node1)); // Выведет: true