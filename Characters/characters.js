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
      } else {
          audio.pause();
      }
  });
});


  voiceMC.addEventListener("click", function() {
    if (audio1.paused) {
      audio1.play();
      audio1.currentTime = 0;
    } else {
      audio1.pause();
    }
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });
  voiceHime.addEventListener("click", function() {
    audio1.pause();
    if (audio2.paused) {
      audio2.play();
      audio2.currentTime = 0;
    } else {
      audio2.pause();
    }
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });
  voiceWelt.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    if (audio3.paused) {
      audio3.play();
      audio3.currentTime = 0;
    } else {
      audio3.pause();
    }
    audio4.pause();
    audio5.pause();
  });
  voiceMarch.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    if (audio4.paused) {
      audio4.play();
      audio4.currentTime = 0;
    } else {
      audio4.pause();
    }
    audio5.pause();
  });
  voiceDan.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    if (audio5.paused) {
      audio5.play();
      audio5.currentTime = 0;
    } else {
      audio5.pause();
    }
  });

document.getElementById("myaudio").volume = 0.2
document.getElementById("MC").volume = 0.7
document.getElementById("Hime").volume = 0.7
document.getElementById("Welt").volume = 0.7
document.getElementById("March").volume = 0.7
document.getElementById("Dan").volume = 0.7