(function(){
    "use strict"
    const parseJson = JSON.parse('{"nome":"celso","endereco":["Rua das flores","rua alcantara de machado"]}')
    const convertToJson = JSON.stringify(parseJson)
    // console.log(convertToJson)


    localStorage.setItem('dadosUsuario1', convertToJson);
    sessionStorage.setItem('dadosUsuario2', convertToJson);


    const dados = sessionStorage.getItem('dadosUsuario2');

    console.log(JSON.parse(dados))

})()