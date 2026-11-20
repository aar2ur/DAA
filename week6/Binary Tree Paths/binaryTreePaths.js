function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var binaryTreePaths = function(root) {
    const paths = [];
    if (!root) return paths;

    function dfs(node, currentPath) {
        currentPath += node.val;

        if (node.left === null && node.right === null) {
            paths.push(currentPath);
            return;
        }

        if (node.left !== null) {
            dfs(node.left, currentPath + "->");
        }
        if (node.right !== null) {
            dfs(node.right, currentPath + "->");
        }
    }

    dfs(root, "");
    return paths;
};

var binaryTreePathsIterative = function(root) {
    if (!root) return [];

    const paths = [];
    const stack = [[root, `${root.val}`]];

    while (stack.length > 0) {
        const [node, currentPath] = stack.pop();

        if (node.left === null && node.right === null) {
            paths.push(currentPath);
        }

        if (node.right !== null) {
            stack.push([node.right, `${currentPath}->${node.right.val}`]);
        }
        if (node.left !== null) {
            stack.push([node.left, `${currentPath}->${node.left.val}`]);
        }
    }

    return paths;
};

const tree1 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3)
);

console.log("Recursive Paths:", binaryTreePaths(tree1));
console.log("Iterative Paths:", binaryTreePathsIterative(tree1));