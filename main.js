document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  let textBox = document.getElementById('textInput');
  responsiveVoice.speak(textBox.value, 'US English Female');
}, true);
