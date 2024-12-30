const MulAllNum = (arr) => {
    let mul =1;
    for (let i = 0;i < arr.length; i++ ){
        mul = mul * arr[i]
    }
    return mul
}

console.log(MulAllNum([2,3,4]));