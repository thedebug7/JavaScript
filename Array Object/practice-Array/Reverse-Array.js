const ReverseArray = (arr) => {
    let reversarry = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversarry.push(arr[i])
    }
    return reversarry
}

const number = [1,2,3,4,5]
console.log(ReverseArray(number));