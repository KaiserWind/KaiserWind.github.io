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
  voiceMC.addEventListener("click", function() {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });
  voiceHime.addEventListener("click", function() {
    audio1.pause();
    audio2.play();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  });
  voiceWelt.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.play();
    audio4.pause();
    audio5.pause();
  });
  voiceMarch.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.play();
    audio5.pause();
  });
  voiceDan.addEventListener("click", function() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.play();
  });


document.getElementById("myaudio").volume = 0.6