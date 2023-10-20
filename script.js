var body = document.body;
var tInfo = document.getElementById("exe")
var box = document.getElementById("exe-text");
var terrain = document.getElementById("terrain");
var image = document.getElementById("image");
var scoreBoard = document.getElementById("score");
var zoneDes2PointLeft = document.getElementById("Zone2pointLeft");
var zoneDes2PointRight = document.getElementById("Zone2pointReft");

var Player = document.createElement("div");

var htmlLeftButton = document.getElementById("left");
var htmlRightButton = document.getElementById("right");

var Z2Left = document.getElementById("Z2Left");
var Z2Right = document.getElementById("Z2Right");

var deuxPointLeft = false;
var deuxPointRight = false; 
var basket = 0;
var shotValue = 0;

var score1 = 0;
var score2 = 0;

var x = 0;
var y = 0;
var lx = 0;
var ly = 0;

var visible = true;

Player.style.position = "absolute";
Player.style.width = "10px";
Player.style.height = "10px";
Player.style.background = "red";
Player.style.left = "948px";
Player.style.top = "496px";
body.appendChild(Player);



zoneDes2PointLeft.addEventListener("mouseenter", function (e) {
    deuxPointLeft = true;
})

zoneDes2PointLeft.addEventListener("mouseleave", function (e) {
    deuxPointLeft = false;
})

zoneDes2PointRight.addEventListener("mouseenter", function (e) {
    deuxPointRight = true;
})

zoneDes2PointRight.addEventListener("mouseleave", function (e) {
    deuxPointRight = false;
})

document.addEventListener("click", function (e) {
    if ( deuxPointLeft == true){
        shotValue = 2;
        deuxPointRight = false;
    }
    if ( deuxPointRight == true){
        shotValue = 2;
        deuxPointLeft = false;
    }
    if ( deuxPointLeft == false && deuxPointRight == false){
        shotValue = 3;
    }

    lx = x
    ly = y
    x = e.clientX;
    y = e.clientY;

    updatePlayerPosition(x, y);
})

function leftButton(){
    basket = 1;
    updateBasket(1);
    setTimeout(function(){
        replacePlayer();
    }, 100)
}
function rightButton(){
    basket = 2;
    updateBasket(2);
    setTimeout(function(){
        replacePlayer();
    }, 100)
}
function replacePlayer(){
    x = lx;
    y = ly;
    updatePlayerPosition(x, y);
}
function updateBasket(name){

    if(name == 1){
        htmlLeftButton.style.backgroundColor = "red";
        htmlRightButton.style.backgroundColor = "white";
    }
    if (name == 2){
        htmlRightButton.style.backgroundColor = "red";
        htmlLeftButton.style.backgroundColor = "white";
    }
    if (name == 0){
        htmlLeftButton.style.backgroundColor = "white";
        htmlRightButton.style.backgroundColor = "white";
    }
    
}
function updatePlayerPosition(x, y){
    Player.style.left = x - 5 + "px";
    Player.style.top = y + 13 + "px";
}

function updateScore(){
    if (basket == 1){
        score2 += shotValue;
        basket = 0;
        htmlLeftButton.style.backgroundColor = "white";
        htmlRightButton.style.backgroundColor = "white";
    }
    if (basket == 2){
        score1 += shotValue;
        basket = 0;
        htmlLeftButton.style.backgroundColor = "white";
        htmlRightButton.style.backgroundColor = "white";
    }
    setTimeout(function(){
        replacePlayer();
    }, 100)
}
function gameLoop() {

    txtScore = "Equipe1: " + score1 + " | " + score2 + ": Equipe2" 
    scoreBoard.innerHTML = txtScore;
    
    if(basket == 1){
        box.innerHTML = ("Pannier de gauche")
    }else if(basket == 2){
        box.innerHTML = ("Pannier de droite")
    }else{
        box.innerHTML = ("Choisisez un pannier") 
    }
    
    txtPosition = "<br> Positon: x: " + x + " " + "y: " + y; 
    box.innerHTML += txtPosition;
    requestAnimationFrame(gameLoop);

}

document.addEventListener("keydown", function (e) {
    if (e.key === "a"){
        if (visible == true){
            terrain.style.visibility = "hidden";
            image.style.visibility = "hidden";
            Player.style.visibility = "hidden";
            tInfo.style.visibility = "hidden";
        }else{
            terrain.style.visibility = "visible";
            image.style.visibility = "visible";
            Player.style.visibility = "visible";
            tInfo.style.visibility = "visible";
        }
        visible =!visible;
    }
})

gameLoop();