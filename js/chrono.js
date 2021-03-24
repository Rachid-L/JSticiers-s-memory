var time = 0;
var running = 0;
function play() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("start").innerHTML = "";
    audioplay.play();
   
  } else {
    running = 0;
    document.getElementById("start").innerHTML = "";
    
  }
}

//Permet de relancer le jeu 
function reset() {
  document.location.reload();
}


//Permet de relancer le jeu 
function increment() {
  if (running == 1) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 10 / 60);
      var secs = Math.floor((time / 10) % 60);
      var hours = Math.floor(time / 10 / 60 / 60);
      var tenths = time % 10;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById("output").innerHTML =
        hours + ":" + mins + ":" + secs + ":" + tenths + "0";
      increment();
    }, 100);
  }
}
