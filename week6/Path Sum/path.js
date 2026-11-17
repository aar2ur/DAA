/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// --- СПОСОБ 1: Рекурсивный DFS (оптимальный по читаемости и памяти) ---
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }

    const remaining = targetSum - root.val;

    // Проверяем, является ли текущий узел листом
    if (root.left === null && root.right === null) {
        return remaining === 0;
    }

    // Ищем подходящий путь хотя бы в одном из поддеревьев
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

// --- СПОСОБ 2: Итеративный DFS со стеком ---
var hasPathSumIterative = function(root, targetSum) {
    if (root === null) return false;

    const stack = [[root, targetSum - root.val]];

    while (stack.length > 0) {
        const [node, currentRemaining] = stack.pop();

        if (node.left === null && node.right === null && currentRemaining === 0) {
            return true;
        }

        if (node.right !== null) {
            stack.push([node.right, currentRemaining - node.right.val]);
        }
        if (node.left !== null) {
            stack.push([node.left, currentRemaining - node.left.val]);
        }
    }

    return false;
};

// --- ТЕСТИРОВАНИЕ В VS CODE ---

// Пример 1 из условия: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Путь: 5 -> 4 -> 11 -> 2 (5 + 4 + 11 + 2 = 22)
const tree1 = new TreeNode(
    5,
    new TreeNode(
        4,
        new TreeNode(11, new TreeNode(7), new TreeNode(2)),
        null
    ),
    new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(4, null, new TreeNode(1))
    )
);

console.log("Recursive hasPathSum (22):", hasPathSum(tree1, 22));          // true
console.log("Iterative hasPathSum (22):", hasPathSumIterative(tree1, 22)); // true
console.log("Recursive hasPathSum (26):", hasPathSum(tree1, 26));          // true (5 -> 8 -> 13)
console.log("Recursive hasPathSum (10):", hasPathSum(tree1, 10));          // false