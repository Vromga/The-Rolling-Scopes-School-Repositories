import geoCoding from "./geoCodingApiForward";

function speechRecognition() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = `${localStorage.getItem('lang')}`;
  const input = document.querySelector('.header--search-input');
  recognition.addEventListener('result', function(event) {
    const city = event.results[0][0].transcript;
    input.value = city;
    geoCoding();
    });
  recognition.start();
}

export default speechRecognition;
