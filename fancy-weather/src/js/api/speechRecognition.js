import geoCoding from "./geoCodingApiForward";
import alertMessage from "../DOM/alert";

function speechRecognition() {
  try {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = `${localStorage.getItem('lang')}`;
    const input = document.querySelector('.header--search-input');
    recognition.addEventListener('result', function (event) {
      const city = event.results[0][0].transcript;
      input.value = city;
      geoCoding();
    });
    recognition.start();
  }catch (e) {
    alertMessage(e);
  }
}

export default speechRecognition;
