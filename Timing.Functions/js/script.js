
//SETTIMEOUT(function,milliseconds)- budilnik kimi flan vaxti flan sey etdire bilirik,ve silmekcun CLEARTIMEOUT methodundan ist edirik
/*let exmSetTime =  setTimeout(function(){
    // alert("salam")
    console.log("salam")
},3000)

clearTimeout(exmSetTime) //burda mentiqen calismir timeout cunki 3 saniye kecmemis silir*/

//SETINTERVAL(function,milliseconds)- methodu ile ise peridoik kodlar calisdira bilirik,meselen 3 saniyeden bior consola salam yazdiraq:
/*setInterval(function(){
   console.log("salam")
},3000)

//veya:
let index = 0
let exm = setInterval(function(){
    console.log("test",index)
    index++
},5000)

clearInterval(exm) // bu method ile silirik intervalimizi*/

let strt = document.getElementById('start')
let stp = document.getElementById('stop')
let h2 = document.querySelector("h2")


let index = 0
let id;

strt.addEventListener("click",function(){
    index = 0 //bu halda her defe starta basanda 0-dan baslayir,bunu silsek qaldiqi yerden
    id = setInterval(function(){
        h2.innerText = index
        index++
     
     },1000)
})

stp.addEventListener("click",function(){
    clearInterval(id)
})





