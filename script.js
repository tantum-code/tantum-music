let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


timeline
    .to(".layer1",3,{y:-300})
    .to(".layer2",3,{y:-200},"-=3")
    .to(".layer3",3,{y:100},"-=3")
    .to(".content",3,{top:'0%'},"-=3");

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline)
    .addTo(controller);