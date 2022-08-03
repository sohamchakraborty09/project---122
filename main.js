x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
var apple = "";
var speak_data = "";
var to_number = 0;
draw_apple = "";


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
  apple = loadImage('apple.png');
}

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

function setup() {
  canvas = createCanvas(900, 600);
}
recognition.onresult = function (event) {


  console.log(event);

   content = event.results[0][0].transcript;
   to_number = Number(content);

  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "The system has not recognized a number";
  }

}

function draw() {
  if (draw_apple == "set") {


    for (var i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();


  }
}

function speak() {
  var synth = window.speechSynthesis;

  speak_data = to_number + " Apples drawn";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);


}