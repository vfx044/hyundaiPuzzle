

let _arrayPiecesRight = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//-------------------------------------------------------------------------//
//
// DRAGMOVE LISTENER
//
//-------------------------------------------------------------------------//


function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)

    //console.log("MOVE DRAGGING");
}

function setUpDragMobile(){
    //-------------------------------------------------------------------------//
    //
    // PICES 1 - 6
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P1 ---//
    interact(divDragP1).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP1").style.width = _arrayAreaPWidth[0] + "px";
                document.getElementById("divDragP1").style.height = _arrayAreaPHeight[0] + "px";
                document.getElementById("divDragP1").style.left = ((_arrayAreaPWidth[0])/2) + "px";
                //document.getElementById("divDragP").style.top = ((_arrayAreaPHeight[0])/2) + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP1") , ("divAreaP1") )){ 
                    console.log("SI COLICIONA");
                    document.getElementById("divAreaP1").appendChild( document.getElementById("divP1") );
                    document.getElementById("divP1").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP1").remove();
                    _arrayPiecesRight[0] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    console.log("NO COLICIONA");
                    document.getElementById("divDragP1").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP1").dataset.x = 0;
                    document.getElementById("divDragP1").dataset.y = 0;
                    document.getElementById("divDragP1").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP1").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP1").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP1").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P2 ---//
    interact(divDragP2).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP2").style.width = _arrayAreaPWidth[1] + "px";
                document.getElementById("divDragP2").style.height = _arrayAreaPHeight[1] + "px";
                //document.getElementById("divDragP2").style.left = ((_arrayAreaPWidth[1])/2) + "px";
                //document.getElementById("divDragP").style.top = ((_arrayAreaPHeight[1])/2) + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP2") , ("divAreaP2") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP2").appendChild( document.getElementById("divP2") );
                    document.getElementById("divP2").style.visibility = "visible";
                    document.getElementById("divDragP2").remove();
                    _arrayPiecesRight[1] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP2").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP2").dataset.x = 0;
                    document.getElementById("divDragP2").dataset.y = 0;
                    document.getElementById("divDragP2").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP2").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP2").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP2").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P3 ---//
    interact(divDragP3).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP3").style.width = _arrayAreaPWidth[2] + "px";
                document.getElementById("divDragP3").style.height = _arrayAreaPHeight[2] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP3") , ("divAreaP3") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP3").appendChild( document.getElementById("divP3") );
                    document.getElementById("divP3").style.visibility = "visible";
                    document.getElementById("divDragP3").remove();
                    _arrayPiecesRight[2] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP3").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP3").dataset.x = 0;
                    document.getElementById("divDragP3").dataset.y = 0;
                    document.getElementById("divDragP3").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP3").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP3").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP3").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P4 ---//
    interact(divDragP4).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP4").style.width = _arrayAreaPWidth[3] + "px";
                document.getElementById("divDragP4").style.height = _arrayAreaPHeight[3] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP4") , ("divAreaP4") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP4").appendChild( document.getElementById("divP4") );
                    document.getElementById("divP4").style.visibility = "visible";
                    document.getElementById("divDragP4").remove();
                    _arrayPiecesRight[3] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP4").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP4").dataset.x = 0;
                    document.getElementById("divDragP4").dataset.y = 0;
                    document.getElementById("divDragP4").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP4").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP4").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP4").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P5 ---//
    interact(divDragP5).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP5").style.width = _arrayAreaPWidth[4] + "px";
                document.getElementById("divDragP5").style.height = _arrayAreaPHeight[4] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP5") , ("divAreaP5") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP5").appendChild( document.getElementById("divP5") );
                    document.getElementById("divP5").style.visibility = "visible";
                    document.getElementById("divDragP5").remove();
                    _arrayPiecesRight[4] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP5").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP5").dataset.x = 0;
                    document.getElementById("divDragP5").dataset.y = 0;
                    document.getElementById("divDragP5").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP5").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP5").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP5").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P6 ---//
    interact(divDragP6).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP6").style.width = _arrayAreaPWidth[5] + "px";
                document.getElementById("divDragP6").style.height = _arrayAreaPHeight[5] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP6") , ("divAreaP6") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP6").appendChild( document.getElementById("divP6") );
                    document.getElementById("divP6").style.visibility = "visible";
                    document.getElementById("divDragP6").remove();
                    _arrayPiecesRight[5] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP6").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP6").dataset.x = 0;
                    document.getElementById("divDragP6").dataset.y = 0;
                    document.getElementById("divDragP6").style.left = _arrayPLeft[5] + "px";
                    document.getElementById("divDragP6").style.top = _arrayPTop[5] + "px";
                    document.getElementById("divDragP6").style.width = _arrayPWidth[5] + "px";
                    document.getElementById("divDragP6").style.height = _arrayPHeight[5] + "px";
                } //else
            }
        }
    });

    //-------------------------------------------------------------------------//
    //
    // PICES 7 - 12
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P7 ---//
    interact(divDragP7).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP7").style.width = _arrayAreaPWidth[6] + "px";
                document.getElementById("divDragP7").style.height = _arrayAreaPHeight[6] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP7") , ("divAreaP7") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP7").appendChild( document.getElementById("divP7") );
                    document.getElementById("divP7").style.visibility = "visible";
                    document.getElementById("divDragP7").remove();
                    _arrayPiecesRight[6] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP7").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP7").dataset.x = 0;
                    document.getElementById("divDragP7").dataset.y = 0;
                    document.getElementById("divDragP7").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP7").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP7").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP7").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P8 ---//
    interact(divDragP8).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP8").style.width = _arrayAreaPWidth[7] + "px";
                document.getElementById("divDragP8").style.height = _arrayAreaPHeight[7] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP8") , ("divAreaP8") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP8").appendChild( document.getElementById("divP8") );
                    document.getElementById("divP8").style.visibility = "visible";
                    document.getElementById("divDragP8").remove();
                    _arrayPiecesRight[7] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP8").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP8").dataset.x = 0;
                    document.getElementById("divDragP8").dataset.y = 0;
                    document.getElementById("divDragP8").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP8").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP8").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP8").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P9 ---//
    interact(divDragP9).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP9").style.width = _arrayAreaPWidth[8] + "px";
                document.getElementById("divDragP9").style.height = _arrayAreaPHeight[8] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP9") , ("divAreaP9") )){ 
                    console.log("SI COLICIONA");
                    document.getElementById("divAreaP9").appendChild( document.getElementById("divP9") );
                    document.getElementById("divP9").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP9").remove();
                    _arrayPiecesRight[8] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    console.log("NO COLICIONA");
                    document.getElementById("divDragP9").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP9").dataset.x = 0;
                    document.getElementById("divDragP9").dataset.y = 0;
                    document.getElementById("divDragP9").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP9").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP9").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP9").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P10 ---//
    interact(divDragP10).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP10").style.width = _arrayAreaPWidth[9] + "px";
                document.getElementById("divDragP10").style.height = _arrayAreaPHeight[9] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP10") , ("divAreaP10") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP10").appendChild( document.getElementById("divP10") );
                    document.getElementById("divP10").style.visibility = "visible";
                    document.getElementById("divDragP10").remove();
                    _arrayPiecesRight[9] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP10").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP10").dataset.x = 0;
                    document.getElementById("divDragP10").dataset.y = 0;
                    document.getElementById("divDragP10").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP10").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP10").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP10").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P11 ---//
    interact(divDragP11).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP11").style.width = _arrayAreaPWidth[10] + "px";
                document.getElementById("divDragP11").style.height = _arrayAreaPHeight[10] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP11") , ("divAreaP11") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP11").appendChild( document.getElementById("divP11") );
                    document.getElementById("divP11").style.visibility = "visible";
                    document.getElementById("divDragP11").remove();
                    _arrayPiecesRight[10] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP11").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP11").dataset.x = 0;
                    document.getElementById("divDragP11").dataset.y = 0;
                    document.getElementById("divDragP11").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP11").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP11").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP11").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P12 ---//
    interact(divDragP12).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP12").style.width = _arrayAreaPWidth[11] + "px";
                document.getElementById("divDragP12").style.height = _arrayAreaPHeight[11] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP12") , ("divAreaP12") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP12").appendChild( document.getElementById("divP12") );
                    document.getElementById("divP12").style.visibility = "visible";
                    document.getElementById("divDragP12").remove();
                    _arrayPiecesRight[11] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP12").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP12").dataset.x = 0;
                    document.getElementById("divDragP12").dataset.y = 0;
                    document.getElementById("divDragP12").style.left = _arrayPLeft[5] + "px";
                    document.getElementById("divDragP12").style.top = _arrayPTop[5] + "px";
                    document.getElementById("divDragP12").style.width = _arrayPWidth[5] + "px";
                    document.getElementById("divDragP12").style.height = _arrayPHeight[5] + "px";
                } //else
            }
        }
    });

    //-------------------------------------------------------------------------//
    //
    // PICES 13 - 18
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P13 ---//
    interact(divDragP13).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP13").style.width = _arrayAreaPWidth[12] + "px";
                document.getElementById("divDragP13").style.height = _arrayAreaPHeight[12] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP13") , ("divAreaP13") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP13").appendChild( document.getElementById("divP13") );
                    document.getElementById("divP13").style.visibility = "visible";
                    document.getElementById("divDragP13").remove();
                    _arrayPiecesRight[12] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP13").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP13").dataset.x = 0;
                    document.getElementById("divDragP13").dataset.y = 0;
                    document.getElementById("divDragP13").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP13").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP13").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP13").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P14 ---//
    interact(divDragP14).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP14").style.width = _arrayAreaPWidth[13] + "px";
                document.getElementById("divDragP14").style.height = _arrayAreaPHeight[13] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP14") , ("divAreaP14") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP14").appendChild( document.getElementById("divP14") );
                    document.getElementById("divP14").style.visibility = "visible";
                    document.getElementById("divDragP14").remove();
                    _arrayPiecesRight[13] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP14").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP14").dataset.x = 0;
                    document.getElementById("divDragP14").dataset.y = 0;
                    document.getElementById("divDragP14").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP14").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP14").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP14").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P15 ---//
    interact(divDragP15).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP15").style.width = _arrayAreaPWidth[14] + "px";
                document.getElementById("divDragP15").style.height = _arrayAreaPHeight[14] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP15") , ("divAreaP15") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP15").appendChild( document.getElementById("divP15") );
                    document.getElementById("divP15").style.visibility = "visible";
                    document.getElementById("divDragP15").remove();
                    _arrayPiecesRight[14] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP15").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP15").dataset.x = 0;
                    document.getElementById("divDragP15").dataset.y = 0;
                    document.getElementById("divDragP15").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP15").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP15").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP15").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P16 ---//
    interact(divDragP16).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP16").style.width = _arrayAreaPWidth[15] + "px";
                document.getElementById("divDragP16").style.height = _arrayAreaPHeight[15] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP16") , ("divAreaP16") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP16").appendChild( document.getElementById("divP16") );
                    document.getElementById("divP16").style.visibility = "visible";
                    document.getElementById("divDragP16").remove();
                    _arrayPiecesRight[15] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP16").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP16").dataset.x = 0;
                    document.getElementById("divDragP16").dataset.y = 0;
                    document.getElementById("divDragP16").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP16").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP16").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP16").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P17 ---//
    interact(divDragP17).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP17").style.width = _arrayAreaPWidth[16] + "px";
                document.getElementById("divDragP17").style.height = _arrayAreaPHeight[16] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP17") , ("divAreaP17") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP17").appendChild( document.getElementById("divP17") );
                    document.getElementById("divP17").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP17").remove();
                    _arrayPiecesRight[16] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP17").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP17").dataset.x = 0;
                    document.getElementById("divDragP17").dataset.y = 0;
                    document.getElementById("divDragP17").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP17").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP17").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP17").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P18 ---//
    interact(divDragP18).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP18").style.width = _arrayAreaPWidth[17] + "px";
                document.getElementById("divDragP18").style.height = _arrayAreaPHeight[17] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP18") , ("divAreaP18") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP18").appendChild( document.getElementById("divP18") );
                    document.getElementById("divP18").style.visibility = "visible";
                    document.getElementById("divDragP18").remove();
                    _arrayPiecesRight[17] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP18").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP18").dataset.x = 0;
                    document.getElementById("divDragP18").dataset.y = 0;
                    document.getElementById("divDragP18").style.left = _arrayPLeft[5] + "px";
                    document.getElementById("divDragP18").style.top = _arrayPTop[5] + "px";
                    document.getElementById("divDragP18").style.width = _arrayPWidth[5] + "px";
                    document.getElementById("divDragP18").style.height = _arrayPHeight[5] + "px";
                } //else
            }
        }
    });

    //-------------------------------------------------------------------------//
    //
    // PICES 18 - 21
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P19 ---//
    interact(divDragP19).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP19").style.width = _arrayAreaPWidth[18] + "px";
                document.getElementById("divDragP19").style.height = _arrayAreaPHeight[18] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP19") , ("divAreaP19") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP19").appendChild( document.getElementById("divP19") );
                    document.getElementById("divP19").style.visibility = "visible";
                    document.getElementById("divDragP19").remove();
                    _arrayPiecesRight[18] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP19").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP19").dataset.x = 0;
                    document.getElementById("divDragP19").dataset.y = 0;
                    document.getElementById("divDragP19").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP19").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP19").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP19").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P20 ---//
    interact(divDragP20).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP20").style.width = _arrayAreaPWidth[19] + "px";
                document.getElementById("divDragP20").style.height = _arrayAreaPHeight[19] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP20") , ("divAreaP20") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP20").appendChild( document.getElementById("divP20") );
                    document.getElementById("divP20").style.visibility = "visible";
                    document.getElementById("divDragP20").remove();
                    _arrayPiecesRight[19] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP20").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP20").dataset.x = 0;
                    document.getElementById("divDragP20").dataset.y = 0;
                    document.getElementById("divDragP20").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP20").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP20").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP20").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P21 ---//
    interact(divDragP21).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP21").style.width = _arrayAreaPWidth[20] + "px";
                document.getElementById("divDragP21").style.height = _arrayAreaPHeight[20] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP21") , ("divAreaP21") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP21").appendChild( document.getElementById("divP21") );
                    document.getElementById("divP21").style.visibility = "visible";
                    document.getElementById("divDragP21").remove();
                    _arrayPiecesRight[20] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP21").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP21").dataset.x = 0;
                    document.getElementById("divDragP21").dataset.y = 0;
                    document.getElementById("divDragP21").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP21").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP21").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP21").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });
}

