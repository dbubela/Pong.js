//this is going to be a shitshow....

//create collision function 
function collision(b, p){
    p.top = p.y; //to make this more readable, we need to identify the top of the player panel 
    p.bottom = p.y + p.height; 
    p.left = p.x;
    p.right = p.x + p.width;

    //do the same for the ball
    ball.top = b.y - b.radius;
    ball.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;


    return  b.right > p.left && b.btop < p.bottom && b.left < p.right && b.bottom > p.top;
}

//time for some collision quickmath
//NOTE: if ball hits paddle in center, then collision moves path 0 degrees. If top/bottom of paddle are hit, then path should be altered by 45/-45 degrees respectively 

//NOTE: ANY change in speed or direction will effect velocity and this shows HOW it effects the velocity mathmatically 
ball.velocityX = ball.speed * cos(a)
ball.velocityY = ball.speed * sin(a)

//with this in mind, the following is allowed - NOTE: max value possible for respective sides are 50/-50 which means they can be normalized to get 1, 0,-1 
let collidePoint = ball.y - ( user.y + user.height/2);

// pi/4 = 45 degrees
//these collisions = radiants which can be calulated as: 
angleRad = collidePoint * Math.PI/4;    



