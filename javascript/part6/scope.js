let sum =54;  // global scope
function calsum(a,b){
    let sum =a+b; // function scope
    console.log(sum);
}
// block scope apllies on let and const variables
// they have scope between brackets