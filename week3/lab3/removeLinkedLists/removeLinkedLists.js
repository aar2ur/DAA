/**
 * @param {Object} head
 * @param {number} val
 * @return {Object}
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



function printList(head) {
    const result = [];
    let curr = head;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> ") + " -> null");
}


const testList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

console.log("Исходный список:");
printList(testList);

const cleanedList = removeElements(testList, 6);

console.log("После удаления значения 6:");
printList(cleanedList); 
