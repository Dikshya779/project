const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
    indicatorImages[i].addEventListener("click", function () {

        for (let j = 0; j < indicatorImages.length; j++) {
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id = this.getAttribute("data-id");
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}



function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    // console.log(distance);
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed=currentTime-startTime;
        var run=ease(timeElapsed,startingPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed<duration) requestAnimationFrame(animation);
    }
function ease(t, b,c,d){
    t/=d/2;
    if(t<1)return c/2*t*t+b;
    t--;
    return -c/2*(t*(t-2)-1)+b;

}
    requestAnimationFrame(animation);

}
var section1=document.querySelector('.section1');
section1.addEventListener('click',function(){
    // console.log("clicked");
smoothScroll('#container-5',1200);

 

});

var review=document.querySelector('.review');
review.addEventListener('click',function(){

    console.log("clicked");
smoothScroll('#testimonials',2000);

});





   


