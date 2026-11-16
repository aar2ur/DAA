/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// --- СПОСОБ 1: Рекурсивный DFS (оптимальный по читаемости) ---
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};

// --- СПОСОБ 2: Итеративный BFS (по уровням через очередь) ---
var maxDepthBFS = function(root) {
    if (!root) return 0;

    let depth = 0;
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++;
    }

    return depth;
};

// --- ТЕСТИРОВАНИЕ В VS CODE ---

// Пример 1 из условия: root = [3, 9, 20, null, null, 15, 7]
//       3
//      / \
//     9  20
//       /  \
//      15   7
const tree1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log("DFS Max Depth:", maxDepth(tree1));    // 3
console.log("BFS Max Depth:", maxDepthBFS(tree1)); // 3