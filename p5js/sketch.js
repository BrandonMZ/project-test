var click;


function preload(){
        
        click = loadSound("template/media/audio/click.mp3");

}


function setup(){
        click.setVolume(1);
        click.play();
}

function mousePressed(){
        click.play();
}
