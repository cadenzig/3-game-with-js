// NOTE: depends on game.js

var game = null;

function setup(){
    var width = 400;
    var height = 400;
    game = createGameState();
    frameRate(1500);
    createCanvas(width, height); 
}

function draw(){
    updateGameState(game);
    if(game.isDead)
        background("balck")
    else
        background("blue")


    drawGameState(game);
        
}
// physical units
var pointSize = 40;
var pointSpacing = 50;
var margin = 50;
var colors = [
    "#3f51b5",
    "#03a9f5",
    "#ea1e63",
    "#fec107"
];
// converts logical grind into physical display

function drawPoint(x,y,colorIndex){
    var color = "red";
    if (colorIndex == 1) 
        {color = "yellow"}
    if (colorIndex == 2)
        [color= "pink"]
    fill(colors[colorIndex]);
    var jitter = random(5);
    ellipse(x* pointSpacing + margin, y* pointSpacing + margin, pointSize+jitter);
    
    
}

function keyPressed() {
    console.log(`keyPressed: ${keyCode}`);
    if (keyCode == 38) game.playerY --;
    if (keyCode == 40) game.playerY ++;
    if (keyCode == LEFT_ARROW) game.playerX --;
    if (keyCode == 39) game.playerX ++;

    if (game.playerX >= game.cols) game.playerX = 0;
    if (game.playerY >= game.rows) game.playerY = 0;

    if (game.playerX < 0) game.playerX = game.cols - 1;
    if (game.playerY < 0) game.playerY = game.rows - 1;

}