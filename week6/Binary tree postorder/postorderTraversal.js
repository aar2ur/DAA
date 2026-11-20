function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var postorderTraversalRecursive = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root);
    return result;
};

var postorderTraversal = function(root) {
    if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return result.reverse();
};

const tree1 = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3), null)
);

console.log("Recursive Output:", postorderTraversalRecursive(tree1));
console.log("Iterative Output:", postorderTraversal(tree1));