let count=0;
let countm=0;
let counth=0;
let id;
let span1=document.getElementById("sec");
let span2=document.getElementById("min");
let span3=document.getElementById("hours");
function set(){
  clearInterval(id);
id=setInterval(g,10);
}

function g(){
count++;
span1.innerHTML=count;
if(count==60){
  n();
  count=0;
}
}

function n(){
  countm++;
  span2.innerHTML=countm;
  if(countm==60){
    l();
    countm=0;
  }
}

function l(){
  counth++;
  span3.innerHTML=counth;
  if(counth==60){
    clearInterval(id);
  }

}






let stop=document.getElementById("stop");
stop.addEventListener("click",function(){
clearInterval(id);



})

let div1=document.getElementById("con");


let lap=document.getElementById("lap");
  let c=1;
lap.addEventListener("click",function(){
  
  let p=document.createElement("p");
  p.setAttribute("style","border-top:1px solid grey");
  
  p.innerHTML="Lap:-  "+c+" with timing "+counth+":"+countm+":"+count;
  c++;
  div1.appendChild(p);

})



