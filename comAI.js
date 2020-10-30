//here we go with more calculations

//easiest way to do this would be to have paddle track ball vertices and reflect the y values 
com.y += ball.y - (com.y + com.height/2)
//you will never win ever - add difficulty levels using small values <= 0.9
let computerLevel = 0.1;
// 0.0 = stupid > 1.0 = god tier
