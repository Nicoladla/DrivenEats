let refeição1;
let valorPrato;
function prato(item, comida, preço){
    refeição1= comida;
    valorPrato= preço;
    let verificaçaoP= document.querySelector(".prato .selecionado"); 

    if(verificaçaoP !== null){
        verificaçaoP.classList.remove('selecionado');
    }
    item.classList.add('selecionado');
}

let refeição2;
let valorbebida;
function bebida(item, comida, preço){
    refeição2= comida;
    valorbebida= preço;
    let verificaçaoB= document.querySelector(".bebida .selecionado");

    if(verificaçaoB !== null){
        verificaçaoB.classList.remove('selecionado');
    }

    item.classList.add('selecionado');
}

let refeição3;
let valorsobremesa;
function sobremesa(item, comida, preço){
    refeição3= comida;
    valorsobremesa= preço;
    let verificaçaoS= document.querySelector(".sobremesa .selecionado");

    if(verificaçaoS !== null){
        verificaçaoS.classList.remove('selecionado');
    }

    item.classList.add('selecionado');
}

function analize(){
    let verificaçaoP= document.querySelector(".prato .selecionado");
    let verificaçaoB= document.querySelector(".bebida .selecionado");
    let verificaçaoS= document.querySelector(".sobremesa .selecionado");

    let valorPedido= valorPrato+valorbebida+valorsobremesa
    let pedido= `Olá, gostaria de fazer o pedido:
    - Prato: ${refeição1}
    - Bebida: ${refeição2}
    - Sobremesa: ${refeição3}
    Total: R$ ${valorPedido.toFixed(2)}`
    let pedidoCod= encodeURIComponent(pedido)

    let finalizarPedido= document.querySelector('.finalizar-pedido');

    if(verificaçaoP !== null && verificaçaoB !== null && verificaçaoS !== null){
        finalizarPedido.innerHTML= `<a href='https://wa.me/5587999322624?text=${pedidoCod}'>Fechar pedido</a>`;
    }
    
}