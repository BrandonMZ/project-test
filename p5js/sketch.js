var meow;


function preload(){
        
        meow = loadSound("../template/media/audio/meow.wav");

}


function setup(){
        meow.setVolume(1);
        meow.play();
}

function mousePressed(){
        meow.play();
}
