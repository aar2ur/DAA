function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }

    let sum = 0;

    if (root.left !== null && root.left.left === null && root.left.right === null) {
        sum += root.left.val;
    } else {
        sum += sumOfLeftLeaves(root.left);
    }

    sum += sumOfLeftLeaves(root.right);

    return sum;
};

var sumOfLeftLeavesIterative = function(root) {
    if (root === null) return 0;

    let sum = 0;
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.left !== null) {
            if (node.left.left === null && node.left.right === null) {
                sum += node.left.val;
            } else {
                queue.push(node.left);
            }
        }

        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return sum;
};

const tree1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log("Recursive Sum:", sumOfLeftLeaves(tree1));
console.log("Iterative Sum:", sumOfLeftLeavesIterative(tree1));