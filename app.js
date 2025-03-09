// Select elements from the HTML
const displayDiv = document.querySelector(".timer"); 
const startButton = document.querySelector(".Start");
const stopButton = document.querySelector(".Stop");
const resetButton = document.querySelector(".Reset");

let timer; // Variable to store the timer interval
let seconds = 0; // Initial time in seconds

// Function to format time (HH:MM:SS)
function formatTime(time) {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;
    
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startStopwatch() {
    if (!timer) { // Prevent multiple intervals
        timer = setInterval(() => {
            seconds++;
            displayDiv.textContent = formatTime(seconds);
        }, 1000);
    }
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(timer);
    timer = null; // Reset timer variable
}



function resetStopwatch()
{
   clearInterval(timer);
   timer = null;
   seconds = 0;
   displayDiv.textContent = "00:00:00";
}
// Event Listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
