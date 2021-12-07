let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


//new
const track = document.querySelector('.track');
let initialPosition = null;
let moving = false;
let transform = 0;
//

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


//new
const gestureStart = (e) => {
    initialPosition = e.pageX;
    moving = true;
    const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
    if (transformMatrix !== 'none') {
      transform = parseInt(transformMatrix.split(',')[4].trim());
    }
}
      
const gestureMove = (e) => {
    if (moving) {
      const currentPosition = e.pageX;
      const diff = currentPosition - initialPosition;
      track.style.transform = `translateX(${transform + diff}px)`;  
    }
};
      
const gestureEnd = (e) => {
    moving = false;
}
      
if (window.PointerEvent) {
    window.addEventListener('pointerdown', gestureStart);
      
    window.addEventListener('pointermove', gestureMove);
      
    window.addEventListener('pointerup', gestureEnd);  
} else {
    window.addEventListener('touchdown', gestureStart);
      
    window.addEventListener('touchmove', gestureMove);
      
    window.addEventListener('touchup', gestureEnd);  
        
    window.addEventListener('mousedown', gestureStart);
      
    window.addEventListener('mousemove', gestureMove);
      
    window.addEventListener('mouseup', gestureEnd);  
}
      