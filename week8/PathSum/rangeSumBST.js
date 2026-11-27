function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var rangeSumBST = function(root, low, high) {
    if (root === null) {
        return 0;
    }

    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    }

    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

var rangeSumBSTIterative = function(root, low, high) {
    if (root === null) return 0;

    let sum = 0;
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        if (node === null) continue;

        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if (node.val > low) {
            stack.push(node.left);
        }
        if (node.val < high) {
            stack.push(node.right);
        }
    }

    return sum;
};

const tree1 = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7)),
    new TreeNode(15, null, new TreeNode(18))
);

console.log("Recursive Range Sum [7, 15]:", rangeSumBST(tree1, 7, 15));
console.log("Iterative Range Sum [7, 15]:", rangeSumBSTIterative(tree1, 7, 15));