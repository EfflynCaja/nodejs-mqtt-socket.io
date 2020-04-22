var contador=1;


$('.menu_bar').click(function () {
      if (contador == 1){
            $('nav').animate({left:'0'});
            contador=0;
      }else{
            $('nav').animate({left:'-100%'});
            contador=1;
      }
});

$('.submenu1').click(function(){
      $(this).children('.children').slideToggle();
});

$('.submenu2').click(function(){
      $(this).children('.children').slideToggle();
});
