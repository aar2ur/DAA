function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var invertTree = function(root) {
    if (root === null) {
        return null;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

var invertTreeBFS = function(root) {
    if (root === null) return null;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        const temp = current.left;
        current.left = current.right;
        current.right = temp;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return root;
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
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log("Before Invert:", printLevelOrder(tree1));
const inverted1 = invertTree(tree1);
console.log("After DFS Invert:", printLevelOrder(inverted1));