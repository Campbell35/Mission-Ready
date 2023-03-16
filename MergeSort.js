const mergeSort = (array, half = array.length / 2) => {
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array))


}

const merge = (left, right) => {
    const arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right];
}

console.log(mergeSort([11, 3, 8, 4, 7, 2, 5, 9, 1, 6]));