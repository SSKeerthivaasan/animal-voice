function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JbwXKgjPj/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected Lion - '+lion+ ' Detected Cow - '+cow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "barking") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "meow") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else if (results[0].label == "mooing") {
        img.src = 'cow.gif';
        cow = cow + 1;
    }else if (results[0].label == "roar") {
        img.src = 'rooar.gif';
        lion = lion + 1;
    } else{
        img.src = 'listen.gif';
      }
   
    }
    
}