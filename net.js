//start with drawing the net, thats the easy part

const net = {
    x : canvas.width/2 - 2/2, // line drawn down the middle
    y: 0,
    width : 2, //need to see the net
    height: 10, //height of small bars created
    color : "WHITE",
}

//function to draw the net

function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color); // need net to have breaks in it or it wont be aesthetic
    }
}

// ez pz net math
