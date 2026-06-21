let num = prompt('enter max number')

guess =Math.floor(Math.random()*num)
let number = prompt("guess the number")
while(true){
    
    if(number=="quit"){
        console.log("you quit")
        break;}
        if(number==guess){
            console.log("congrats")
            break;
        }
         if(number<guess){
        number=prompt("number was small")
         }

      else if(number>guess){
        number= prompt("number was large")
          }
   
    }

