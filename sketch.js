function preload(){
var ground
}
function setup(){
    var canvas = createCanvas(1200,400);
ground = new Ground(200,200,1200,400)
}
function draw(){
    background("Blue")
    ground.display();
}