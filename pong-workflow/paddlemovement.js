//created drawRect( x, y, w, h, color)
//so drawRect(100,100,100,100, "red"); is feesible - Now we need movement...

//to drawRect properly, I need to draw another Rect while removing previous rectangle IRT

//Can this be done with changing "red" > "black" (or background color?)

let rectX = 0;

function render(){
    drawRect( 0, 0, 600, 400, "black" );
    drawRect( rectX, 100, 100, 100, "red" );
    rectX = rectX + 100;

}

setInterval( render, 1000 );

//essentially clearing the canvas & redrawing the rectangle quickly to emulate movement

