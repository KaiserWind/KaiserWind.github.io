var audio1 = document.getElementById("MC");
var audio2 = document.getElementById("Hime");
var audio3 = document.getElementById("Welt");
var audio4 = document.getElementById("March");
var audio5 = document.getElementById("Dan");
var voiceMC = document.getElementById("voiceMC");
var voiceHime = document.getElementById("voiceHime");
var voiceWelt = document.getElementById("voiceWelt");
var voiceMarch = document.getElementById("voiceMarch");
var voiceDan = document.getElementById("voiceDan");
var btn = document.getElementById("btn");
var audio = document.getElementById("myaudio");

window.addEventListener('DOMContentLoaded', function() {
  audio.play();
  btn.addEventListener("click", function () {
      if (audio.paused) {
          audio.play();
          btn.innerHTML = '<i class="fas fa-solid fa-music fa-spin"></i>'
      } else {
          audio.pause();
          btn.innerHTML = '<i class="fas fa-solid fa-music"></i>'
      }
  });
});

audio1.addEventListener("ended", function() {
  voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audio2.addEventListener("ended", function() {
  voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audio3.addEventListener("ended", function() {
  voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audio4.addEventListener("ended", function() {
  voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});
audio5.addEventListener("ended", function() {
  voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
});



  voiceMC.addEventListener("click", function() {
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audio1.paused) {
      audio1.play();
      voiceMC.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audio1.currentTime = 0;
    } else {
      audio1.pause();
      voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });

  voiceHime.addEventListener("click", function() {
    audio1.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audio2.paused) {
      audio2.play();
      voiceHime.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audio2.currentTime = 0;
    } else {
      audio2.pause();
      voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });
  voiceWelt.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audio3.paused) {
      audio3.play();
      voiceWelt.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audio3.currentTime = 0;
    } else {
      audio3.pause();
      voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audio4.pause();
    audio5.pause();
  });
  voiceMarch.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audio4.paused) {
      audio4.play();
      voiceMarch.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audio4.currentTime = 0;
    } else {
      audio4.pause();
      voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
    audio5.pause();
  });
  voiceDan.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    voiceMC.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceHime.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceWelt.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    voiceMarch.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    if (audio5.paused) {
      audio5.play();
      voiceDan.innerHTML = '<i class="fas fa-solid fa-pause fa-beat-fade"></i>'
      audio5.currentTime = 0;
    } else {
      audio5.pause();
      voiceDan.innerHTML = '<i class="fas fa-solid fa-play"></i>'
    }
  });

document.getElementById("myaudio").volume = 0.2
document.getElementById("MC").volume = 0.7
document.getElementById("Hime").volume = 0.7
document.getElementById("Welt").volume = 0.7
document.getElementById("March").volume = 0.7
document.getElementById("Dan").volume = 0.7