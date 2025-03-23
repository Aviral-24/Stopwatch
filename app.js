let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let colorInterval = null;

function startwatch() {

    if(timer != null)
    {
        return;
    }


    timer = setInterval(function () {
            seconds++;

        if(seconds === 60)
        {
            seconds = 0;

            minutes++;
        }


        if(minutes === 60) {
            minutes = 0;
            hours++;
        }

        let formattedTime = 
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

        document.querySelector(".stopwatch-container h2").textContent = formattedTime;

    }, 1000)


    if(colorInterval === null) {
        setInterval(() => {

            let red = Math.floor(Math.random() * 256);
    
    let green = Math.floor(Math.random() * 256);
    
    let blue = Math.floor(Math.random() * 256);
    
    let randomcolor = `rgb(${red}, ${green}, ${blue})`;
    
    
    document.body.style.background = randomcolor;
    
    
        }, 1000);

    }

}

function stopwatch() {

    clearInterval(timer);
    clearInterval(colorInterval);
    timer = null;
    colorInterval = null;


}





function resetwatch() {

    clearInterval(timer);
    clearInterval(colorInterval);

    timer = null;
    colorInterval = null;

    seconds = 0;
    minutes = 0; 
    hours = 0;

    document.querySelector(".stopwatch-container h2").textContent = "00:00:00";


document.body.style.background = white;

}
