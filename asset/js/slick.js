$(document).ready(function(){
    $('.banner-home-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true

    });
});



// $('.slick-du-an').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

//   $('.slick-du-an').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll:1
//   });
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
//     centeredSlides:true,
//     centeredSlidesBounds:true,
  
//     // If we need pagination
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//   });

  var swiper = 
  new Swiper('.swiper',{
    slidesPerView: '2',
    spaceBetween: 60,
    autoplay: false,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    // slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            spaceBetween: 0,
            slidesPerView: '1.5',

        },
        768:{
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        691:{
            spaceBetween:false,
            slidesPerView: '1.5',
            navigation:false,

        },
        621:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        558:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        502:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        451:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        405:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        364:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },
        327:{
            navigation:false,
            spaceBetween:0,
            slidesPerView: '1.5',
        },

        
  }
}
 );