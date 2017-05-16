
var lives = "";
var dye = 1;
var win = 0;
var lose = 0;

var toggleBack = document.getElementById('toggleBack');
toggle.addEventListener('click',function() {
    document.body.classList.toggle('dye');
});
// function toggle(){
//     if (gamestatedow.dye = 1)
//         document.body.style.opacity = 0;
//             else document.background-image.opacity = 1; gamestatedow.dye = 0;
// }
function difficulty(){

document.getElementById('easyButton').style.display = 'inline-block';
document.getElementById('medButton').style.display = 'inline-block';
document.getElementById('hardButton').style.display = 'inline-block';
document.getElementById('startButton').style.display = 'none'}

function hideButtons(){
    document.getElementById('easyButton').style.display = 'none';
    document.getElementById('medButton').style.display = 'none';
    document.getElementById('hardButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    gamestate=0;

}

function easy(){
    lives = 10;
    console.log("lives" + lives);
    document.getElementById("lives").innerHTML = lives;
    hideButtons();
    document.getElementById('guess').style.color = "yellow";
}
function med(){
    lives = 7;
    console.log("lives" + lives);
    hideButtons();
    document.getElementById('guess').style.color = "yellow";
}
function hard(){
    lives = 4;
    console.log("lives" + lives);
    document.getElementById("lives").innerHTML = lives;
    hideButtons();
    document.getElementById('guess').style.color = "yellow";
}

var zep = new Audio('assets/sounds/hangman.m4a');
var stairway = new Audio('assets/sounds/stairway.m4a')
var groovy = new Audio('assets/sounds/groovy.m4a')

function start(){
    console.log("lives" + lives);
document.getElementById("pickedLetters").innerHTML = ""


var words = [ "THE WHO", "LED ZEPPELIN", "JIMI HENDRIX", "ERIC CLAPTON", "BEATLES", "BOB DYLAN", "PINK FLOYD", "ROLLING STONES", "QUEEN", "BLACK SABBATH", "DAVID BOWIE", "JETHRO TULL", "DEEP PURPLE", "GRATEFUL DEAD", "CREAM", "STEVIE RAY VAUGHAN", "ALICE COOPER", "JANIS JOPLIN", "HEART", "CAT STEVENS"];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var picked = [];
var gamestate = 0;


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

zep.play();
var cpuPick = words[Math.floor(Math.random() * words.length)];//This is the computers random pick
var cpuPickSecret = cpuPick.replace(/[^ ]/g, '_');//These are the _ that are displayed
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
        if (init==false && notPicked < 0 && isInArray(letter, alphabet) && gamestate==0) lives-=1;console.log(lives);document.getElementById("lives").innerHTML = lives;

        if (isInArray(letter, alphabet) && notPicked >= 0 && gamestate==0) alert("you picked this already");
        
        if (isInArray(letter, alphabet) && notPicked < 0 && gamestate==0)
		document.getElementById("pickedLetters").innerHTML = document.getElementById("pickedLetters").innerHTML + letter.toUpperCase();
		
        if (cpuPick.includes(letter) && notPicked < 0 && gamestate==0)  {        

        for(var i=0; i<cpuPick.length;i++) {
         if (cpuPick[i] === letter) 
        cpuPickSecret = cpuPickSecret.substr(0, i) + letter + cpuPickSecret.substr(i + 1);
        
        document.getElementById("blanks").innerHTML = cpuPickSecret;}
    }

            
            

console.log("cpuPick " + cpuPick)
console.log("init" + init)
console.log("cpuPickSecret " + cpuPickSecret)
        if (lives===0 && gamestate==0){alert("BUMMER DUDE!"); lose+=1; document.getElementById("lose").innerHTML = lose; document.getElementById("blanks").innerHTML = cpuPick; gamestate=1; document.getElementById('startButton').style.display = 'inline-block';stairway.play();}
        if (cpuPick===cpuPickSecret && gamestate==0) {setTimeout(function() {alert('GROOVY MAN!');},100); win+=1; document.getElementById("win").innerHTML = win; document.getElementById('startButton').style.display = 'inline-block'; gamestate = 1; groovy.play();}}}

    


	      
