/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// --- СПОСОБ 1: Рекурсивный (самый читаемый) ---
var inorderTraversalRecursive = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left);    // 1. Идем в левое поддерево
        result.push(node.val);  // 2. Записываем значение текущего узла
        traverse(node.right);   // 3. Идем в правое поддерево
    }

    traverse(root);
    return result;
};

// --- СПОСОБ 2: Итеративный со стеком (O(1) доп. стека вызовов) ---
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Спускаемся максимально влево, сохраняя узлы в стек
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Достаем последний левый узел и фиксируем его значение
        current = stack.pop();
        result.push(current.val);

        // Переходим в правое поддерево
        current = current.right;
    }

    return result;
};

// --- ТЕСТИРОВАНИЕ В VS CODE ---

// Пример 1 из условия: root = [1, null, 2, 3]
//     1
//      \
//       2
//      /
//     3
const tree1 = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3), null)
);

console.log("Recursive Output:", inorderTraversalRecursive(tree1)); // [1, 3, 2]
console.log("Iterative Output:", inorderTraversal(tree1));          // [1, 3, 2]