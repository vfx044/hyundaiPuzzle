
let _arrayPLeft = [];
let _arrayPTop = [];
let _arrayPWidth = [];
let _arrayPHeight = [];

let _arrayAreaPLeft = [];
let _arrayAreaPTop = [];
let _arrayAreaPWidth = [];
let _arrayAreaPHeight = [];

const _pieces = 21;

function getDataFromPiecesAndAreas(){

    for (let i = 0; i < _pieces; i++) {
        _arrayPLeft.push( Math.round( document.getElementById("divP" + (i+1) ).getBoundingClientRect().left ) );
        _arrayPTop.push( Math.round( document.getElementById("divP" + (i+1) ).getBoundingClientRect().top ) );
        _arrayPWidth.push( Math.round( document.getElementById("divP" + (i+1) ).getBoundingClientRect().width ) );
        _arrayPHeight.push( Math.round( document.getElementById("divP" + (i+1) ).getBoundingClientRect().height ) );

        _arrayAreaPLeft.push( Math.round( document.getElementById("divAreaP" + (i+1) ).getBoundingClientRect().left ) );
        _arrayAreaPTop.push( Math.round( document.getElementById("divAreaP" + (i+1) ).getBoundingClientRect().top ) );
        _arrayAreaPWidth.push( Math.round( document.getElementById("divAreaP" + (i+1) ).getBoundingClientRect().width ) );
        _arrayAreaPHeight.push( Math.round( document.getElementById("divAreaP" + (i+1) ).getBoundingClientRect().height ) );

        document.getElementById("divP" + (i+1) ).style.visibility = "hidden";

    }//for

    
    //var __checkMobile = true;
    //if(__checkMobile){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        //console.log("MOBILE");

        for (let i = 0; i < 6; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 1 + _arrayPLeft[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i] + "px";
        }//for

        for (let i = 6; i < 12; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 1 + _arrayPLeft[i-6] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i-6] + 0 + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i-6] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i-6] + "px";
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//for

        for (let i = 12; i < 18; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 1 + _arrayPLeft[i-12] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i-12] + 0 + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i-12] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i-12] + "px";
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//for

        for (let i = 18; i < 21; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 1 + _arrayPLeft[i-18] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i-18] + 0 + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i-18] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i-18] + "px";
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//for

    } else {

        //DESKTOP

        for (let i = 0; i < 8; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 12 + _arrayPLeft[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i] + "px";
        }//for

        for (let i = 8; i < 16; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 12 + _arrayPLeft[i-8] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i-8] + 0 + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i-8] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i-8] + "px";
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//for

        for (let i = 16; i < 21; i++) {
            document.getElementById("divDragP" + (i+1) ).style.left = 12 + _arrayPLeft[i-16] + "px";
            document.getElementById("divDragP" + (i+1) ).style.top = _arrayPTop[i-16] + 0 + "px";
            document.getElementById("divDragP" + (i+1) ).style.width = _arrayPWidth[i-16] + "px";
            document.getElementById("divDragP" + (i+1) ).style.height = _arrayPHeight[i-16] + "px";
            document.getElementById("divDragP" + (i+1) ).style.display = "none";  
        }//for

    }//if mobile

}

