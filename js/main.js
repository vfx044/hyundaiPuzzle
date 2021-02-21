
const divP1 = document.getElementById("divP1");
const divP2 = document.getElementById("divP2");
const divP3 = document.getElementById("divP3");
const divP4 = document.getElementById("divP4");
const divP5 = document.getElementById("divP5");
const divP6 = document.getElementById("divP6");
const divP7 = document.getElementById("divP7");
const divP8 = document.getElementById("divP8");
const divP9 = document.getElementById("divP9");
const divP10 = document.getElementById("divP10");
const divP11 = document.getElementById("divP11");
const divP12 = document.getElementById("divP12");
const divP13 = document.getElementById("divP13");
const divP14 = document.getElementById("divP14");
const divP15 = document.getElementById("divP15");
const divP16 = document.getElementById("divP16");
const divP17 = document.getElementById("divP17");
const divP18 = document.getElementById("divP18");
const divP19 = document.getElementById("divP19");
const divP20 = document.getElementById("divP20");
const divP21 = document.getElementById("divP21");

const divAreaP1 = document.getElementById("divAreaP1");
const divAreaP2 = document.getElementById("divAreaP2");
const divAreaP3 = document.getElementById("divAreaP3");
const divAreaP4 = document.getElementById("divAreaP4");
const divAreaP5 = document.getElementById("divAreaP5");
const divAreaP6 = document.getElementById("divAreaP6");
const divAreaP7 = document.getElementById("divAreaP7");
const divAreaP8 = document.getElementById("divAreaP8");
const divAreaP9 = document.getElementById("divAreaP9");
const divAreaP10 = document.getElementById("divAreaP10");
const divAreaP11 = document.getElementById("divAreaP11");
const divAreaP12 = document.getElementById("divAreaP12");
const divAreaP13 = document.getElementById("divAreaP13");
const divAreaP14 = document.getElementById("divAreaP14");
const divAreaP15 = document.getElementById("divAreaP15");
const divAreaP16 = document.getElementById("divAreaP16");
const divAreaP17 = document.getElementById("divAreaP17");
const divAreaP18 = document.getElementById("divAreaP18");
const divAreaP19 = document.getElementById("divAreaP19");
const divAreaP20 = document.getElementById("divAreaP20");
const divAreaP21 = document.getElementById("divAreaP21");

const divTextInstructions = document.getElementById("divTextInstructions");

const buttonBack = document.getElementById("class_buttonPrev");
const buttonNext = document.getElementById("class_buttonNext");

const _totalOfPieces = 21;

let _time = "";
let _timeStamp = "";
let _picesRightPosition = 0;
let _zIndex = 30;
let _countDown;
let _textInst = true;


//localhost/dev/HYUNDAI/PUZZLE_REPO/hyundaiPuzzle/
//localhost/dev/HYUNDAI/PUZZLE_REPO/hyundaiPuzzle/index.html?token=MTIzNDU2Nzg&email=totoro@ghibli.com

//----------------------------------------------------------//
//
// INIT FUNCTION
//
//----------------------------------------------------------//

function init(){
    console.log("^-^ INIT");
    
    getUrlVars();
    getTimeStamp();
    chronoStart();
    getPercentFromWidthDiv(); //scrollHorz.js

    //------------------------------------------ BUTTONS BACK & NEXT - ADD EVENT LISTENER
    buttonBack.addEventListener('click', ()=>{
        move_right();
    });

    buttonNext.addEventListener('click', ()=>{
        move_left();
    });
}

//----------------------------------------------------------//
//
// GET DATE
//
//----------------------------------------------------------//

function getTimeStamp(){
    var d = new Date();
    _timeStamp = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "_" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log("_timeStamp:", _timeStamp);
}

//----------------------------------------------------------//
//
// DRAG & DROP FUNCTION
//
//----------------------------------------------------------//

function drag(ev) {
    console.log("drag");
    ev.dataTransfer.setData("text", ev.target.id);
    //console.log("ev.target.id:", ev.target.id);

    var __numIdPieza = getNumberFromIdfromPieza(ev.target.id);
    //console.log("__numIdPieza:", __numIdPieza);

    document.getElementById(ev.target.id).style.zIndex = _zIndex++;
    document.getElementById(ev.target.id).classList.add("activeDrag");
    document.getElementById("divAreaP" + __numIdPieza).style.zIndex = _zIndex++;
    
    //hideAllAreas(__numIdPieza);
    if(_textInst){
        _textInst = false;
        divTextInstructions.style.opacity = 0;
    } //if
}

function allowDrop(ev) {
    console.log("allowDrop");
    ev.preventDefault(divP1);
}
  
function drop(ev) {
    console.log("drop");
    ev.preventDefault();
    //console.log("id area:", ev.target.id);

    var data = ev.dataTransfer.getData("text");
    //console.log("id pieza:", data);

    var __numIdArea = getNumberFromIdfromArea(ev.target.id);
    var __numIdPieza = getNumberFromIdfromPieza(data);
    //console.log(__numIdArea, __numIdPieza);

    if(__numIdPieza == __numIdArea){
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).ondragstart = function () { return false; };
        document.getElementById("divP"+__numIdPieza).style.zIndex = "30";
        document.getElementById("divAreaP"+__numIdArea).style.zIndex = "30";
        document.getElementById("divAreaP"+__numIdArea).classList.remove("activeDrag");
        _picesRightPosition++;
        checkFinishPuzzle();
    }//if

}

//----------------------------------------------------------//
//
// HIDE ALL AREAS
//
//----------------------------------------------------------//

function hideAllAreas(__numIdPieza){

    /*
    for (let i = 0; i < _totalOfAreas; i++) {
        document.getElementById("divAreaP" + (i + 1)).style.display = "none"; 
    }//for
    
    document.getElementById("divAreaP" + __numIdPieza).style.display = "block";
    */ 

}

//----------------------------------------------------------//
//
// CHECK PIECES 
//
//----------------------------------------------------------//

function checkFinishPuzzle(){

    if(_picesRightPosition == _totalOfPieces){
        
        //console.log("YOU WIN");
        chronoStop(); //chronos.js
        _time = document.getElementById("chronotime").textContent;

        ShowFinalMessage();
        sendDataToPhp(); //getAndSendVars.js
        
    } //if

}

//----------------------------------------------------------//
//
// SHOW FINAL MESSAGE
//
//----------------------------------------------------------//

function ShowFinalMessage(){

    //SHOW FINAL MESSAGE
    divTextInstructions.innerHTML = "<p>Haz completado el rompecabezas</p>"
    divTextInstructions.style.zIndex = 500;
    divTextInstructions.style.opacity = 1;

}


window.onload = init();