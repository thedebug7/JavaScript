const Arraysqure = (arr) => {
    let squre = [];
    for(let i=0; i < arr.length; i++){
        squre.push(arr[i] * arr[i]);
    }
    return squre;
}
// Argument Value 
const num =[1, 2, 3, 4];
// Function call
console.log(Arraysqure(num));