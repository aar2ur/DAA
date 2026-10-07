function mergeTwoLists(list1, list2) {
    let dummy = { val: 0, next: null };
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next; //Switches to the next node undependently of it was list1 or list2 
    }

    current.next = list1 !== null ? list1 : list2; //Cheks whether one of the lists is not null(finished) yet

    return dummy.next; //Returns final list
}

// Объявление списков через обычные объекты
const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};

const list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};

const mergedHead = mergeTwoLists(list1, list2);

console.log(JSON.stringify(mergedHead, null, 2));
