//why play with no score?
//declare and draw scoreboard

const scoreboard = {
    
}

//need to break x into 4 equal parts - W/4, 2*W/r, 3*W/4, 4*W/4 for nice symetrical scoreboard aesthetics
//need to break y into 5 equal parts - H/5, 2*H/5, 3*H/5, 4*H/5, 5*H/5 - only want to display in top 5th of scoreboard, but will need other sections for EOG messages & updates

drawText(text, x, y, color)
drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
drawText( com.score, 3*canvas.width/4, canvas.height/5, "WHITE");

//updating the scoreboard

function update (){
    if( ball.x - ball.radius < 0){
        com.score++;
        resetBall();

    }else if( ball.x + ball.radius > canvas.width) {
        user.core++;
        resetBall();

    }
}

function resetBall(){
    ball.x = canvas.width/2;  //center ball back to origin
    ball.y =  canvas.height/2; 
    ball.speed = 5;
}
