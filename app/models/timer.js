let seconds = 0, minutes = 0, hours = 0;

function createTimer(){
  let id = 0
  return class {
    constructor(runId){
      this.runId = runId;
      this.id = ++id;
      store.timers.push(this);
      this.start = function(){
        console.log("Started!")
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
      }

      this.stop = function(){
        console.log("Stopped!")
        // call runEvent.getEndPoint()
        // need function to find runEvent by id
      }

      this.reset = function(){
        console.log("Reset!")
        // clear timer html
        // delete startPoint?
      }

      this.results = function(){
        console.log("Display Results!")
        // calls runEvent.calculateDistance()
        // render results show page
      }
    }
  }
}

let Timer = createTimer()
