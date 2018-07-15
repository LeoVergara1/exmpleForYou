
//import {Typed} from './typed/typed';
//const myModule = require('./mymodule');
//include("js/second_file.js");

let MainController = (function(){
  var selectors = {
      datepicker:'#datepicker',
      datepicker1:'#datepicker1'
 },
 bindEvents = function bindEvents(){
      console.log("Satrt bindEvents");

 };

 var typed = function(){
   console.log("Typed..");
    $(".otro").typed({
        strings: ["^1000 This is a <strong>Test</strong> <br>and another line.", "Segundo texto de prueba"],
        typeSpeed: 50,
        loop: false,
        contentType: 'html'
    });
   $(".puntos").typed({
    strings: ["..."],
    showCursor: false,
    typeSpeed: 300,
    backSpeed: 300,
    loop: true,
    contentType: 'html'
    });
    $(".otro").typed({
      strings: ["LOS DÍAS SIGNIFICATIVOS",
       "NO SON EN UNA FECHA ESPECIAL",
        "PERO SIRVEN PARA REPRESENTAR ",
         "EL INICIO DE UNA HISTORIA INCREÍBLE.", 
         "LAS RISAS, BURLAS, JUEGOS",
       "Y PELEAS HACEN QUE CADA VEZ",
      "ESTO CREZCA Y SEA UNA AVENTURA",
       "QUE NO QUIERO QUE ACABE JAMÁS.", 
       "LA DISTANCIA, EN ESTA OCASIÓN",
        "NO ESTÁ DE NUESTRA PARTE,",
      "PERO HA SERVIDO PARA DARME ",
      "CUENTA DE LO GRANDE QUE ERES", 
      "Y DESCUBRIR CUANTO TE QUIERO EN REALIDAD."
      ],
      typeSpeed: 130,
      loop: false,
      contentType: 'html'

  });
  $(".final").typed({
    strings: ["¡TE ESTARÉ ESPERANDO CON ANSIAS!"],
    startDelay: 90000,
    showCursor: false,
    typeSpeed: 200,
    loop: false,
    contentType: 'html'
    });

 };
 var start = function(){
 console.log("Start controller js");
 bindEvents();
 typed();

 };
 return{
      start:start
 }

}());
jQuery(function($){
MainController.start();
});
