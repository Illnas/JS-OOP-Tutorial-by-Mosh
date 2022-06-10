function StopWatch() {
  /* console.log("this", this); */
  let clearId = false;
  let startState;
  const addSeconds = () => {
    console.log(this.duration)
    return this.duration++;
  };

  this.duration = 0;

  this.start = function () {
    if(startState) {
      throw new Error ("Timer is running!")
    }
    if (!clearId) {
      clearId = setInterval(addSeconds, 1000);
      this.startState = !this.startState
    }
    startState = true
  };

  this.stop = function () {
    if(!startState) {
      throw new Error ("Timer is not running!")
    }
    startState = false
    clearInterval(clearId);
    clearId = null;
  };

  this.reset = function () {
    clearInterval(clearId);
    clearId = null;
    this.duration = 0;
    startState = false
  };

}

const timer = new StopWatch();
