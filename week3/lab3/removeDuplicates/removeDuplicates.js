/**
 * @param {Object} head
 * @return {Object}
 */
var deleteDuplicates = function(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Перешагиваем через дубликат
            current.next = current.next.next;
        } else {
            // Двигаемся дальше только если дубликата не было
            current = current.next;
        }
    }

    return head;
};

// --- ТЕСТИРОВАНИЕ В VS CODE ---

// Вспомогательная функция для удобного вывода списка в консоль
function printList(head) {
    const result = [];
    let curr = head;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> ") + " -> null");
}

// Тест 1: 1 -> 1 -> 2
const test1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
};

console.log("Исходный список:");
printList(test1);

const result1 = deleteDuplicates(test1);

console.log("Результат:");
printList(result1); 
// Выведет: 1 -> 2 -> null

console.log("\n-------------------\n");

// Тест 2: 1 -> 1 -> 2 -> 3 -> 3
const test2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
};

console.log("Исходный список:");
printList(test2);

const result2 = deleteDuplicates(test2);

console.log("Результат:");
printList(result2); 
// Выведет: 1 -> 2 -> 3 -> null