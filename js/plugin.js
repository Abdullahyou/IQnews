$(document).ready(function () {
    $('.marquee').marquee({
      speed: 50,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'right',
      pauseOnHover: true,
    });
    $('.main-carousel').flickity({
    // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
    });

    //Search
   
      $('header .social-media li.search a').on('click',function(){
        if($('header').hasClass('fixed')) {
        $('.search-area').addClass('open');
        } else {
          $('.search-area').addClass('open');
        }
      });
      
      $('.search-area .close-search').on('click',function(){
        if($('header').hasClass('fixed')) {
          $('.search-area').removeClass('open');
        } else {
          $('.search-area').removeClass('open');
        }
      });
    

    /* -- Fixed Header -- */
    $(window).on('scroll',function(){
      if(window.pageYOffset > 300) {
        
          $('html').css({
            'margin-top' : '170px'
          })
        
        $('header').addClass('fixed');
        
      } else {
        $('header').removeClass('fixed');
        $('html').css({
          'margin-top' : '0'
        })
      }
    });
    /* -- ./Fixed Header -- */

    /* -- News Breaking -- */
	var news_number = $('.news-breaking ul').children().length,
  i = 1;
function newsSlider(){
  if ($(window).innerWidth() > 767) {
    if (i < news_number){
      $('.news-breaking ul').css({
        'transform' : 'translateY(' + i * (-25) + 'px)',
        '-webkit-transform' : 'translateY(' + i * (-25) + 'px)',
        'transition': 'all 1s ease-in-out',
        '-webkit-transition': 'all 1s ease-in-out',
      });
      i++;
    } else {
      $('.news-breaking ul').css({
        'transition': 'all 0.1s ease-in-out',
        '-webkit-transition': 'all 0.1s ease-in-out',
        'transform' : 'translateY(0)',
        '-webkit-transform' : 'translateY(0)'
      });
      i = 1;
    }
  } else {
    if (i < news_number){
      $('.news-breaking ul').css({
        'transform' : 'translateY(' + i * (-50) + 'px)',
        '-webkit-transform' : 'translateY(' + i * (-50) + 'px)',
        'transition': 'all 1s ease-in-out',
        '-webkit-transition': 'all 1s ease-in-out',
      });
      i++;
    } else {
      $('.news-breaking ul').css({
        'transition': 'all 0.1s ease-in-out',
        '-webkit-transition': 'all 0.1s ease-in-out',
        'transform' : 'translateY(0)',
        '-webkit-transform' : 'translateY(0)'
      });
      i = 1;
    }
  }
  
};
setInterval(() => {
  newsSlider();
}, 5000);
/* -- ./News Breaking -- */


})