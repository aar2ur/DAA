/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// --- СПОСОБ 1: Рекурсивный DFS (с учетом односторонних узлов) ---
var minDepth = function(root) {
    if (root === null) return 0;

    // Если левого потомка нет, идем только вправо
    if (root.left === null) {
        return 1 + minDepth(root.right);
    }

    // Если правого потомка нет, идем только влево
    if (root.right === null) {
        return 1 + minDepth(root.left);
    }

    // Если оба потомка существуют, выбираем минимальный путь до листа
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

// --- СПОСОБ 2: Итеративный BFS (оптимальный при сильно несбалансированных деревьях) ---
var minDepthBFS = function(root) {
    if (root === null) return 0;

    const queue = [root];
    let depth = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Первый встреченный лист гарантированно находится на минимальной глубине
            if (node.left === null && node.right === null) {
                return depth;
            }

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        depth++;
    }

    return depth;
};

// --- ТЕСТИРОВАНИЕ В VS CODE ---

// Тест 1 (из условия): root = [3, 9, 20, null, null, 15, 7] -> Output: 2
const tree1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// Тест 2 (вырожденное вправо дерево): [2, null, 3, null, 4, null, 5, null, 6] -> Output: 5
const skewedTree = new TreeNode(
    2,
    null,
    new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))
);

console.log("Tree 1 (DFS):", minDepth(tree1));           // 2
console.log("Tree 1 (BFS):", minDepthBFS(tree1));        // 2
console.log("Skewed Tree (DFS):", minDepth(skewedTree)); // 5
console.log("Skewed Tree (BFS):", minDepthBFS(skewedTree)); // 5