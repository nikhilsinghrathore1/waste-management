console.log("working");
let tl = gsap.timeline();
gsap.registerPlugin();
tl.from(".p1-left h1, #line",{
               opacity:0,
               y:100,
               // stagger:0.4,
               duration:0.9,
})
tl.from(".below-h1",{
               opacity:0,
               y:100,
               stagger:0.5,
               duration:0.9
},"name")
tl.from(".button-flex",{
               opacity:0,
               y:100,
               // stagger:0.2,
               duaration:0.9
},"name")
tl.from("#layer1,#layer2,#layer3,#layer4",{
               opacity:0,
               duration:0.9,
               // stagger:0.2'
               x:100,
},)
gsap.from(".benefits,.benefit-para",{
               opacity:0,
               stagger:0.4,
               duration:0.6,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 400px",
               }
})
gsap.from(".btm-lft-top h1,.btm-rght-top h1,#p2-center-img",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 250px"
               }
})
gsap.from(".btm-lft-top p,.btm-rght-top p",{
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 180px"

               }
})
gsap.from(".btm-lft-bottom h1,.btm-rght-bottom h1",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 80px"
               }
})
gsap.from(".btm-lft-bottom p,.btm-rght-bottom p",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 20px"

               }
})

gsap.from(".cont-top",{
               duration:0.8,
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              start:"top 330px"
               }
})

gsap.from(".card1,.card2,.card3",{
               opacity:0,
               y:200,
               duration:0.7,
               // stagger:0.3,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              // markers:true,
                              start:"top 80px"
               }
})

gsap.from(".slogen",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".campains-container",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
                              
               }
})

gsap.from(".companies",{
               opacity:0,
               duration:0.7,
               y:100,
               scrollTrigger:{
                              trigger:".slogen p",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})

gsap.from("#top-performer-left,#top-performer-right",{

               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".top-performer",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})
gsap.from("#gallery-h1",{
               opacity:0,
               y:100,
               duration:0.6,
               scrollTrigger:{
                              trigger:".gallery-container",
                              scroller:"body",
                              // markers:true,
                              start:"top 660px"
               }
})
gsap.from(".first-three",{
               opacity:0,
               y:100,
               duration:0.7,
               scrollTrigger:{
                              trigger:".gallery",
                              scroller:"body",
                              // markers:true,
                              start:"top 400px"

               }
})

gsap.from(".last-three",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".gallery",
                              scroller:"body",
                              // markers:true,
                              start:"top 100px"
               }
})

gsap.from(".how-works",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".how-works",
                              scroller:"body",
                              // markers:true,
                              start:"top 650px"
               }
})
gsap.from(".quiz-header",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:".quiz-wrapper",
                              scroller:"body",
                              // markers:true,
                              start:"top 500px"
               }
})
gsap.from(".quiz-left,.quiz-right",{
               opacity:0,
               y:100,
               stagger:0.5,
               duration:0.8,
               scrollTrigger:{
                              trigger:".quiz-wrapper",
                              scroller:"body",
                              // markers:true,
                              start:"top 300px"
               }
})

let lftTOP = document.querySelector(".btm-lft-top");
let rghtTOP = document.querySelector(".btm-rght-top");
let lftBTM = document.querySelector(".btm-lft-bottom");
let rghtBTM = document.querySelector(".btm-rght-bottom");

lftTOP.addEventListener("mousemove",()=>{
               lftTOP.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
})
lftTOP.addEventListener("mouseout",()=>{
               lftTOP.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
})
lftBTM.addEventListener("mousemove",()=>{
               lftBTM.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
lftBTM.addEventListener("mouseout",()=>{
               lftBTM.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})
rghtBTM.addEventListener("mousemove",()=>{
               rghtBTM.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
rghtBTM.addEventListener("mouseout",()=>{
               rghtBTM.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})
rghtTOP.addEventListener("mousemove",()=>{
               rghtTOP.style.scale = "1.2"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
rghtTOP.addEventListener("mouseout",()=>{
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})

let next = document.querySelector("#circle2");
let paraText = document.querySelector("#disc");
let name1 = document.querySelector("#name");
let img = document.querySelector("#performerIMG");
console.log(img)


next.addEventListener("click",()=>{
               paraText.innerText= "we have been working toward the completetion of this project and now when it is finally over it still dosen't feel right "
               name1.innerText= "john jones"
               img.style.backgroundImage="url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80)"
              
})
window.addEventListener("scroll",()=>{
               let nav = document.querySelector("#navbar")
               if(window.pageYOffset>0){
                 nav.classList.add("sticky");
                 
                 
                 //   nav.style.backdropFilter="blur(10px)"
               }
               else{
                              nav.classList.remove("sticky");
                              
             
               }
})