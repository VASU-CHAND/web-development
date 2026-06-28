// for each
// arr.forEach(some function defination or name)
let arr=[1,2,3,4,5]
let print = function(el){
    console.log(el)
}
arr.forEach(print);
// arr.forEach(function(el){
// console.log(el);
// })

// MAP method
let student=[
    {name:"vasu",
     marks: 95
    },
    {
        name:"vaibhav",
        marks:89
    }
]
let gpa=student.map((el) =>{
    return el.marks/10

})



