/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var audioMC = document.getElementById("MC");
var audioHime = document.getElementById("Hime");
var audioWelt = document.getElementById("Welt");
var audioMarch = document.getElementById("March");
var audioDan = document.getElementById("Dan");
var voiceMC = document.getElementById("voiceMC");
var voiceHime = document.getElementById("voiceHime");
var voiceWelt = document.getElementById("voiceWelt");
var voiceMarch = document.getElementById("voiceMarch");
var voiceDan = document.getElementById("voiceDan");
var btn = document.getElementById("btn");
var audio = document.getElementById("myaudio");
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});
window.addEventListener('DOMContentLoaded', function() {
  audio.play();
  btn.addEventListener("click", function () {
      if (audio.paused) {
          audio.play();
          btn.innerHTML = '<i class="fa-solid fa-music fa-spin"></i>'
      } else {
          audio.pause();
          btn.innerHTML = '<i class="fa-solid fa-music"></i>'
      }
  });
});

audioMC.addEventListener("ended", function() {
  voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audioHime.addEventListener("ended", function() {
  voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audioWelt.addEventListener("ended", function() {
  voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audioMarch.addEventListener("ended", function() {
  voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audioDan.addEventListener("ended", function() {
  voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});



  voiceMC.addEventListener("click", function() {
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audioMC.paused) {
      audioMC.play();
      voiceMC.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audioMC.currentTime = 0;
    } else {
      audioMC.pause();
      voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audioHime.pause();
    audioWelt.pause();
    audioMarch.pause();
    audioDan.pause();
  });

  voiceHime.addEventListener("click", function() {
    audioMC.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audioHime.paused) {
      audioHime.play();
      voiceHime.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audioHime.currentTime = 0;
    } else {
      audioHime.pause();
      voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audioWelt.pause();
    audioMarch.pause();
    audioDan.pause();
  });

  voiceWelt.addEventListener("click", function() {
    audioMC.pause();
    audioHime.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audioWelt.paused) {
      audioWelt.play();
      voiceWelt.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audioWelt.currentTime = 0;
    } else {
      audioWelt.pause();
      voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audioMarch.pause();
    audioDan.pause();
  });
  voiceMarch.addEventListener("click", function() {
    audioMC.pause();
    audioHime.pause();
    audioWelt.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audioMarch.paused) {
      audioMarch.play();
      voiceMarch.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audioMarch.currentTime = 0;
    } else {
      audioMarch.pause();
      voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audioDan.pause();
  });
  voiceDan.addEventListener("click", function() {
    audioMC.pause();
    audioHime.pause();
    audioWelt.pause();
    audioMarch.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audioDan.paused) {
      audioDan.play();
      voiceDan.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audioDan.currentTime = 0;
    } else {
      audioDan.pause();
      voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
  });

document.getElementById("myaudio").volume = 0.2
document.getElementById("MC").volume = 0.7
document.getElementById("Hime").volume = 0.7
document.getElementById("Welt").volume = 0.7
document.getElementById("March").volume = 0.7
document.getElementById("Dan").volume = 0.7