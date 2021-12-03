function myfunction(){
    const names = [];
    // for the array of input elements
    var input = document.getElementsByName("name");
    for (let i = 0; i < input.length; i++) {
        var a = input[i];
        names.push(a.value);
        console.log(names);
    }
    //for (let i = 0; i < 6; i++) {
    //    names.push(document.getElementById("form1").value);
    //}
    var sorted_names = names.sort().join(" ");
    document.getElementById("op").innerHTML = sorted_names.toUpperCase();
    //for color changing checkbox 
    if (document.getElementById("cbox").checked) {
        document.getElementById('op').style.backgroundColor='#ff4c00';
    }
    else {
        document.getElementById('op').style.backgroundColor='#2a2e31';
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

var count = 5;  
function add_field() {
    count += 1;
    html = '<label for="name">Name:</label>\
    <input id="name'+count+'" type="text" name="name" placeholder="Name" required>\
    <br>'
    var form1 = document.getElementById('form1');
    form1.innerHTML+=html;
}