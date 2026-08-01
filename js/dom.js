// console.dir(document)

// document.bgColor = "red"
// document.images[0].src = '../images/team-photo.png';
const imagem = document.querySelector("[data-js=imagem]");
// imagem.classList.add("celso")
console.dir(imagem)

imagem.addEventListener('click', event => {
    event.target.classList.add('borda')
    // event.target.style.border = "#5202ff 2px solid"
})

imagem.addEventListener('mouseout', event => {
    event.target.classList.remove('borda')
})



