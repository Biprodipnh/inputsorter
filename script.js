function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

var typed = new Typed(".auto-input", {
    strings: ["Hello there", "Welcome to my webpage", "I'm Biprodip"],
    typeSpeed:100,
    backspeed:100,
    loop:true
})