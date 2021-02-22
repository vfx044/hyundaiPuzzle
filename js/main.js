
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

let _section = 1;
let _arrayOfSlidesLength = 3;
let _slideIndex = 1;
let _plusLess = 1;

let _mySetTime;

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
    getDataFromPiecesAndAreas(); //getLTWH.js

    //var __checkMobile = true;
    //if(__checkMobile){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("MOBILE");

        divTextInstructions.innerHTML = "<p>Coloca las piezas dentro del área que pienses que es la correcta</p>"+
                                        '<p style="font-size: 14px;">Utiliza las flechas de navegación<br> para visualizar más piezas.</p>'

        _arrayOfSlidesLength = 4;
        setUpDragMobile();
    } else {
        _arrayOfSlidesLength = 3;
        setUpDragDesktop();
    } //else

    buttonBack.style.display = "none";

    //------------------------------------------ BUTTONS BACK & NEXT - ADD EVENT LISTENER
    buttonBack.addEventListener('click', ()=>{
        showAndHideDivSection(-1);
    });

    buttonNext.addEventListener('click', ()=>{
        showAndHideDivSection(1);
    });

    
    _mySetTime = setTimeout(function(){ 
        divTextInstructions.style.opacity = 0;
    }, 3000);

}

//----------------------------------------------------------//
//
// GET DATE
//
//----------------------------------------------------------//

function getTimeStamp(){
    var d = new Date();
    _timeStamp = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "_" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    //console.log("_timeStamp:", _timeStamp);
}

//----------------------------------------------------------//
//
// MENU PIECES
//
//----------------------------------------------------------//

function hideBackAndNextButton(){
    buttonBack.style.display = "none";
    buttonNext.style.display = "none";
}

function hideAllSlidersMobile(__indexSlider){
    
    for (let i = 0; i < 21; i++) {
        if(_arrayPiecesRight[i] == 0){
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//if
    } //for

    switch(__indexSlider){
        case 1:
            for (let i = 0; i < 6; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
        case 2:
            for (let i = 6; i < 12; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
        case 3:
            for (let i = 12; i < 18; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
        case 4:
            for (let i = 18; i < 21; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
    }//switch
    
}

function hideAllSliders(__indexSlider){
    
    for (let i = 0; i < 21; i++) {
        if(_arrayPiecesRight[i] == 0){
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//if
    } //for

    switch(__indexSlider){
        case 1:
            for (let i = 0; i < 8; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
        case 2:
            for (let i = 8; i < 16; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
        case 3:
            for (let i = 16; i < 21; i++) {
                if(_arrayPiecesRight[i] == 0){
                    document.getElementById("divDragP" + (i+1) ).style.display = "block"; 
                }//if
            }//for
        break;
    }//switch
    
}

function showAndHideDivSection(__moreless){

    if(__moreless > 0){

        _slideIndex++;
        buttonBack.style.display = "flex"; 

        if(_slideIndex >= _arrayOfSlidesLength){
            _slideIndex = _arrayOfSlidesLength;
            buttonNext.style.display = "none"; 
        } //else

    } else if(__moreless < 0){
        
        _slideIndex--;
        buttonNext.style.display = "flex";

        if(_slideIndex <= 1){
            _slideIndex = 1;
            buttonBack.style.display = "none"; 
        } //else

    } //else
    
    //var __checkMobile = true;
    //if(__checkMobile){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        //console.log("MOBILE");
        hideAllSlidersMobile(_slideIndex);
    } else {
        hideAllSliders(_slideIndex);
    } //else

    //document.getElementById( "divPiecesContainer" + _slideIndex ).style.display = "block";

}

//----------------------------------------------------------//
//
// CHECK PIECES 
//
//----------------------------------------------------------//

function checkFinishPuzzle(){

    console.log("checkFinishPuzzle", _totalOfPieces);

    if(_picesRightPosition >= _totalOfPieces){
        
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