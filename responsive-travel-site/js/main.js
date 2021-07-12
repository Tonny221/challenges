//show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

//menu show

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

//menu close

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

//nav link part

const navLink = document.querySelectorAll('.nav_link')// quando querer trabalhar com mais de um elemento usar o querySelectorAll

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //quando clicar no link remove a classe show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//CHANGE BACKGROUND HEADER

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window;addEventListener('scroll', scrollHeader);

//SWIPER DISCOVER

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
    },
  });

  //VIDEO SECTION JS

const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //play video
        videoFile.play()

        //change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } 
    else{
        //pause video
        videoFile.pause();
        
        //change icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
    //video termina e os icones mudam

    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', finalVideo)