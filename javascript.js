
// GLITCH EFFECT home page
$( function() {////when document is ready
  $( ".glitch-img" ).mgGlitch({
                      destroy : false, // set 'true' to stop the plugin
                      glitch: true, // set 'false' to stop glitching
                      scale: true, // set 'false' to stop scaling
                      blend : true, // set 'false' to stop glitch blending
                      blendModeType : 'hue', // select blend mode type
                      glitch1TimeMin : 800, // set min time for glitch 1 elem
                      glitch1TimeMax : 1500, // set max time for glitch 1 elem
                      glitch2TimeMin : 100, // set min time for glitch 2 elem
                      glitch2TimeMax : 505 // set max time for glitch 2 elem


  });
});
//MOUSEMOVE EFFECT ON LANDPAGE
  $('.glitch-img').mousemove(function(e){
    //pageX it returns the x cordinate
    var moveX = (e.pageX * -1 / 10);
    var moveY = (e.pageY * -1 / 10);
    $('.glitch-img').css('background-position', moveX + 'px ' + moveY + 'px');
  });



//
// //this is a dynamic message that is not working
// let getBody = document.body;
//
// let newElement = document.createElement("h1");
//
// //create date object
// let date = new Date();
// // get hour of our object
// let currentHour = date.getHours();
//
// let Message;
// if (currentHour >= 4 && currentHour < 10) {
//   Message = "Good morning!"
// }else if (currentHour >= 10 && currentHour < 12) {
//   Message = "Good day!";
// }else if (currentHour >= 12 && currentHour < 18) {
//   Message = "Good afternoon!";
// }else if (currentHour >= 18 && currentHour < 22) {
//   Message = "Good evening!";
// }else if (currentHour >= 22 && currentHour < 4) {
//   Message = "Good night!";
// }else {
//   Message = "what time do you have dude :n"
// }
//check for errors
//console.log(message);

//cretae text node
// let createElementText = document.createTextNode(Message);
// newElement.appendChild(Message); // element created with the text inside of it
// getBody.appendChild(newElement);


// var z = document.createElement('p'); // is a node
// z.innerHTML = 'test satu dua tiga';
// document.body.appendChild(z);





/*

// GREETING DYNAMIC Message
//let = var = ?? scope difference
//this is a dynamic message that is not working
let getBody = document.body;

// let newElement = document.createElement("h1");

//create date object
let date = new Date();
// get hour of our object
let currentHour = date.getHours();

let createTxtMsg;
if (currentHour >= 4 && currentHour < 10) {
  createTxtMsg = "Good morning!"
}else if (currentHour >= 10 && currentHour < 12) {
  createTxtMsg = "Good day!";
}else if (currentHour >= 12 && currentHour < 18) {
  createTxtMsg = "Good afternoon!";
}else if (currentHour >= 18 && currentHour < 20) {
  createTxtMsg = "Good evening!";
}else if (currentHour >= 20 && currentHour < 4) {
  createTxtMsg = "Good night!";
}else {
  createTxtMsg = "Good night!"
}

//cretae text node
let createEleTxt = document.createTextNode(createTxtMsg);
document.querySelector(".dinamic-message").appendChild(createEleTxt); // element created with the text inside of it
getBody.appendChild(newElement);
*/












////// when document is ready
// $(document).ready(function(){
// });
// $( document ).ready(function() {

//TOGGLE BUTTON FOR MOBILE MENU
  $(".toggle-icon").on("click",function() {
    $('nav ul').toggle("1000");
  });

  jQuery(document).ready(function(){
    function resizeForm(){
        var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
        if(width > 600){
          //navbar effect
              $(window).on("scroll", function(){
                //position from top
                if ($(window).scrollTop() > 282.35) {
                  // top = navbar
                  $("nav ul").css("background-color", "rgba(0,0,0,0.7)");
                } else {
                  $("nav ul").css("background-color", "transparent" );
                  }
                });
        }
    }
    window.onresize = resizeForm;
    resizeForm();
});

// });
// $(".toogle-icon").on("click", function(){
//   var navbar = $("nav ul");
//   if(event.target != navbar && event.target.parentNode != navbar)
//   { $("nav ul").toggle(1000);}
// });
// var modal = $('ul');
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         $("nav ul").toggle(1000);
//     }
// }

// GREETING DYNAMIC Message
//let = var = ?? scope difference
