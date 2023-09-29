let honkai =  document.getElementById('honkai');

window.addEventListener('scroll', () => {
    let value = window.scrollY
    if(window.scrollY >= window.innerHeight){
        window.scrollY(0)
    } else{
    honkai.style.marginTop = value * 2.5  + 'px';
    }
});


document.getElementById("myaudio").volume = 0.4

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
    loader.style.display = "none";
});