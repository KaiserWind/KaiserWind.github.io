document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


var audio = document.getElementById("audio");
var image = document.getElementById("myImage");
  
  image.addEventListener("click", function() {
    audio.play();
  });


document.getElementById("myaudio").volume = 0.6