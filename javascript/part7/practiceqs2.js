function hello(){

    console.log("hello")

}

 let id=setInterval(hello, 2000)
 setTimeout(()=>{clearInterval(id)},10000)
