

function circleMouse(){
    window.addEventListener("mousemove" , function(details){
         var cir = document.querySelector("#minicircle");
         cir.style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
    })
}

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav" , {
        y:'-10',
        opacity : 0,
        duration : 1.5,
        ease : Expo.easeInOut
    })

    .to(".boundingelem" , {
        y : 0,
        ease : Expo.easeInOut,
        duration : 2,
        delay: -1,
        stagger : .2
    })

    .from("#herofooter" , {
        y:'-10',
        opacity : 0,
        duration : 1.5,
        delay : -1,
        ease : Expo.easeInOut
    })
}   

var arr = document.querySelectorAll(".elem");
arr.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    
    elem.addEventListener("mouseleave" , function(details){
       
        gsap.to(elem.querySelector(".elemImg") , {
            opacity : 0,
            ease : Power3,
            duration : 0.5,
        })
    })


    elem.addEventListener("mousemove" , function(details){
       var diff = details.clientY - elem.getBoundingClientRect().top;
       diffrot = details.clientX - rotate;        
       rotate = details.clientX;
        gsap.to(elem.querySelector(".elemImg") , {
            opacity : 1,
            ease : Power3,
            top : diff,
            left : details.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrot * 0.9)
        })
    })
})

firstPageAnim();
circleMouse();