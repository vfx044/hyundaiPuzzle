let _token = "";
let _email = "";

//----------------------------------------------------------//
//
// GET URL VARS
//
//----------------------------------------------------------//

function getUrlVars(){

    const __queryString = window.location.search;
    const urlParams = new URLSearchParams(__queryString);

    _token = urlParams.get('token');
    _email = urlParams.get('email');

    console.log("TOKEN:", _token);
    console.log("EMAIL:", _email);

}

//----------------------------------------------------------//
//
// SEND VARS TO LECONA
//
//----------------------------------------------------------//

function sendDataToPhp(__base64, __name){

    console.log("SEND DATA TO LECONA");

    console.log(_token);
    console.log(_email);
    console.log(_time);
    console.log(_timeStamp);

    //DELETE FOR RELEASE
    goToThanksPage();

    /*
    $.ajax({
        type:  'POST',
        cache: false,
        url:   'php/saveimages.php',
        data:  { 
                token: _token,
                email: _email,
                time: _time,
                timestamp: _timeStamp
                },
        dataType: 'json',
        success: function (json) {
            //do whatever.
            if(json.error == 1) {
                //console.log(json.message);
            } else {
                //console.log("SE GUARDO LA IMAGE: " + json);
                goToThanksPage();
            } //else
        },
        error: function(jqXHR, exception) {
            //console.log("ERROR");
        }
    })
    .done (function(data, textStatus, jqXHR) {
        //console.log("Success: " + textStatus);
    })
    .fail (function(jqXHR, textStatus, errorThrown) {
        //console.log("Error: ", textStatus);
    })
    .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
        //console.log("complete");
    });
    */

}

function goToThanksPage(){

    setTimeout(function(){ 
        window.open("thankyou.html?token=" + _token + "&email=" + _email + "&time=" + _time, "_self"); 
    }, 2000);

}