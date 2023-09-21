let honkai =  document.getElementById('honkai');

window.addEventListener('scroll', () => {
    let value = window.scrollY
    if(window.scrollY >= window.innerHeight){
        window.scrollY(0)
    } else{
    honkai.style.marginTop = value * 2.5  + 'px';
    }
});

if (window.matchMedia("(max-width: 700px)").matches) {
    window.addEventListener('scroll', () => {
        let value = window.scrollY
        if(window.scrollY >= window.innerHeight){
            window.scrollY(0)
        } else{
        honkai.style.marginTop = value * 0.5  + 'px';
        }
    });
}

document.getElementById("myaudio").volume = 0.6

