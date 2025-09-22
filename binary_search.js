function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while ( high >= low ) {
        mid = low + Math.floor((high - low ) / 2);

        if ( arr[mid] === target ) {
            return mid;
        }

        if ( arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4