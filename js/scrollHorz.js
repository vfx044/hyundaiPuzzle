let _percent = 0;

function move_right() {
  console.log("move_right");
  document.getElementById('divPiecesContainer').scrollLeft -= _percent;
}

function move_left() {
  console.log("move_left");
  document.getElementById('divPiecesContainer').scrollLeft += _percent;
}

function getPercentFromWidthDiv(){
  var __widthContainer = document.getElementById('divPiecesContainer').offsetWidth;
  //console.log("__widthContainer:", __widthContainer);
  _percent = (20 * __widthContainer) / 100;
  //console.log("_percent:", _percent);
}