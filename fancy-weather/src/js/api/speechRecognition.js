import geoCoding from "./geoCodingApiForward";
import alertMessage from "../DOM/alert";

function speechRecognition() {
  try {
    /*  eslint-disable */

    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = `${localStorage.getItem('lang')}`;
    const input = document.querySelector('.header--search-input');
    recognition.addEventListener('result', function f(event) {
      input.value = event.results[0][0].transcript;
      geoCoding();
    });
    recognition.start();
  }catch (e) {
    alertMessage(e);
  }
}

/*  eslint-enable */
export default speechRecognition;
