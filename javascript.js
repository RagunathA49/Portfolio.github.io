

// Nav Bar
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}
// Nav Bar Ends

// anchore tag smooth scrolling 
var navmenuanchortag = document.querySelectorAll('.menu-items a');
for (var i = 0; i < navmenuanchortag.length; i++){
    navmenuanchortag[i].addEventListener("click",function(){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,20);
        })
    })
}

// swiper 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });


  
  var textWrapper = document.querySelector('.ml6 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });


    // text animtion
