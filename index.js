var x = 'black';
$(document).ready(function(){
  $('#red').on('click', function(){
    x = 'red';
    $('.pix: hover').css("background-color",x);
  });
  $('#blue').on('click', function(){
    x = 'blue';
    $('.pix: hover').css("background-color",x);
  });
  $('#green').on('click', function(){
    x = 'green';
    $('.pix: hover').css("background-color",x);
  });
  $('#yellow').on('click', function(){
    x = 'yellow';
    $('.pix: hover').css("background-color",x);
  });
  $('#black').on('click', function(){
    x = 'black';
    $('.pix: hover').css("background-color",x);
  });
  $('#eraser').on('click', function(){
    x = 'white';
    $('.pix: hover').css("background-color",x);
  });
  $('.pix').on('click', function(){
    $(this).css("background-color",x);
  });

});
