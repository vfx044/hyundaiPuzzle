
let divP1 = document.getElementById("divP1");
let divP2 = document.getElementById("divP2");
let divP3 = document.getElementById("divP3");
let divP4 = document.getElementById("divP4");
let divP5 = document.getElementById("divP5");
let divP6 = document.getElementById("divP6");
let divP7 = document.getElementById("divP7");
let divP8 = document.getElementById("divP8");
let divP9 = document.getElementById("divP9");
let divP10 = document.getElementById("divP10");
let divP11 = document.getElementById("divP11");
let divP12 = document.getElementById("divP12");
let divP13 = document.getElementById("divP13");
let divP14 = document.getElementById("divP14");
let divP15 = document.getElementById("divP15");
let divP16 = document.getElementById("divP16");
let divP17 = document.getElementById("divP17");
let divP18 = document.getElementById("divP18");
let divP19 = document.getElementById("divP19");
let divP20 = document.getElementById("divP20");
let divP21 = document.getElementById("divP21");

let divAreaP1 = document.getElementById("divAreaP1");
let divAreaP2 = document.getElementById("divAreaP2");
let divAreaP3 = document.getElementById("divAreaP3");
let divAreaP4 = document.getElementById("divAreaP4");
let divAreaP5 = document.getElementById("divAreaP5");
let divAreaP6 = document.getElementById("divAreaP6");
let divAreaP7 = document.getElementById("divAreaP7");
let divAreaP8 = document.getElementById("divAreaP8");
let divAreaP9 = document.getElementById("divAreaP9");
let divAreaP10 = document.getElementById("divAreaP10");
let divAreaP11 = document.getElementById("divAreaP11");
let divAreaP12 = document.getElementById("divAreaP12");
let divAreaP13 = document.getElementById("divAreaP13");
let divAreaP14 = document.getElementById("divAreaP14");
let divAreaP15 = document.getElementById("divAreaP15");
let divAreaP16 = document.getElementById("divAreaP16");
let divAreaP17 = document.getElementById("divAreaP17");
let divAreaP18 = document.getElementById("divAreaP18");
let divAreaP19 = document.getElementById("divAreaP19");
let divAreaP20 = document.getElementById("divAreaP20");
let divAreaP21 = document.getElementById("divAreaP21");

const _totalOfAreas = 21;

let _picesRightPosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let _zIndex = 30;

let _countDown;

//localhost/dev/HYUNDAI/PUZZLE_REPO/huyndaiPuzzle/

//----------------------------------------------------------//
//
// INIT FUNCTION
//
//----------------------------------------------------------//

function init(){
    console.log("^-^ INIT");
    chronoStart();
}

//----------------------------------------------------------//
//
// DRAG & DROP FUNCTION
//
//----------------------------------------------------------//

function drag(ev) {
    console.log("drag");
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("ev.target.id:", ev.target.id);

    var __numIdPieza = getNumberFromIdfromPieza(ev.target.id);
    console.log("__numIdPieza:", __numIdPieza);

    document.getElementById(ev.target.id).style.zIndex = _zIndex++;
    document.getElementById(ev.target.id).classList.add("activeDrag");
    document.getElementById("divAreaP" + __numIdPieza).style.zIndex = _zIndex++;
    
    hideAllAreas(__numIdPieza);
}

function allowDrop(ev) {
    console.log("allowDrop");
    ev.preventDefault(divP1);
}
  
function drop(ev) {
    console.log("drop");
    ev.preventDefault();
    console.log("id area:", ev.target.id);

    var data = ev.dataTransfer.getData("text");
    console.log("id pieza:", data);

    var __numIdArea = getNumberFromIdfromArea(ev.target.id);
    var __numIdPieza = getNumberFromIdfromPieza(data);
    console.log(__numIdArea, __numIdPieza);

    if(__numIdPieza == __numIdArea){
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).ondragstart = function () { return false; };
        document.getElementById("divP"+__numIdPieza).style.zIndex = "30";
        document.getElementById("divAreaP"+__numIdArea).style.zIndex = "30";
        document.getElementById("divAreaP"+__numIdArea).classList.remove("activeDrag");
        _picesRightPosition[__numIdPieza-1] = 1;
        
        console.log("_picesRightPosition:", _picesRightPosition);
    }//if

}

//----------------------------------------------------------//
//
// HIDE ALL AREAS
//
//----------------------------------------------------------//

function hideAllAreas(__numIdPieza){

    
    // for (let i = 0; i < _totalOfAreas; i++) {
    //     //if(_picesRightPosition[i] == 0){
    //         document.getElementById("divAreaP" + (i + 1)).style.display = "none"; 
    //     //}//if 
    // }//for
    
    // document.getElementById("divAreaP" + __numIdPieza).style.display = "block"; 

}


window.onload = init();