const maxmin = (arr) => {
    let max = arr[0]
    let min = arr[0]
    // this loop start from index 0 and end in length of array 
    for ( let i = 1; i <= arr.length; i++)
        // this compare all arr number to the min number which we take first number from the arr  if number is less then given number then it store in min variable and it's compare  with all arr number. 
        if(arr[i] < min){
            min = arr[i]
    // same 
        }else if(arr[i] > max){
            max = arr[i];
        }

        // return min and max value
    return {'max': max, 'min': min}
}

// arr value 
const number = [10, 5, 8, 15, 2];
// call function 
console.log(maxmin(number)) // Expected output: { max: 15, min: 2 }
