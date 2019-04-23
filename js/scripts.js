$(function() { //Función que carga JQuery
  'use strict';

  //$('main article:first').remove(); // Elimina del DOM.
  //$('main article:first').hide(); // Oculta
/*
    $('main article:last').clone();
    //$('main').append(copia);  // Lo coloca antes de la copia
    //$('main').prepend(copia); // Lo coloca al inicio

    var copia = $('main article:last').clone();
    $(copia).appendTo('main');
*/

/* Mostrar u Ocultar contenido */

/*$('div.logo img').on('click', function(){ //Eventos
  console.log("Has echo click.");
});*/

/* $('div.logo img').on('click', function(){
  $(this).remove();
}); */

/* $('div.logo img').on('mouseenter', function () {
  console.log("Sobre el logo");
});
$('div.logo img').on('mouseleave', function () {
  console.log("Fuera del logo")
}); */


$('#menu').on('click', function(){
  $('#navegacion').show();
});


});