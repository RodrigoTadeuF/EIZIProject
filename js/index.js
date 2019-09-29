$(document).ready(() => {
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  centerMode: true,
  });
});

$(document).ready(() => {
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  prevArrow: '',
  nextArrow: '',
  focusOnSelect: true,
  variableWidth: true,
  });
});

$(document).ready(() => {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '',
    nextArrow: '',
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

let botao = document.getElementById('btnClean'); 

botao.addEventListener("click", function(){

  event.preventDefault(); 
 
  document.getElementById('nome-form').value = '' ; 
  document.getElementById('sobrenome-form').value = '' ; 
  document.getElementById('telefone-form').value = '' ; 
  document.getElementById('email-form').value = '' ; 
  document.getElementById('endereco-form').value = '' ; 
  document.getElementById('mensagem-duvidas').value = '' ; 
  


}); 


let botaoEnviar = document.getElementById('button-send'); 

botaoEnviar.addEventListener('click', function(){
  let nome =  document.getElementById('nome-form').value; 
  let sobrenome =  document.getElementById('sobrenome-form').value; 
  let email =  document.getElementById('email-form').value; 
  let telefone =  document.getElementById('telefone-form').value; 
  let endereco =  document.getElementById('endereco-form').value; 
  let duvidas =  document.getElementById('mensagem-duvidas').value; 
  
  if(nome == '' || sobrenome =='' || email == '' || telefone == '' || endereco == '' || duvidas == '' ){
    alert("Favor preencher os campos"); 
  }

}); 

function validarCampos (){
 
}

const items = document.querySelectorAll('[wm-dropzone] .item')
items.forEach((item, index) => {
  item.draggable = true  
  item.id = item.id || `draggable-item-${index}`
  item.ondragstart = e =>
  e.dataTransfer.setData('item-id', e.target.id)
})

const dropzones = document.querySelectorAll('[wm-dropzone]')
dropzones.forEach(dropzone => {
	dropzone.ondragover = e => e.preventDefault()
	dropzone.ondrop = function(e) {
		const id = e.dataTransfer.getData('item-id')
		const item = document.getElementById(id)
		// e.target.appendChild(item)
		dropzone.appendChild(item)
	}
})
