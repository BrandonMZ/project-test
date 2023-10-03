var crash;
var meow;

function preload(){
        crash = loadImage("../template/media/images/sub-buzz-26378-1516240599-3.jpg");
        
        meow = loadSound("../template/media/audio/meow.wav")

}

function draw(){
    image(crash, 300, 300, 100, 100);
    
}

function setup() {
    meow.play();
    meow.setVolume(0.5);
}

function mousePressed(){

    meow.play();
}




