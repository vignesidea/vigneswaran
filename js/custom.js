

  $(function(){
    
    $(window).scroll(function(){
      if($(window).scrollTop() <=50){
        $("img:first").removeClass('animate__animated animate__bounce');
     

      }else{
        $("img:first").addClass('animate__animated animate__bounce');
       
      }
    });
  });


  var typed = new Typed('#typed', {
    strings: ["I'm Vigneswaran R", "I'm A WebDeveloper"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
  });
  $(function(){
       var navbar = $('.header-inner');
       $(window).scroll(function(){
         if($(window).scrollTop() <=40){
           navbar.removeClass('navbar-scroll');
         }else{
           navbar.addClass('navbar-scroll');
         }
       });
     });