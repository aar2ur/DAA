function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var searchBST = function(root, val) {
    while (root !== null && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    }
    return root;
};

var searchBSTRecursive = function(root, val) {
    if (root === null || root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBSTRecursive(root.left, val);
    } else {
        return searchBSTRecursive(root.right, val);
    }
};

function printLevelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
}

const tree1 = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7)
);

console.log("Iterative Search (val = 2):", printLevelOrder(searchBST(tree1, 2)));
console.log("Iterative Search (val = 5):", printLevelOrder(searchBST(tree1, 5)));
console.log("Recursive Search (val = 2):", printLevelOrder(searchBSTRecursive(tree1, 2)));