function countdown(sec){
    let timer = setInterval(()=>{
        if(sec >= 0){
            console.log(sec)
            sec--
        }else{
            setInterval(timer)
        }
    },1000)
}
console.log(countdown(9))