//num
function insert(act){
    var numsarea = document.getElementById("numsarea");
    numsarea.value = numsarea.value + act;
}

function backspace(){    
    var rekensom  = document.getElementById('numsarea').value;
    document.getElementById('numsarea').value = rekensom.substring(0,rekensom.length -1);
}

//C-reset
function clean(){
    document.getElementById('numsarea').value="";
}
//answer
function equal(){
    var sum = document.getElementById('numsarea').value;
    if(sum){
        document.getElementById('numsarea').value = eval(sum);
        var Formula = document.getElementById('numsarea').value;
        document.getElementById('history').innerHTML += sum + '=' + Formula + "<br/>";
    }
}
//close icon
function goBack(){
    window.history.back();
}

function factorial(){
    var a  = document.getElementById('numsarea').value;
    var b = 1;
    for(var i = 1;i <= a;i++){
        b = b * i;
    }
    document.getElementById("numsarea").value = b;
}


function sqrt() {
var a  = document.getElementById('numsarea').value;
a = Number(a);
var b = Math.sqrt(a);
document.getElementById("numsarea").value = b;
}

function x2() {
    var a  = document.getElementById('numsarea').value;
    a = Number(a);
    var b = Math.pow(a, 2);
    document.getElementById("numsarea").value = b;
}


function toBinary() {
    var a  = document.getElementById('numsarea').value;
    a = Number(a);


    var result = [], i;
    for (i = a; i > 0; i = parseInt(i / 2)){
    result.push(i % 2);
    }
    var ans = result.reverse().join("");
    document.getElementById("numsarea").value = ans;
}



/*
//show history
function showHistory(){
    var x = document.getElementById('calc');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show weather
function showWeather(){
    var x = document.getElementById('showWeather');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show Val
function showVal(){
    var x = document.getElementById('showVal');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show facebook
 function showFacebook(){
    var x = document.getElementById('showFacebook');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
} */

/*
function movehistory() {
    document.getElementById('history6').innerHTML = document.getElementById('history5').innerHTML
    document.getElementById('history5').innerHTML = document.getElementById('history4').innerHTML
    document.getElementById('history4').innerHTML = document.getElementById('history3').innerHTML
    document.getElementById('history3').innerHTML = document.getElementById('history2').innerHTML
    document.getElementById('history2').innerHTML = document.getElementById('history1').innerHTML
}
*/


