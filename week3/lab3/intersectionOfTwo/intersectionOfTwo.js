/**
 * @param {Object} headA
 * @param {Object} headB
 * @return {Object}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let ptrA = headA;
    let ptrB = headB;

    // Пока указатели не встретятся
    while (ptrA !== ptrB) {
        // Если ptrA дошел до конца, перенаправляем на старт B, иначе шаг вперед
        ptrA = ptrA === null ? headB : ptrA.next;
        
        // Если ptrB дошел до конца, перенаправляем на старт A, иначе шаг вперед
        ptrB = ptrB === null ? headA : ptrB.next;
    }

    // Либо точка пересечения, либо null (если пересечения нет)
    return ptrA;
};

// --- ТЕСТИРОВАНИЕ В VS Code ---

// Создаем общую часть (ножку Y): 8 -> 4 -> 5
const sharedTail = {
    val: 8,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
};

// Список A: 4 -> 1 -> [8 -> 4 -> 5]
const headA = {
    val: 4,
    next: {
        val: 1,
        next: sharedTail
    }
};

// Список B: 5 -> 6 -> 1 -> [8 -> 4 -> 5]
const headB = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 1,
            next: sharedTail
        }
    }
};

const intersection = getIntersectionNode(headA, headB);
console.log("Intersection Node Val:", intersection ? intersection.val : null); 
// Выведет: Intersection Node Val: 8