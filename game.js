// functions

function createGameState(){
    var game = {};



    game.score = 0;

    game.isDead = false;
    game.playerX = 2;
    game.playerY= 2;
    

    game.coinX = 0;
    game.coinY= 0;

    var grid = [];
    grid.push([1,1,1,1,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([0,0,0,0,0]);
    grid.push([1,0,0,0,1]);
    grid.push([1,0,0,0,1]);
    grid.push([1,1,1,1,1]);

    game.grid = grid;
    game.rows = grid.length;
    game.cols = grid[0].length


    setRandomCoin(game);

    return game;
}
function createEmptyGrid(){}
function createLevel(){}
function setRandomCoin(game){

    var collided = true;

    while(collided){
        game.coinX = Math.floor(random(game.cols-1));
        game.coinY = Math.floor(random(game.rows-1));

        //check to see if coin hit wall
        var x = game.coinX;
        var y = game.coinY;
        var hitwall =  (game.grid[y][x] == 1);

        var hitplayer = (game.coinX == game.playerX && game.coinY == game.playerY);
        collided = hitwall || hitplayer;
        
        
    }



}



function drawGameState(game){
    //draw the walls
  
    for(var c = 0; c < game.cols; c++){
        for(var r = 0; r < game.rows; r++){
            drawPoint(c,r,game.grid[r][c]);
            
        }
    }
    //draw the player
    
    drawPoint(game.playerX, game.playerY, 2)

     //draw the coin
    
     drawPoint(game.coinX, game.coinY, 3)

     //draw the score
     fill("red");
     text(`Score: ${game.score}`, 10,10);

}



function updateGameState()
{
    //check is player hits wall
    var x = game.playerX;
    var y = game.playerY;
    if (game.grid[y][x] == 1) game.isDead = true;

    //check is player hits coin

    if ((game.coinX == game.playerX && game.coinY == game.playerY)){
        game.score = game.score + 1;
        setRandomCoin(game);
    }
}
function addNextCoin(){}
function handleKeyboard(){}
function checkPlayerPosition(){}