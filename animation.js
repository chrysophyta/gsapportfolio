
window.onload = function(){
 
 var tl1 = new TimelineLite();

 tl1.staggerFrom(".letter",1,{scale:0},0.1);
 tl1.from("#butterfly", 0.5 ,{opacity:0});

  

document.getElementById("restart").onmouseover = function(){
	TweenMax.to("#restart",0.1,{opacity:1,borderStyle:"dotted"})
	.to("a:link",0.1,{textDecoration:"underline"})
};
document.getElementById("restart").onmouseout = function(){TweenMax.to("#restart",0.1,{opacity:0.5,borderStyle:"solid"})};


tl1.from(".linecircle",2,{
	scale:0,
	opacity:0,
	rotation:500,
	ease:Bounce.easeOut
},0.1);

tl1.to(".linecircle",0.5,{rotation:45}).to(".linecircle",1,{rotation:100});

tl1.to(".letter",1,{fontSize:110,margin:'auto'},"-=3");

tl1.to(".linecircle",1,{
	opacity:0,
	scale:0,
	zIndex:0,
	ease:Bounce.easeOut
},"end");

tl1.to(".letter",1,{scale:0,display:'none'},"end");
tl1.to("#butterfly",1 ,{y:500},"end");

tl1.to("#restart",1,{y:260,opacity:0},"end")
.to("#restart",1,{display:"inherit",opacity:0})
.to("#restart",2,{opacity:0.5},"-=0.5");

var tl2 = new TimelineLite();
tl2.to("*",2,{backgroundColor:"#91ad70"},"+=3");
 document.getElementById("restart").onclick = function(){ tl1.restart(); tl2.restart(); };
}


