function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};

var mergeTreesNew = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    const mergedNode = new TreeNode(root1.val + root2.val);
    mergedNode.left = mergeTreesNew(root1.left, root2.left);
    mergedNode.right = mergeTreesNew(root1.right, root2.right);

    return mergedNode;
};

function printLevelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

const tree1 = new TreeNode(
    1,
    new TreeNode(3, new TreeNode(5), null),
    new TreeNode(2)
);

const tree2 = new TreeNode(
    2,
    new TreeNode(1, null, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(7))
);

const merged = mergeTrees(tree1, tree2);
console.log("Merged Tree:", printLevelOrder(merged));