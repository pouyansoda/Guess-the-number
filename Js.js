var random;
var str = "Bingo!!!";
var result = str.fontsize(6);
function reload() {
  window.location.reload();
}
function guess() {
  random = Math.floor(Math.random() * 100 + 1);
  //   console.log("Random number is :", random);
}
function compareFirstUser() {
  var firstUserGuess = document.getElementById("input-1").value;
  if (firstUserGuess > 100 || firstUserGuess < 1) {
    document.getElementById("field-1").style.animation = "wrongNumber 1.3s 1";
    var arrow = "⇩";
    var bold = arrow.fontsize(6);
    document.getElementById("firstUserOutput").innerHTML = bold;
    document.getElementById("input-1").value = "";
    var audio = new Audio("Wrong-alert-beep-sound.mp3");
    audio.play();
  } else {
    if (firstUserGuess > random) {
      document.getElementById("firstUserOutput").innerHTML = "lower";
      document.getElementById("firstUserOutput").style.color = "red";
      document.getElementById("input-1").value = "";
    } else if (firstUserGuess < random) {
      document.getElementById("firstUserOutput").innerHTML = "higher";
      document.getElementById("firstUserOutput").style.color = "green";
      document.getElementById("input-1").value = "";
    } else if ((firstUserGuess = random)) {
      document.getElementById("firstUserOutput").innerHTML = result;
      document.getElementById("firstUserOutput").style.color = "darkgreen";
      document.getElementById("input-1").setAttribute("readonly", "readonly");
      document.getElementById("input-2").setAttribute("readonly", "readonly");
      document.getElementById("input-3").setAttribute("readonly", "readonly");
      document.getElementById("submit-1").style.visibility = "hidden";
      document.getElementById("submit-2").style.visibility = "hidden";
      document.getElementById("submit-3").style.visibility = "hidden";
      document.getElementById("thirdUserOutput").innerHTML = "";
      document.getElementById("secondUserOutput").innerHTML = "";
      document.getElementById("field-1").style.backgroundColor = "forestgreen";
      document.getElementById("field-2").style.backgroundColor = "firebrick";
      document.getElementById("field-3").style.backgroundColor = "firebrick";
      var audio = new Audio("Winning-sound-effect.mp3");
      audio.play();
      var x = document.getElementsByClassName("range-number");
      x[0].innerHTML = "Player 1 has won";
      x[1].innerHTML = "Player 2 lost";
      x[2].innerHTML = "Player 3 lost";
      //   document.getElementById("submit-1").style.size
      document.getElementById(
        "new-1"
      ).innerHTML = `<a onclick="reload()">New Game</a>`;
    }
  }
}

function compareSecondUser() {
  var secondUserGuess = document.getElementById("input-2").value;
  if (secondUserGuess > 100 || secondUserGuess < 1) {
    document.getElementById("field-2").style.animation = "wrongNumber 1.3s 1";
    var arrow = "⇩";
    var bold = arrow.fontsize(6);
    document.getElementById("secondUserOutput").innerHTML = bold;
    document.getElementById("input-2").value = "";
    var audio = new Audio("Wrong-alert-beep-sound.mp3");
    audio.play();
  } else {
    if (secondUserGuess > random) {
      document.getElementById("secondUserOutput").innerHTML = "lower";
      document.getElementById("secondUserOutput").style.color = "red";
      document.getElementById("input-2").value = "";
    } else if (secondUserGuess < random) {
      document.getElementById("secondUserOutput").innerHTML = "higher";
      document.getElementById("secondUserOutput").style.color = "green";
      document.getElementById("input-2").value = "";
    } else if ((secondUserGuess = random)) {
      document.getElementById("secondUserOutput").innerHTML = result;
      document.getElementById("secondUserOutput").style.color = "darkgreen";
      document.getElementById("input-1").setAttribute("readonly", "readonly");
      document.getElementById("input-2").setAttribute("readonly", "readonly");
      document.getElementById("input-3").setAttribute("readonly", "readonly");
      document.getElementById("submit-1").style.visibility = "hidden";
      document.getElementById("submit-2").style.visibility = "hidden";
      document.getElementById("submit-3").style.visibility = "hidden";
      document.getElementById("thirdUserOutput").innerHTML = "";
      document.getElementById("firstUserOutput").innerHTML = "";
      document.getElementById("field-1").style.backgroundColor = "firebrick";
      document.getElementById("field-2").style.backgroundColor = "forestgreen";
      document.getElementById("field-3").style.backgroundColor = "firebrick";
      var audio = new Audio("Winning-sound-effect.mp3");
      audio.play();
      var x = document.getElementsByClassName("range-number");
      x[0].innerHTML = "Player 1 lost";
      x[1].innerHTML = "Player 2 has won";
      x[2].innerHTML = "Player 3 lost";
      document.getElementById(
        "new-2"
      ).innerHTML = `<a onclick="reload()">New Game</a>`;
    }
  }
}

function compareThirdUser() {
  var thirdUserGuess = document.getElementById("input-3").value;
  if (thirdUserGuess > 100 || thirdUserGuess < 1) {
    document.getElementById("field-3").style.animation = "wrongNumber 1.3s 1";
    var arrow = "⇩";
    var bold = arrow.fontsize(6);
    document.getElementById("thirdUserOutput").innerHTML = bold;
    document.getElementById("input-3").value = "";
    var audio = new Audio("Wrong-alert-beep-sound.mp3");
    audio.play();
  } else {
    if (thirdUserGuess > random) {
      document.getElementById("thirdUserOutput").innerHTML = "lower";
      document.getElementById("thirdUserOutput").style.color = "red";
      document.getElementById("input-3").value = "";
    } else if (thirdUserGuess < random) {
      document.getElementById("thirdUserOutput").innerHTML = "higher";
      document.getElementById("thirdUserOutput").style.color = "green";
      document.getElementById("input-3").value = "";
    } else if ((thirdUserGuess = random)) {
      document.getElementById("thirdUserOutput").innerHTML = result;
      document.getElementById("thirdUserOutput").style.color = "darkgreen";
      document.getElementById("input-1").setAttribute("readonly", "readonly");
      document.getElementById("input-2").setAttribute("readonly", "readonly");
      document.getElementById("input-3").setAttribute("readonly", "readonly");
      document.getElementById("submit-1").style.visibility = "hidden";
      document.getElementById("submit-2").style.visibility = "hidden";
      document.getElementById("submit-3").style.visibility = "hidden";
      document.getElementById("firstUserOutput").innerHTML = "";
      document.getElementById("secondUserOutput").innerHTML = "";
      document.getElementById("field-1").style.backgroundColor = "firebrick";
      document.getElementById("field-2").style.backgroundColor = "firebrick";
      document.getElementById("field-3").style.backgroundColor = "forestgreen";
      var audio = new Audio("Winning-sound-effect.mp3");
      audio.play();
      var x = document.getElementsByClassName("range-number");
      x[0].innerHTML = "Player 1 lost";
      x[1].innerHTML = "Player 2 lost";
      x[2].innerHTML = "Player 3 has won";
      document.getElementById(
        "new-3"
      ).innerHTML = `<a onclick="reload()">New Game</a>`;
    }
  }
}
