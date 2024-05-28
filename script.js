gsap.from(".clip-top,.clip-bottom",2,{
    delay:1,
    height:"50vh",
    ease:"power4,inOut",
   })

   gsap.to(".marquee",3.5,{

    delay:0.75,
    top:"50%",
    ease:"power4.inOut",

   })
   gsap.from(".clip-top .marquee,.clip-bottom .marquee",5,{
    delay:1,
    x:"100%",
    ease:"power3.inOut",

   })
   gsap.from(".clip-centre .marquee",5,{
    delay:1,
    x:"-50%",
    ease:"power3.inOut",

   })
   gsap.to(".clip-top ",2,{
    delay:6,
    clipPath:"inset(0 0 100% 0)",
    ease:"power4.inOut",

   })
   gsap.to(".clip-bottom ",2,{
    delay:6,
    clipPath:"inset(100% 0 0 0)",
    ease:"power4.inOut",

   })
   gsap.to(".clip-top .marquee ,.clip-bottom .marquee , .clip-centre .marquee span ,marquee-container ",1,{
    delay:6,
    opacity:0,
     ease:"power2.inOut",

})
  