noseX = 0;
noseY = 0;
dif = 0;
leftWristX = 0;
rightWristX = 0;




function preload(){

}
function setup(){
video = createCapture(VIDEO);
video.size('550,500')

canvas = createCanvas(500,500)
canvas.position(700,200)
background('grey')

poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('poseNet model has been loaded.')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        dif = floor(rightWristX - leftWristX);
    }
   
}

function draw(){
    background('grey')
    document.getElementById('wds').innerHTML = dif + ' px ';
    stroke('red')
    fill('black')
    square(noseX,noseY,dif)
    
}