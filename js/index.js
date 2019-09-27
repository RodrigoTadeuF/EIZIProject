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

function mascaraDeTelefone(telefone){
  const textoAtual = telefone.value; 
  const isCelular = textoAtual.length===9; 

  let textoAjustado; 

  if(isCelular){
    const parte1 = textoAtual.slice(0,5);
    const parte2 = textoAtual.slice(5,9);
    textoAjustado = `${parte1}-${parte2}`
  }else{
    const parte1 = textoAtual.slice(0,4);
    const parte2 = textoAtual.slice(4,8);
    textoAjustado = `${parte1}-${parte2}`
  }

  telefone.value = textoAjustado;

}

function tirarHifen(telefone){
  const textoAtual = telefone.value;
  const textoAjustado = textoAtual.replace(/\-/g, '');

  telefone.value = textoAjustado;
}

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
