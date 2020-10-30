

//draw in the ball

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10, 
    color : "WHITE" 
}

//need to move the ball - missing element of speed and direction = velocity
function update(){
    ball.x += velocityX; X+
    ball.y += velocityY; Y+
    
    if( 
        ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0    ) {
        velocityY = - velocityY;
        let player = (ball.x < canvas.width/2 ) ? user : com; //essentially gives numbers 50,0,-50
        if(collision( ball, player)){
            let collidePoint = (ball.y - (player.y + player.height/2)); 
            collidePoint = collidePoint / (player.height/2); //normalizing 50 values to 1, 0, -1
            let angleRad = (Math.PI/4) * collidePoint;
            let direction = (ball.x < canvas.width/2) ? 1 : -1;
            ball.velocityX = direction * ball.speed * Math.cos(angleRad);
            ball.velocityY = direction * ball.speed * Math.sin(angleRad);
            //missing direction - if left paddle hits, then x = + and if y hits, then x = - value  

            ball.speed += 0.1; //can be changed to any value for speed addition - NOTE Speed starts at 5
        }                          
    }
}

drawCircle(ball.x, ball.y, ball.r, ball.color); //drawing the ball

//determining collision location - if ball.x < canvas.width/2 then player = user with the inverse remaining true for if ball.x > canvas.width/2 player = com

if( collision( ball, player )){

}
 
//so the quickmaths would mean the following

let player = (ball.x < canvas.width/2 ) ? user : com;
if(collision( ball, player)){
    let collidePoint = (ball.y - (player.y + player.height/2))
}



