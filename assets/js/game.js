var lives = "";
var dye = 1;

var toggleBack = document.getElementById('toggleBack');
toggle.addEventListener('click',function() {
    document.body.classList.toggle('dye');
});
// function toggle(){
//     if (window.dye = 1)
//         document.body.style.opacity = 0;
//             else document.background-image.opacity = 1; window.dye = 0;
// }
function difficulty(){

document.getElementById('easyButton').style.display = 'inline-block';
document.getElementById('medButton').style.display = 'inline-block';
document.getElementById('hardButton').style.display = 'inline-block';
document.getElementById('startButton').style.display = 'none'}

function easy(){
    window.lives = 10;
    console.log("lives" + lives);
    document.getElementById("lives").innerHTML = lives;
    document.getElementById('easyButton').style.display = 'none';
    document.getElementById('medButton').style.display = 'none';
    document.getElementById('hardButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
}
function med(){
    window.lives = 7;
    console.log("lives" + lives);
    document.getElementById("lives").innerHTML = lives;
    document.getElementById('easyButton').style.display = 'none';
    document.getElementById('medButton').style.display = 'none';
    document.getElementById('hardButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';

}
function hard(){
    window.lives = 4;
    console.log("lives" + lives);
    document.getElementById("lives").innerHTML = lives;
    document.getElementById('easyButton').style.display = 'none';
    document.getElementById('medButton').style.display = 'none';
    document.getElementById('hardButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';

}

function start(){
    console.log("lives" + lives);
document.getElementById("pickedLetters").innerHTML = ""


var words = [ "THE WHO", "LED ZEPPELIN", "JIMI HENDRIX", "ERIC CLAPTON", "BEATLES", "BOB DYLAN", "PINK FLOYD", "ROLLING STONES", "QUEEN", "BLACK SABBATH", "DAVID BOWIE", "JETHRO TULL", "DEEP PURPLE", "GRATEFUL DEAD", "CREAM", "STEVIE RAY VAUGHAN", "ALICE COOPER", "JANIS JOPLIN", "HEART", "CAT STEVENS"];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var picked = [];
var win = 0;


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


var cpuPick = words[Math.floor(Math.random() * words.length)];//This is the computers random pick
var cpuPickSecret = cpuPick.replace(/[^ ]/g, '_');//This version is are the _ that are displayed
console.log("cpuPick " + cpuPick)
console.log("cpuPickSecret " + cpuPickSecret)
document.getElementById("blanks").innerHTML = cpuPickSecret;



document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toUpperCase();
        console.log(letter);

        var init=cpuPick.includes(letter);
        var notPicked = picked.indexOf(letter); 
        if (notPicked < 0) picked.push(letter);
        console.log(picked)
        if (init==false && notPicked < 0 && isInArray(letter, alphabet)) lives-=1;console.log(lives);document.getElementById("lives").innerHTML = lives;

        if (isInArray(letter, alphabet) && notPicked >= 0 && win==0) alert("you picked this already");
        
        if (isInArray(letter, alphabet) && notPicked < 0 && win==0)
		document.getElementById("pickedLetters").innerHTML = document.getElementById("pickedLetters").innerHTML + letter.toUpperCase();
		
        if (cpuPick.includes(letter) && notPicked < 0)  {        

        for(var i=0; i<cpuPick.length;i++) {
         if (cpuPick[i] === letter) 
        cpuPickSecret = cpuPickSecret.substr(0, i) + letter + cpuPickSecret.substr(i + 1);
        
        document.getElementById("blanks").innerHTML = cpuPickSecret;}
    }
console.log("cpuPick " + cpuPick)
console.log("init" + init)
console.log("cpuPickSecret " + cpuPickSecret)
        if (lives===0 && win==0){alert("BUMMER DUDE!"); document.getElementById("blanks").innerHTML = cpuPick; win==1; document.getElementById('startButton').style.display = 'inline-block';}
        if (cpuPick===cpuPickSecret && win==0) {setTimeout(function() {alert('GROOVY MAN!');},100); document.getElementById('startButton').style.display = 'inline-block'; win = 1;}

    }}



		
	      
