let tens = 0;
let secs = 0;
let interval;

const startBtn = document.getElementById('start') ;
const stopBtn = document.getElementById('stop') ;
const resetBtn = document.getElementById('reset') ;

let appendSecs = document.getElementById('secs');
let appendTens = document.getElementById('tens');


startBtn.onclick= function(){
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
}

stopBtn.onclick = function () {
    console.log('stop')
  clearInterval(interval);
};
resetBtn.onclick = function () {
  resetTimer();
};



function startTimer(){
    console.log('start');


    if(tens>9){
        appendTens.textContent = tens;        
    }

    if(tens>99){
        tens = 0;
        appendTens.textContent = "0"+tens;
        secs++;
        if (secs > 9) {
          appendSecs.textContent = secs;
        } else {
          appendSecs.textContent = "0" + secs;
        }
    }
  tens++;
}

function resetTimer(){
    console.log("reset")
    clearInterval(interval);
    tens = 0;
    secs = 0;
    appendSecs.textContent = "0"+secs;
    appendTens.textContent = "0"+tens;
}
