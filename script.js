
let speech = new SpeechSynthesisUtterance();

const textSpeech = document.querySelector("textarea");

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onVoicesChanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name , [i])));

};


  voiceSelect.addEventListener("change", () => {
   speech.voice = voices[voiceSelect.value];
});


document.querySelector('button').addEventListener("click", function(){

speech.text = textSpeech.value;
 window.speechSynthesis.speak(speech);


});
