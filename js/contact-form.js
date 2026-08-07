(function() {

    const submitBtn = document.querySelector('[data-js="submit"]');
    const formContact = document.querySelector('#form-contact');

    
    submitBtn.addEventListener('click', event => {
        event.preventDefault();
        const campoNome = document.querySelector('#nome');
        campoNome.classList.remove('is-invalid', 'is-valid');
        if (!campoNome.value || campoNome.value.length >= 50) {
            campoNome.classList.add('is-invalid');
        }
        else {
            campoNome.classList.add('is-valid');
            // formContact.submit();
            enviarFormulario(campoNome.value);
        }
    });

    const campoCep = document.querySelector('#cep');
    const campoLogradouro = document.querySelector('#logradouro');

    campoCep.addEventListener('keyup', async event => {
        let contagem = event.target.value.length;
        if (contagem === 8) {
            const dados = await getApiCep(event.target.value);
            campoLogradouro.value = dados.logradouro;
            campoLogradouro.setAttribute('disabled', true)
        }
    })

    async function getApiCep(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const result = await response.json();
            return result;
        } catch (erro) {
           console.error('Erro ao buscar o cep');
        }
    }


    /* Ajax */
    function enviarFormulario(nome) {
        const aviso = document.querySelector('[data-js="aviso"]');
        aviso.innerHTML = 'Aguarde estamos processando ...'
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3001/form-contato');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 ) {
                const mensagem =  JSON.parse(xhr.responseText);
                
                aviso.style.display = 'block'
                aviso.innerHTML = mensagem.aviso;
                console.log('Resposta: ', mensagem);
            }
        }
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify({nome: nome}));
    }

})()