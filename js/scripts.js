$(function() { //Función que carga JQuery
  'use strict';

  //$('main article:first').remove(); // Elimina del DOM.
  //$('main article:first').hide(); // Oculta

    $('main article:last').clone();
    //$('main').append(copia);  // Lo coloca antes de la copia
    //$('main').prepend(copia); // Lo coloca al inicio

    var copia = $('main article:last').clone();
    $(copia).appendTo('main');

});