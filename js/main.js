
$(document).ready(function(){
	// Inicializacion del carrusel responsive
  $('#slider-projects').owlCarousel({
		dots: false,
    loop:true,
    navText: [ '<img src="img/chevron-left.png" alt="previa">' , '<img src="img/chevron-right.png" alt="proxima">'],
    margin:0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      768:{
        items:3,
        nav:true
      }
    }
	})


$('.modal__slider').owlCarousel({
    dots: false,
    loop:true,
    navText: [ '<img src="img/chevron-left.png" alt="previa">' , '<img src="img/chevron-right.png" alt="proxima">'],
    margin:0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      }
    }
  })

 


});		

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
  $(this).find('.owl-nav').removeClass('disabled');
});



// Animacion de los labels
$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
}) 
$('textarea').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('textarea').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})   