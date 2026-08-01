// "use strict"
/*
    Aula de introdução ao JavaScript
    Versão ES2026
*/

 /* use strict */
// nome = "celso"
// console.log(nome)

// function teste(a, b) {
//     console.log("teste")
// }

// let interface = "test";

// function useStrictLocal() {
//     "use strict"
//     nome = "celso"
// }
// useStrictLocal()


/* let: variaves | const constant */
// const pi = 3.14;
// console.log(pi);


/* Função auto invocavel */
// (function autoInvoked(mensagem, m2) {
//     console.log(mensagem, m2)
// })('Função auto invocavel', 'teste')


// /* Hosting */
// console.log(casa)
// var casa = 'teste';

// testeHosting()
// function testeHosting() {
//     console.log("ola")
// }





/* Função de callback */
// function incremento(valor, calback, calback2) {
//     var result = calback(valor)
//     calback2(result);
// }
// incremento(
//     20, 
//     function (msn) {
//         return msn + 1;
//     },
//     function (msn) {
//         console.log(msn);
//     }
// )








// codigo para debug
// console.log("Ola mundo");

/* Tipos primitivos */
/*
    boolean
    number
    string
    undefined
    null
*/

/* Concatenação e interpolação */
// var salarioBruto = 1500.00;
// var salarioLiquido;
// var nomeFuncionario = "Amanda";
// salarioLiquido = salarioBruto + 20.00
// Olá <nomeFuncionario> seu salario de <salarioBruto> foi ajustado para <salarioLiquido>
// var mensagem = "Olá " + nomeFuncionario + " seu salario de " + salarioBruto + " foi ajustado para " + salarioLiquido;
// var mensagem2 = `Olá ${nomeFuncionario} seu salario de ${salarioBruto} foi ajustado para ${salarioLiquido}`;
// console.log(mensagem2);

/* Operadores relacionas */
/*
>
<
>=
<=
!=
!==
==
===
*/
// var salario = "4000.00"
// var resultado = salario === 4000
// console.log(resultado)

/* Estrutura de selação */

// var salario = prompt("digite seu salario")
// var novoSalario = salario;

/*
switch(salario) {
    case 1000 : 
    case 2000 :
        novoSalario = Number(salario) + 100.00;
    break;

    case 3000 :
        novoSalario = Number(salario) + 300.00;
    break;

    default:
        novoSalario = Number(salario);
}
*/
// if(salario < 1000) {
//     novoSalario = Number(salario) + 100.00
// } else if(salario < 2000) {
//     novoSalario = Number(salario) + 200.00
// } else if(salario < 3000) {
//     novoSalario = Number(salario) + 300.00
// } else {
//     novoSalario = Number(salario)
// }
// console.log(novoSalario);


/* Opereadores logicos */
// Ou -> ||
// E  -> &&
// Não -> !

// var nota = 7;
// var faltas = 40;
// aprovado = nota >= 7 e < 20 faltas
// Reprovado = nota < 7 

// if (nota >= 7 && !(faltas < 20)) {
//     console.log("Aprovado")
// }
// else {
//     console.log("Reprovado")
// }

// console.log(!false)

// var idade = 12;
// var teste;

// teste = idade < 18 ? "Não pode cadastrar" : "Cadastro Liberado";
// console.log(teste);

// var nome = "celso";
// var teste = nome ?? "nome não pode estar vazio";
// console.log(teste);

// var confirmar = confirm("Tem certeza que quer fechar");
//console.log(confirmar)
// alert("Ola mundo");

// Atividade
/*  
Atividade: Sistema de Média Escolar
Objetivo
Criar um programa que calcule a média de um aluno e informe se ele foi aprovado ou reprovado.
Media deverá ser >= 6 para aprovação

Regras
1. Pergunte o nome do aluno

Exemplo:
    Digite o nome do aluno:

2. Pergunte as três notas
    Digite a primeira nota:
    Digite a segunda nota:
    Digite a terceira nota:

3. Antes de mostrar o resultado

Deseja visualizar o boletim?

    Se clicar em Cancelar
    Alerta -> "Operação cancelada."

    Se clicar em OK
    Mostrar a mensagem abaixo no "Alert" e "Console"
    ==============================
    BOLETIM DO ALUNO
    Nome: Amanda
    Nota 1: 8
    Nota 2: 7
    Nota 3: 9
    Média: 8
    Situação: APROVADO
    ==============================

*/
// Alert 
// prompt




// function calculoMedia(nota1, nota2, nota3) {
//      var media = (nota1 + nota2 + nota3) / 3;
//      return media;
// }

// function boletim(imprimir) {
//     var nomeAluno = prompt("Digite o nome do aluno:");
//     var nota1 = Number(prompt("Digite a primeira nota do aluno:"));
//     var nota2 = Number(prompt("Digite a segunda nota do aluno:"));
//     var nota3 = Number(prompt("Digite a terceira nota do aluno:"));
//     var media = calculoMedia(nota1, nota2, nota3)
//     var verBoletim = confirm("Deseja visualizar o boletim?");
//     var situacao = media >= 6 ? "Aprovado" : "Reprovado";

//     if (verBoletim) {
//         var mensagem = "=====================================\n";
//         mensagem += "Boletim do aluno\n";
//         mensagem += "Nome: " + nomeAluno + "\n";
//         mensagem += "Nota 1: " + nota1 + "\n";
//         mensagem += "Nota 2: " + nota2 + "\n";
//         mensagem += "Nota 3: " + nota3 + "\n";
//         mensagem += "Média: " + media + "\n";
//         mensagem += "Situacao: " + situacao + "\n";
//         mensagem += "=====================================\n";
//         alert(mensagem);
//         imprimir(mensagem);
//     } else {
//         alert("Operação cancelada.");
//         imprimir("Operação cancelada.");
//     }
// }

// var printMensagem = mensagem => console.log(mensagem);


// boletim((m) => {
//     console.log(m);
// })

// var executar = confirm("quer executar o boletim")
// if (executar) {
//     boletim();
// }
