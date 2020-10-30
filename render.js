//Render in all necessary elements - maybe best order of operations? 


//draw playing field from most static elements to more movement
function render(){
    drawRect(0, 0, canvas.width, canvas.height, "BLACK"); 
    drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");  
    drawText(com.score, 3*canvas.width/4, canvas.height/5, "WHITE"); 
    drawNet();
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect( com.x, com.y, com.width, com.height, com.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color); 
}

//need game to function 

function game (){
    render();
    // also need the game to update scores and refresh
    update();
}

//need fps tic-rate 

const framePerSecond = 50; //aka 50fps - essentially calls the game 50 timer per second

//need to set loop for this later
setInterval(game, 1000/framePerSecond ); //Call game(); 50 times every 1000ms = 1 sec 
