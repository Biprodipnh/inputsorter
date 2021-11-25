function myfunction(){
    var x = document.getElementById("name1").value;
    var y = document.getElementById("name2").value;
    var z = document.getElementById("name3").value;
    var p = document.getElementById("name4").value;
    var q = document.getElementById("name5").value;
    const names = [x,y,z,p,q];
    let sorted_names = names.sort()
    document.getElementById("op").innerHTML = sorted_names;
    //for color changing checkbox 
    if (document.getElementById("cbox").checked) {
        document.getElementById('op').style.backgroundColor='Green';
    }
    else {
        document.getElementById('op').style.backgroundColor='Crimson';
    }
}

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
