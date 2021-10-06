// Timers 
const timerSeconds = 5000;

setTimeout(function() {
    console.log("Hello from setTimeout");
}, timerSeconds); 


const sayMessage = () => {
    console.log("Hello form sayMessage");
};

setTimeout(sayMessage, timerSeconds);

// Interval
setInterval(() => {
    console.log("Hello from interval");
}, timerSeconds);

// Remove in the interval: 
const timer = setInterval(function() {
   console.log("Running every two seconds"); 
}, 10);

clearInterval(timer);
