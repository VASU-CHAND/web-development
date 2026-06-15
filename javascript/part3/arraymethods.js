let colors=["pink ", "blue", "black","red", "white"]
console.log(colors.splice(4)) //removed 4th index and returned it
// splice changes the original array
console.log(colors.splice(0,1))// start from 0th index till 1th one dont remove first one
console.log(colors)
colors.splice(2,0,"vasu","vaibhav")
// splice(starting index , number of elements to delete , elemts to be added)
console.log(colors)


