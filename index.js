const Display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elsapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elsapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elsapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elsapsedTime = 0;
    isRunning = false;
    Display.textContent = "00:00:00:00"
}

function update(){

    elsapsedTime = Date.now() - startTime;

    hours = Math.floor(elsapsedTime / (1000 * 60 * 60));
    minutes = Math.floor(elsapsedTime / (1000 * 60) % 60) ;
    seconds = Math.floor(elsapsedTime / 1000 % 60);
    milliseconds = Math.floor(elsapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    Display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}