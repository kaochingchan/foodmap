gsap.registerPlugin(ScrollTrigger);




gsap.from(".team_member",{
    y:-200,
    stagger:.5,
    opacity:0,
    duration:2,
})


//sidebar
gsap.from("#sidebar",{
    scrollTrigger: {
        trigger: "#home",
        start: "top 40%",
        end: "bottom 40%",
        toggleActions:"restart none none reverse"
    },
    opacity:0,
    duration:.5,
})



//tab_bar

gsap.from("#fullscreen_text", {
    opacity: 0,
    delay: 1.5,
    duration: 2,
})

gsap.from("#home", {
    scrollTrigger: {
        trigger: "#home",
        start: "top 45%",
        end: "bottom 75%",
        // toggleActions:"restart none none reverse"
    },
    opacity: 0,
    duration: 1,
})


gsap.from("#search", {
    scrollTrigger: {
        trigger: "#search",
        // markers:true,
        start: "top 50%",
        end: "bottom 100%",
        // toggleActions:"restart none none reverse"
    },
    x: 200,
    opacity: 0,
    duration: 1,
})

gsap.from(".res_anime", {
    scrollTrigger: {
        // markers:true,
        trigger: "#search_res",
        start: "top 75%",
        end: "bottom 100%",
        // toggleActions:"restart none none reverse"
    },
    x: -100,
    stagger: .4,
    opacity: 0
})



let t1 = new gsap.timeline({
    scrollTrigger: {
        // markers:true,
        trigger: "#search_res",
        start: "top 75%",
        end: "bottom 100%",
    }
})
    .from(".find_res", {
        scale: 0,
        duration: .5,
    })
    .to(".res_anime", {
        stagger: .4,
        opacity: 1,
        duration: 1.5
    })


// var tl = gsap.timeline({defaults:{duration:1}})
// tl.from(".wheel_anime",{x:100,stagger:.6,opacity:0})


gsap.from("#wheel", {
    scrollTrigger: {
        trigger: "#wheel",
        // markers:true,
        start: "top 50%",
        end: "bottom 90%",
        // toggleActions:"restart none none reverse"
    },

    x: -200,
    opacity: 0,
    duration: 1,
})



gsap.from(".cat_block", {
    scrollTrigger: {
        trigger: "#wheel_cat",
        start: "top 75%",
        end: "bottom 100%",
    },
    y: -100,
    opacity: 0,
    stagger: .4,
    duration: 1
})