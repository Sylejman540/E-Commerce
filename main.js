const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden')
    }
})

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000);

let heart = document.getElementById("heart");

heart.addEventListener('click', changeBackground);

function changeBackground(){
    heart.style.fill = "red";
}
