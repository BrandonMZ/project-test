var click;

function preload(){
        click=loadSound(template/media/audio/mouse-click.mp3);
}

function setup(){
        click.setVolume(0.5);
}

function mousePressed(){
        click.play();
}