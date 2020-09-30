
// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]
const binarySearch = function(arr, target) {

        let first = 0;
        let last = arr.length - 1;
        let position = -1;
        let found = false;
        let middle;

        while (found === false && first <= last) {
            middle = Math.floor((first + last)/2);
            if (arr[middle] == target) {
                found = true;
                position = middle;
            } else if (arr[middle] > target) {
                last = middle - 1;
            } else {
                first = middle + 1;
            }
        }

        return `Target is index ${position}`;



    // Step 1. Get length of array 
    // Step 2. Find mid point
    // Step 3. Compare if mid point is lower or higher than searched number
    // Step 4. lop off unneeded side
    // Step 5. go to step 1


    // let length = arr.length - 1;
   
    // let middlePoint = Math.floor(length / 2)
   
    // let middleNewArr = arr

    // if(arr[middlePoint] > target) {
    //     middleNewArr = arr.slice(0, middlePoint)
    //     return binarySearch(middleNewArr, target)
    // } else if (arr[middlePoint] < target) {
    //     middleNewArr = arr.slice(middlePoint +1, arr.length);
    //     return binarySearch(middleNewArr, target);
    // } else {
    //     return middlePoint;
    // }
    
    }
        console.log(binarySearch(arr, 19));
        console.log(binarySearch(arr, 12));
        console.log(binarySearch(arr, 26));