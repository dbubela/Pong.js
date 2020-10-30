// table = CANVAS filled with black, two rectangles (user/AI paddles), net, ball, scoreboard

//first need to construct both paddles as objects.

const user = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0

}

const com = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE", 
    score : 0
}

// draw user paddle and com paddles will BOTH need drawRect(x, y, width, height, color);

drawRect(user.x, user.y, user.width, user.height, user.color);
drawRect(com.x, com.y, com.width, com.height, com.color);

//controlling user's paddle - arrows/keys would suck and be clunky, so mouse event listener is needed
//thoeretically corrects Y axis to mouse movement to activate event listener - this is not always the case, that would be too convenient
// plausible? work out the kinks once rendering. Can't solve a hypothetical problem. Believe in yourself, you fucking monkey.

canvas.addEventListener("mousemove",movePaddle);
function movePaddle(evt){
    let rect = canvas.getBoundingClientRect(); //will keep scrolling under control with paddle manipulation - ez to set center of paddle to mouse position

    user.y = evt.clientY
}

