noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,499);
    canvas=createCanvas(550,549);
    canvas.position(560,151);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("#969A97");
    document.getElementById("square_sides").innerHTML="width & height of the square="+difference+"px";
    textSize(difference)
    fill('#F90093');
    stroke('#F90093');
    text('peter',50,399);
}
function modelLoaded(){
    console.log('poseNet is initialized!')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX);
    }
}