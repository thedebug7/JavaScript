// const RemoveDublicate = (arr) => {
//     let N = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!N.includes(arr[i])){
//             N.push(arr[i]);
//         }
//     }
//     return N;

// }
// const num = [1, 2, 3, 3, 4, 5, 5];
// console.log(RemoveDublicate(num));


const RD = (a) => {
    let N = [];

// Loop through each element in the original array `a`
    for (i = 0; i < a.length; i++){
        let isDublicate = false; // Flag to check if the element is a duplicate


        // Inner loop: compare the current element arr[i] with each element in the result array N
        for ( let j = 0; j < N.length; j++) {
            if(a[i] === N[j]){ // If the current element is found in N
                isDublicate = true; // Mark it as a duplicate
                break; // Exit the inner loop since we already found a match
            }
        }

        // If the element is not a duplicate, add it to the result array N
        if (!isDublicate) {
            N.push(a[i]);
        }
    }

    return N
}

const num = [1, 2, 3, 3, 4, 5, 5];
console.log(RD(num));  // Expected output: [1, 2, 3, 4, 5]