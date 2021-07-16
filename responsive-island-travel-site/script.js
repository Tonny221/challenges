//SHOW MENU

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Pop Up

const btnOpenVideo = document.querySelectorAll('.island_video-content');
const islandPopup = document.getElementById('popup');

function popUp(){
    islandPopup.classList.add('show-popup')
}

//b é uma variavel criada de valor volatil para quantas vezes for necessário abrir o popup
btnOpenVideo.forEach(b => b.addEventListener('click', popUp))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', () => {
    islandPopup.classList.remove('show-popup')
})