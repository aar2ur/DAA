var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Находим середину
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Нашли элемент, возвращаем индекс
        }
        
        if (nums[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }

    return -1; // Не нашли
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

console.log(search(nums, target));