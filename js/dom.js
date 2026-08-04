// console.dir(document)

// document.bgColor = "red"
// document.images[0].src = '../images/team-photo.png';
const imagem = document.querySelector("[data-js=imagem]");
const logo = document.querySelector("[data-js=logo]");
// imagem.classList.add("celso")


imagem.addEventListener('click', event => {
    console.dir(event)
    event.target.classList.toggle('ativa');
    // event.target.style.border = "#5202ff 2px solid"
})

// imagem.addEventListener('mouseout', event => {
//     event.target.classList.remove('borda')
// })

// let num = '32px';
// console.log(parseInt(num))

logo.addEventListener('click', event => {
 const fontSize = parseInt(window.getComputedStyle(logo).getPropertyValue('font-size'));
 logo.style.fontSize = `${fontSize + 1}px`;
})

// debugger;
// const linkItens = document.querySelectorAll('.link-item');

// let i = 0;
// while(i <= 2) {
//     linkItens[i].style.borderBottom = "solid 1px #000";

//     if (i == 1) {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// for(let i = 0; i <= 2; i++) {

//     imprimirMensagem();
//     if (i === 0) {
//         continue;
//     }
//     linkItens[i].style.borderBottom = "solid 1px #000";
//     console.log('interator: ', i)
// }


function imprimirMensagem() {
    console.log('------------------')
}



// linkItens[0].style.borderBottom = "solid 1px #000";
// linkItens[1].style.borderBottom = "solid 1px #000";
// linkItens[2].style.borderBottom = "solid 1px #000";

// console.log(linkItens);

// let Pessoa = [20, 52, 87, 11, 50]

// Pessoa.forEach(function(value, index) {
//     console.log(value, index);
// })

// find
// filter
// maper

// let busca = Pessoa.find(function(value) {
//     return value == 10
// })

// console.dir(busca);


let Pessoa2 = {
    nome: 'celso'
}

let Produto = function(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.pegarNomeProduto = function() {
    return this.nome;
}

Produto.prototype.pegarPreco = function() {
    return this.preco;
}

let carrinhoCompra = function(nomeCliente){
    this.nome = nomeCliente;
    this.compras = [];
    this.total = 0;
}

carrinhoCompra.prototype.somaCompra = function() {
    this.compras.forEach(function(value) {
        let valor = value.pegarPreco() 
        this.total += Number(valor);
    });
}

carrinhoCompra.prototype.add = function(compra) {
    this.compras.push(compra)
}

let carrinho = new carrinhoCompra('Celso')
carrinho.add(new Produto('arroz', '20.00'));
carrinho.add(new Produto('Batata', '5.00'));
carrinho.add(new Produto('Oleo', '4.00'));
carrinho.somaCompra()

console.log(carrinho);
