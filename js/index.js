$(document).ready(() => {
  $('.slick--autoplay').slick({
      // slidesToShow: 3,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
      draggable: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 260,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px'
          }
        }       
      ]
  })
})

// $('.slick--slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     draggable: true,
//     asNavFor: '.slider-nav'
//   })
  
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
