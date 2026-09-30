//FIBONACCI FUNCTION

/*function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibo(3) =", fibonacci(3));
console.log("fibo(5) =", fibonacci(5));
console.log("fibo(8) =", fibonacci(8));*/

//ITERATIVE BINARY SEARCH

/*function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(binarySearchIterative(arr, 23)); // Пример 1
console.log(binarySearchIterative(arr, 2));  // Пример 2
console.log(binarySearchIterative(arr, 100));// Пример 3*/

//RECURSIVE BINARY SEARCH

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

const nums = [1, 3, 5, 7, 9, 11];

console.log(binarySearchRecursive(nums, 7)); // 3
console.log(binarySearchRecursive(nums, 1)); // 0
console.log(binarySearchRecursive(nums, 4)); // -1

