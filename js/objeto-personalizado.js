const Pessoa = {
    nome: "Amanda",
    idade: 52,
    salario: 5000.00,
    historico_viagens: {
        viagem1: 'US',
        viagem2: 'EUR',
    },
    imprimir: function(){
        console.log(`nome: ${this.nome} - idade ${this.idade} - salario ${this.ajusteSalarial()}`)
    },
    ajusteSalarial: function() {
        return this.salario + this.salario * 0.2;
    }
};

Pessoa.endereco = 'Rua da flores, 25';
Pessoa.pegarSalario = function () {
    return this.salario;
}
Pessoa.salario = 8000
delete Pessoa.idade
console.log(Pessoa);