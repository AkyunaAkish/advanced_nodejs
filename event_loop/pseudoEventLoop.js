// --------THIS FILE IS NOT MEANT TO BE INVOKED, ONLY TO SHOW THE IDEA OF THE NODEJS EVENT LOOP -------------------

// file gets called in command line using node
// $ node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// file gets invoked and added to the event loop
// New Timers, tasks, operations are recorded from myFile.js running
myFile.runContents();

function eventLoopShouldContinue() {
    // Check One: any pending setTimeout, setInterval, setImmediate?
    if (pendingTimers.length) return true;

    // Check Two: any pending OS tasks(example: http server listening)?
    if (pendingOSTasks.length) return true;
    
    // Check Three: any pending long running operations(example: fs module methods running)?
    if (pendingOperations.length) return true;

    return false;
}

// event loop illustrated as a while loop
// entire body executes in one 'tick'
while (eventLoopShouldContinue()) {

}

// exit back to terminal

