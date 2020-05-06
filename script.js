$(function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},500);
  });

  //Slider-jQuery -- Info(Slider)
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
  });

 });
