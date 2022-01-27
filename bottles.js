img = "";
state = "";
object = [];
function preload(){
img = loadImage("pop-waterbottles-index-1594404970.jpg");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}
function draw(){
image(img,0,0,400,400);
if(state!= ""){
   for(var i=0;i<object.length;i++){
       document.getElementById("status").innerHTML = "There are 5 objects in the picture and it detected 1";
       confidence = floor(object[i].confidence*100);
       fill("#f71500");
       text(object[i].label +" "+confidence+" "+"%" , object[i].x , object[i].y);
       noFill();
       stroke("#f71500");
       rect(object[i].x , object[i].y , object[i].width+40 , object[i].height+40);
   }
}

}
//rect(x,y,width,height);
function modelLoaded(){
    console.log("model is initialized");
    state = true;
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectDetector.detect(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        object = results;
    }
    }