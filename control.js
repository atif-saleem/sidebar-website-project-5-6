var menu=document.querySelector("#parent #nav i");
var sideMenu=document.querySelector("#sidemenu i");
var tl=gsap.timeline();
tl.to("#sidemenu",{
    right:0,
    duration:0.5
});
tl.from("#sidemenu h3",{
    opacity:0,
    x:150,
    stagger:0.2
})
tl.from("#sidemenu i",{
    opacity:0
})
tl.pause();
menu.addEventListener("click",()=>{
    console.log("clisked")
    tl.play();
});
sideMenu.addEventListener("click",()=>{
    tl.reverse();
})

function breakThetext(){
    var h2=document.querySelector("#text h2");
var textContent=h2.textContent;
var splittedText=textContent.split('');
console.log(splittedText);
var content="";
var halfvalue=splittedText.length/2;
splittedText.forEach(function(el,indx){
    if(indx<halfvalue){
        content+=`<span class="a">${el}</span> `; 
    }else {
        content+=`<span class="b">${el}</span> `; 
    }
    
})
h2.innerHTML=content;
}
breakThetext();
gsap.from( "h2 .a",{
    
    y:80,
    duration:2,
    delay:0.5,
    stagger:0.15,
    opacity:0
})
gsap.from( "h2 .b",{
    opacity:0,
    y:90,
    duration:2,
    delay:0.5,
    stagger:-0.15
})