/******************************************************************************************************************************/

function setUpDragDesktop(){
    //-------------------------------------------------------------------------//
    //
    // PICES 1 - 8
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P1 ---//
    interact(divDragP1).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP1").style.width = _arrayAreaPWidth[0] + "px";
                document.getElementById("divDragP1").style.height = _arrayAreaPHeight[0] + "px";
                document.getElementById("divDragP1").style.left = ((_arrayAreaPWidth[0])/2) + "px";
                //document.getElementById("divDragP").style.top = ((_arrayAreaPHeight[0])/2) + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP1") , ("divAreaP1") )){ 
                    console.log("SI COLICIONA");
                    document.getElementById("divAreaP1").appendChild( document.getElementById("divP1") );
                    document.getElementById("divP1").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP1").remove();
                    _arrayPiecesRight[0] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    console.log("NO COLICIONA");
                    document.getElementById("divDragP1").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP1").dataset.x = 0;
                    document.getElementById("divDragP1").dataset.y = 0;
                    document.getElementById("divDragP1").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP1").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP1").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP1").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P2 ---//
    interact(divDragP2).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP2").style.width = _arrayAreaPWidth[1] + "px";
                document.getElementById("divDragP2").style.height = _arrayAreaPHeight[1] + "px";
                //document.getElementById("divDragP2").style.left = ((_arrayAreaPWidth[1])/2) + "px";
                //document.getElementById("divDragP").style.top = ((_arrayAreaPHeight[1])/2) + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP2") , ("divAreaP2") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP2").appendChild( document.getElementById("divP2") );
                    document.getElementById("divP2").style.visibility = "visible";
                    document.getElementById("divDragP2").remove();
                    _arrayPiecesRight[1] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP2").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP2").dataset.x = 0;
                    document.getElementById("divDragP2").dataset.y = 0;
                    document.getElementById("divDragP2").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP2").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP2").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP2").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P3 ---//
    interact(divDragP3).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP3").style.width = _arrayAreaPWidth[2] + "px";
                document.getElementById("divDragP3").style.height = _arrayAreaPHeight[2] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP3") , ("divAreaP3") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP3").appendChild( document.getElementById("divP3") );
                    document.getElementById("divP3").style.visibility = "visible";
                    document.getElementById("divDragP3").remove();
                    _arrayPiecesRight[2] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP3").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP3").dataset.x = 0;
                    document.getElementById("divDragP3").dataset.y = 0;
                    document.getElementById("divDragP3").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP3").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP3").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP3").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P4 ---//
    interact(divDragP4).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP4").style.width = _arrayAreaPWidth[3] + "px";
                document.getElementById("divDragP4").style.height = _arrayAreaPHeight[3] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP4") , ("divAreaP4") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP4").appendChild( document.getElementById("divP4") );
                    document.getElementById("divP4").style.visibility = "visible";
                    document.getElementById("divDragP4").remove();
                    _arrayPiecesRight[3] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP4").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP4").dataset.x = 0;
                    document.getElementById("divDragP4").dataset.y = 0;
                    document.getElementById("divDragP4").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP4").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP4").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP4").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P5 ---//
    interact(divDragP5).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP5").style.width = _arrayAreaPWidth[4] + "px";
                document.getElementById("divDragP5").style.height = _arrayAreaPHeight[4] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP5") , ("divAreaP5") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP5").appendChild( document.getElementById("divP5") );
                    document.getElementById("divP5").style.visibility = "visible";
                    document.getElementById("divDragP5").remove();
                    _arrayPiecesRight[4] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP5").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP5").dataset.x = 0;
                    document.getElementById("divDragP5").dataset.y = 0;
                    document.getElementById("divDragP5").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP5").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP5").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP5").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P6 ---//
    interact(divDragP6).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP6").style.width = _arrayAreaPWidth[5] + "px";
                document.getElementById("divDragP6").style.height = _arrayAreaPHeight[5] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP6") , ("divAreaP6") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP6").appendChild( document.getElementById("divP6") );
                    document.getElementById("divP6").style.visibility = "visible";
                    document.getElementById("divDragP6").remove();
                    _arrayPiecesRight[5] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP6").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP6").dataset.x = 0;
                    document.getElementById("divDragP6").dataset.y = 0;
                    document.getElementById("divDragP6").style.left = _arrayPLeft[5] + "px";
                    document.getElementById("divDragP6").style.top = _arrayPTop[5] + "px";
                    document.getElementById("divDragP6").style.width = _arrayPWidth[5] + "px";
                    document.getElementById("divDragP6").style.height = _arrayPHeight[5] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P7 ---//
    interact(divDragP7).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP7").style.width = _arrayAreaPWidth[6] + "px";
                document.getElementById("divDragP7").style.height = _arrayAreaPHeight[6] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP7") , ("divAreaP7") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP7").appendChild( document.getElementById("divP7") );
                    document.getElementById("divP7").style.visibility = "visible";
                    document.getElementById("divDragP7").remove();
                    _arrayPiecesRight[6] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP7").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP7").dataset.x = 0;
                    document.getElementById("divDragP7").dataset.y = 0;
                    document.getElementById("divDragP7").style.left = _arrayPLeft[6] + "px";
                    document.getElementById("divDragP7").style.top = _arrayPTop[6] + "px";
                    document.getElementById("divDragP7").style.width = _arrayPWidth[6] + "px";
                    document.getElementById("divDragP7").style.height = _arrayPHeight[6] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P8 ---//
    interact(divDragP8).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP8").style.width = _arrayAreaPWidth[7] + "px";
                document.getElementById("divDragP8").style.height = _arrayAreaPHeight[7] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP8") , ("divAreaP8") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP8").appendChild( document.getElementById("divP8") );
                    document.getElementById("divP8").style.visibility = "visible";
                    document.getElementById("divDragP8").remove();
                    _arrayPiecesRight[7] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP8").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP8").dataset.x = 0;
                    document.getElementById("divDragP8").dataset.y = 0;
                    document.getElementById("divDragP8").style.left = _arrayPLeft[7] + "px";
                    document.getElementById("divDragP8").style.top = _arrayPTop[7] + "px";
                    document.getElementById("divDragP8").style.width = _arrayPWidth[7] + "px";
                    document.getElementById("divDragP8").style.height = _arrayPHeight[7] + "px";
                } //else
            }
        }
    });

    //-------------------------------------------------------------------------//
    //
    // PICES 9 - 16
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P9 ---//
    interact(divDragP9).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP9").style.width = _arrayAreaPWidth[8] + "px";
                document.getElementById("divDragP9").style.height = _arrayAreaPHeight[8] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP9") , ("divAreaP9") )){ 
                    console.log("SI COLICIONA");
                    document.getElementById("divAreaP9").appendChild( document.getElementById("divP9") );
                    document.getElementById("divP9").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP9").remove();
                    _arrayPiecesRight[8] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    console.log("NO COLICIONA");
                    document.getElementById("divDragP9").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP9").dataset.x = 0;
                    document.getElementById("divDragP9").dataset.y = 0;
                    document.getElementById("divDragP9").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP9").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP9").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP9").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P10 ---//
    interact(divDragP10).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP10").style.width = _arrayAreaPWidth[9] + "px";
                document.getElementById("divDragP10").style.height = _arrayAreaPHeight[9] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP10") , ("divAreaP10") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP10").appendChild( document.getElementById("divP10") );
                    document.getElementById("divP10").style.visibility = "visible";
                    document.getElementById("divDragP10").remove();
                    _arrayPiecesRight[9] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP10").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP10").dataset.x = 0;
                    document.getElementById("divDragP10").dataset.y = 0;
                    document.getElementById("divDragP10").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP10").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP10").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP10").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P11 ---//
    interact(divDragP11).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP11").style.width = _arrayAreaPWidth[10] + "px";
                document.getElementById("divDragP11").style.height = _arrayAreaPHeight[10] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP11") , ("divAreaP11") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP11").appendChild( document.getElementById("divP11") );
                    document.getElementById("divP11").style.visibility = "visible";
                    document.getElementById("divDragP11").remove();
                    _arrayPiecesRight[10] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP11").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP11").dataset.x = 0;
                    document.getElementById("divDragP11").dataset.y = 0;
                    document.getElementById("divDragP11").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP11").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP11").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP11").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P12 ---//
    interact(divDragP12).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP12").style.width = _arrayAreaPWidth[11] + "px";
                document.getElementById("divDragP12").style.height = _arrayAreaPHeight[11] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP12") , ("divAreaP12") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP12").appendChild( document.getElementById("divP12") );
                    document.getElementById("divP12").style.visibility = "visible";
                    document.getElementById("divDragP12").remove();
                    _arrayPiecesRight[11] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP12").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP12").dataset.x = 0;
                    document.getElementById("divDragP12").dataset.y = 0;
                    document.getElementById("divDragP12").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP12").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP12").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP12").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P13 ---//
    interact(divDragP13).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP13").style.width = _arrayAreaPWidth[12] + "px";
                document.getElementById("divDragP13").style.height = _arrayAreaPHeight[12] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP13") , ("divAreaP13") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP13").appendChild( document.getElementById("divP13") );
                    document.getElementById("divP13").style.visibility = "visible";
                    document.getElementById("divDragP13").remove();
                    _arrayPiecesRight[12] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP13").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP13").dataset.x = 0;
                    document.getElementById("divDragP13").dataset.y = 0;
                    document.getElementById("divDragP13").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP13").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP13").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP13").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P14 ---//
    interact(divDragP14).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP14").style.width = _arrayAreaPWidth[13] + "px";
                document.getElementById("divDragP14").style.height = _arrayAreaPHeight[13] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP14") , ("divAreaP14") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP14").appendChild( document.getElementById("divP14") );
                    document.getElementById("divP14").style.visibility = "visible";
                    document.getElementById("divDragP14").remove();
                    _arrayPiecesRight[13] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP14").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP14").dataset.x = 0;
                    document.getElementById("divDragP14").dataset.y = 0;
                    document.getElementById("divDragP14").style.left = _arrayPLeft[5] + "px";
                    document.getElementById("divDragP14").style.top = _arrayPTop[5] + "px";
                    document.getElementById("divDragP14").style.width = _arrayPWidth[5] + "px";
                    document.getElementById("divDragP14").style.height = _arrayPHeight[5] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P15 ---//
    interact(divDragP15).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP15").style.width = _arrayAreaPWidth[14] + "px";
                document.getElementById("divDragP15").style.height = _arrayAreaPHeight[14] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP15") , ("divAreaP15") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP15").appendChild( document.getElementById("divP15") );
                    document.getElementById("divP15").style.visibility = "visible";
                    document.getElementById("divDragP15").remove();
                    _arrayPiecesRight[14] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP15").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP15").dataset.x = 0;
                    document.getElementById("divDragP15").dataset.y = 0;
                    document.getElementById("divDragP15").style.left = _arrayPLeft[6] + "px";
                    document.getElementById("divDragP15").style.top = _arrayPTop[6] + "px";
                    document.getElementById("divDragP15").style.width = _arrayPWidth[6] + "px";
                    document.getElementById("divDragP15").style.height = _arrayPHeight[6] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P16 ---//
    interact(divDragP16).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP16").style.width = _arrayAreaPWidth[15] + "px";
                document.getElementById("divDragP16").style.height = _arrayAreaPHeight[15] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP16") , ("divAreaP16") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP16").appendChild( document.getElementById("divP16") );
                    document.getElementById("divP16").style.visibility = "visible";
                    document.getElementById("divDragP16").remove();
                    _arrayPiecesRight[15] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP16").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP16").dataset.x = 0;
                    document.getElementById("divDragP16").dataset.y = 0;
                    document.getElementById("divDragP16").style.left = _arrayPLeft[7] + "px";
                    document.getElementById("divDragP16").style.top = _arrayPTop[7] + "px";
                    document.getElementById("divDragP16").style.width = _arrayPWidth[7] + "px";
                    document.getElementById("divDragP16").style.height = _arrayPHeight[7] + "px";
                } //else
            }
        }
    });

    //-------------------------------------------------------------------------//
    //
    // PICES 17 - 21
    //
    //-------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------ P17 ---//
    interact(divDragP17).draggable({
        listeners: {
            start (event) {
                console.log("START DRAGGING");
                document.getElementById("divDragP17").style.width = _arrayAreaPWidth[16] + "px";
                document.getElementById("divDragP17").style.height = _arrayAreaPHeight[16] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                console.log("END DRAGGING");
                if(is_colliding( ("divDragP17") , ("divAreaP17") )){ 
                    console.log("SI COLICIONA");
                    document.getElementById("divAreaP17").appendChild( document.getElementById("divP17") );
                    document.getElementById("divP17").style.visibility = "visible";
                    //document.getElementById("divP1").style.width = "100%";
                    document.getElementById("divDragP17").remove();
                    _arrayPiecesRight[16] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    console.log("NO COLICIONA");
                    document.getElementById("divDragP17").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP17").dataset.x = 0;
                    document.getElementById("divDragP17").dataset.y = 0;
                    document.getElementById("divDragP17").style.left = _arrayPLeft[0] + "px";
                    document.getElementById("divDragP17").style.top = _arrayPTop[0] + "px";
                    document.getElementById("divDragP17").style.width = _arrayPWidth[0] + "px";
                    document.getElementById("divDragP17").style.height = _arrayPHeight[0] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P18 ---//
    interact(divDragP18).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP18").style.width = _arrayAreaPWidth[17] + "px";
                document.getElementById("divDragP18").style.height = _arrayAreaPHeight[17] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP18") , ("divAreaP18") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP18").appendChild( document.getElementById("divP18") );
                    document.getElementById("divP18").style.visibility = "visible";
                    document.getElementById("divDragP18").remove();
                    _arrayPiecesRight[17] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP18").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP18").dataset.x = 0;
                    document.getElementById("divDragP18").dataset.y = 0;
                    document.getElementById("divDragP18").style.left = _arrayPLeft[1] + "px";
                    document.getElementById("divDragP18").style.top = _arrayPTop[1] + "px";
                    document.getElementById("divDragP18").style.width = _arrayPWidth[1] + "px";
                    document.getElementById("divDragP18").style.height = _arrayPHeight[1] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P19 ---//
    interact(divDragP19).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP19").style.width = _arrayAreaPWidth[18] + "px";
                document.getElementById("divDragP19").style.height = _arrayAreaPHeight[18] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP19") , ("divAreaP19") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP19").appendChild( document.getElementById("divP19") );
                    document.getElementById("divP19").style.visibility = "visible";
                    document.getElementById("divDragP19").remove();
                    _arrayPiecesRight[18] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP19").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP19").dataset.x = 0;
                    document.getElementById("divDragP19").dataset.y = 0;
                    document.getElementById("divDragP19").style.left = _arrayPLeft[2] + "px";
                    document.getElementById("divDragP19").style.top = _arrayPTop[2] + "px";
                    document.getElementById("divDragP19").style.width = _arrayPWidth[2] + "px";
                    document.getElementById("divDragP19").style.height = _arrayPHeight[2] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P20 ---//
    interact(divDragP20).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP20").style.width = _arrayAreaPWidth[19] + "px";
                document.getElementById("divDragP20").style.height = _arrayAreaPHeight[19] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP20") , ("divAreaP20") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP20").appendChild( document.getElementById("divP20") );
                    document.getElementById("divP20").style.visibility = "visible";
                    document.getElementById("divDragP20").remove();
                    _arrayPiecesRight[19] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP20").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP20").dataset.x = 0;
                    document.getElementById("divDragP20").dataset.y = 0;
                    document.getElementById("divDragP20").style.left = _arrayPLeft[3] + "px";
                    document.getElementById("divDragP20").style.top = _arrayPTop[3] + "px";
                    document.getElementById("divDragP20").style.width = _arrayPWidth[3] + "px";
                    document.getElementById("divDragP20").style.height = _arrayPHeight[3] + "px";
                } //else
            }
        }
    });

    //------------------------------------------------------------------------------------ P21 ---//
    interact(divDragP21).draggable({
        listeners: {
            start (event) {
                //console.log("START DRAGGING");
                document.getElementById("divDragP21").style.width = _arrayAreaPWidth[20] + "px";
                document.getElementById("divDragP21").style.height = _arrayAreaPHeight[20] + "px";
            },
            // call this function on every dragmove event
            move: dragMoveListener,
            // call this function on every dragend event
            end (event) {
                //console.log("END DRAGGING");
                if(is_colliding( ("divDragP21") , ("divAreaP21") )){ 
                    //console.log("SI COLICIONA");
                    document.getElementById("divAreaP21").appendChild( document.getElementById("divP21") );
                    document.getElementById("divP21").style.visibility = "visible";
                    document.getElementById("divDragP21").remove();
                    _arrayPiecesRight[20] = "x";
                    _picesRightPosition++;
                    checkFinishPuzzle();
                } else {
                    //console.log("NO COLICIONA");
                    document.getElementById("divDragP21").style.transform = "translate(0px, 0px)";
                    document.getElementById("divDragP21").dataset.x = 0;
                    document.getElementById("divDragP21").dataset.y = 0;
                    document.getElementById("divDragP21").style.left = _arrayPLeft[4] + "px";
                    document.getElementById("divDragP21").style.top = _arrayPTop[4] + "px";
                    document.getElementById("divDragP21").style.width = _arrayPWidth[4] + "px";
                    document.getElementById("divDragP21").style.height = _arrayPHeight[4] + "px";
                } //else
            }
        }
    });
}