user_text = "Aryan";

function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(560, 500);
    canvas = createCanvas(560, 450);
    canvas.position(560, 120);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){

}

function modelLoaded(){
    console.log("Posenet is successfully Initialized.")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}