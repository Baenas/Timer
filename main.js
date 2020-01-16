let min = 0;
let sec = 0;
let setsec;

function timerCounter(){



      if(document.getElementById('sec').innerHTML  < 59){
       sec++;
      }else{
        document.getElementById('min').innerHTML ++;
        document.getElementById('sec').innerHTML = 0;
        sec = 0;
        sec++;
        document.getElementById('sec').innerHTML = sec;
      }

        if(document.getElementById('sec').innerHTML  < 9){

document.getElementById('sec').innerHTML =  `0${sec}`;
        }else{
            document.getElementById('sec').innerHTML = sec;
        }
if(document.getElementById('min').innerHTML  < 9) {

   

}


}
function start (){
    globaltim = setInterval(timerCounter,1000);
    document.getElementById('btnstr').disabled = true;
    
}
function stop(){
clearInterval(globaltim);

document.getElementById('btnstr').disabled = false;
}
function stop2(){
    clearInterval(globaltim);
    document.getElementById('sec').innerHTML = 0;
    document.getElementById('min').innerHTML = 0;
    document.getElementById('btnstr').disabled = false;
    }
