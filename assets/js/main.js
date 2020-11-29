function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#cards").css("border-bottom", `6px solid ${getRandomColor()}`);
  $("#card2").css("border-bottom", `6px solid ${getRandomColor()}`);
  $("#card3").css("border-bottom", `6px solid ${getRandomColor()}`);
  $("#card4").css("border-bottom", `6px solid ${getRandomColor()}`);
  $("#card5").css("border-bottom", `6px solid ${getRandomColor()}`);

}


