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
    // 1) node looks at pending timers
    // and sees if any functions are ready to be called

    // 2) node looks at pending OS tasks and pending operations
    // and calls relevant callback functions

    // 3) pause execution, will continue when
    // - new pending os task is done
    // - or new pending operation is done
    // - or a timer is about to complete

    // 4) node looks at pending timers
    // only looks for setImmediate functions

    // 5) handle any 'close' events
    // 'close' events would handle cleanup code
    // such as closing servers etc
}

// exit back to terminal

