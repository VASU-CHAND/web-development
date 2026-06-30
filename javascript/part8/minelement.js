let arr=[20,9,3,55,2,4]
let res=10000
let min= arr.reduce((res,el)=>{
if(el<res){
    return el;
}
else{
    return res;
}
})
console.log(min)