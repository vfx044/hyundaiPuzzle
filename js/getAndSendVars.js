let order_id = "";
let customer_email = "";
let estatus = "";

//----------------------------------------------------------//
//
// GET URL VARS
//
//----------------------------------------------------------//

function getUrlVars(){

    const __queryString = window.location.search;
    const urlParams = new URLSearchParams(__queryString);

    order_id = urlParams.get('order_id');
    customer_email = urlParams.get('customer_email');
    estatus = urlParams.get('estatus');

    //console.log("ORDE_ID:", order_id);
    //console.log("CUSTOMER_EMAIL:", customer_email);
    //console.log("ESTATUS:", estatus);

    checkOrdeIDAPI();

}

//----------------------------------------------------------//
//
// GET URL VARS
//
//----------------------------------------------------------//

function checkOrdeIDAPI(){

    //603031b6713042f70e9474c

    console.log("-------- CHECK ORDER ID --------");

    var __urlAPi = "https://juegotucson.hyundai.com.mx/order-id-exists/order_id=" + order_id ;
    //var __urlAPi = "https://juegotucson.hyundai.com.mx/order-id-exists/order_id=NTY0ODQ3NTk4MDA=";
    
    $.get( __urlAPi, function(response) {
            console.log( "success", response.data );
            showHideMessageID(response.data);
        })
        .done(function() {
            console.log( "done" );
        })
        .fail(function() {
            console.log( "error" );
        });
    
}

function showHideMessageID(__dataFromAPI){

    console.log(__dataFromAPI);

    if(__dataFromAPI){
        console.log("HIDE MESSAGE FROM CHECK ID ^_^");
    } else {
        console.log("SHOW MESSAGE FROM CHECK ID X_x You cannot play again");
    } //else

}

//----------------------------------------------------------//
//
// SEND VARS TO LECONA
//
//----------------------------------------------------------//

function sendDataToPhp(__base64, __name){

    console.log("SEND DATA TO SERVER");
    /*
    console.log(order_id);
    console.log(customer_email);
    console.log(estatus);
    console.log(btoa(_time));
    console.log(btoa(_timeStamp));
    */
    
    /*
    //DELETE FOR RELEASE
    goToThanksPage();
    */

    
    $(document).ready(function(){
        $.get( "https://juegotucson.hyundai.com.mx/storeVars", {
            order_id: order_id,
            customer_email: customer_email,
            estatus: estatus,
            time: btoa(_time),
            timestamp: btoa(_timeStamp)
        })
        .done(function( data ) {
            console.log( "Data Loaded: " + data );
            goToThanksPage();
        })
        .fail (function(jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus);
        });
    });
    
    

}

function goToThanksPage(){
    
    setTimeout(function(){ 
        window.open("thankyou.html?&time=" + _time, "_self"); 
    }, 2000);
    
}