function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var sortedArrayToBST = function(nums) {
    function build(left, right) {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    return build(0, nums.length - 1);
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

const nums1 = [-10, -3, 0, 5, 9];
const nums2 = [0, 1, 2, 3, 4, 5, 6, 7];

console.log("BST 1:", printLevelOrder(sortedArrayToBST(nums1)));
console.log("BST 2:", printLevelOrder(sortedArrayToBST(nums2)));