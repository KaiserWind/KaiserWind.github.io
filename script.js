let honkai =  document.getElementById('honkai');
let male = document.getElementById('male');
let female = document.getElementById('female');

window.addEventListener('scroll', () => {
    let value = window.scrollY
    if(window.scrollY >= window.innerHeight){
        window.scrollY(0)
    } else{
    honkai.style.marginTop = value * 2.5  + 'px';
    male.style.left = value * 1.5  + 'px';
    female.style.left = value * -1.5  + 'px';
    }
});

document.getElementById("myaudio").volume = 0.6

