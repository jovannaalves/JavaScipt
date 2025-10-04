/*trabalhando com métodos de console

import readline from 'readline'; readline: biblioteca 

const rl = readline.createInterface({ Responsável pela execução const: função 
    input: process.stdin, input: entrada 
    output: process.stdout output: saída 
})
*/

/*
rl.question('Qual é o seu nome? ', (nome) =>{ question: fazer uma pergunta 
    console.log(`Olá, ${nome}`) Utilizar crase (`) para executar e imprimir corretamente 
    rl.close()

})
*/

/*
let ou var para criar variavel: mas o var ignora o bloco de código 
Usando o let -> respeita o escopo do bloco
if (true){
    let nome = "Beatriz"
    console.log(nome);
}
console.log(nome)
*/

/*
Usando var -> não respeita o escopo do bloco 
if (true){
    var nome = "JavaScript"
    console.log(nome);
}
console.log(nome)
*/
/*Exemplo 3 -> dentro de uma for 
for (let i = 0; i < 3; i++){
    console.log("Dentro do for: ", i)
}
console.log("Fora do For:", i)
*/

/*IF ELSE 

let idade = 18
if (idade < 12) {
    console.log("Criança")
} else if(idade < 18){
    console.log("Adolescente")
} else {
    console.log("Adulto")
}
*/

/*
ex- 1
let a = 5
let b = 5
let resultado = (a+b)/2
console.log(resultado)
*/

/*EXERCÍCIOS DE FIXAÇÃO

Situação 1 - Aprovado ou Reprovado

Com base no código do slide anterior (IfElse Exemplo), crie um programa que solicite ao usuário a inserção de quatro
notas de prova (P1, P2, P3 e P4). Caso a média das notas seja menor que 6, o console deverá retornar a seguinte
mensagem “Reprovado”, caso a média seja maior ou igual a seis, a mensagem a ser exibida deve ser “Aprovado”. */

/*Exercicio 1

//importando o módulo readline para receber a entrada dos dados
const readline = require("readline")

//configurar o módulo pra capturar as entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*perguntando pro usuario as quatro notas //Shift+Alt+F: arruma a identação do código!!!!
rl.question("Digite a nota P1: ", function (P1) {
    rl.question("Digite a nota P2: ", function (P2) {
        rl.question("Digite a nota P3: ", function (P3) {
            rl.question("Digite a nota P4: ", function (P4) {
                rl.question("Digite a carga horaria (em horas):", function (chTotal) {
                    rl.question("Digite a quantidade de faltas: ", function (chFaltas) {
                        P1 = Number(P1)
                        P2 = Number(P2)
                        P3 = Number(P3)
                        P4 = Number(P4)
                        chTotal = Number(chTotal)
                        chFaltas = Number(chFaltas)

                        //calculo da media
                        let media = (P1 + P2 + P3 + P4) / 4

                        //calculo porcentagem faltas
                        let faltas = (chFaltas / chTotal) * 100

                        //verificação da situação do aluno (nota e falta)
                        if (faltas >= 25) {
                            console.log("Reprovado por falta")
                        } else if (media >= 6) {
                            console.log("APROVADO", media)
                        } else {
                            console.log("REPROVADO", media)
                        }

                        rl.close(); //encerra o programa

                    })
                })
            })
        })
    })
})
*/
/*Situação 2 - Notas e Faltas

Refatore o código da Situação 1, de forma que o usuário também possa inserir a quantidade de faltas do semestre.
Caso a quantidade de faltas seja maior ou igual a 75%, mesmo que o usuário possua uma nota maior que 6, o console
deverá exibir a mensagem “Reprovado por falta”.

let falta_semestre = 60
let p1 = 10
let p2 = 7
let p3 = 8
let p4 = 9
let media = (p1+p2+p3+p4)/4
console.log("Média", media)

if (falta_semestre >= 75){
    console.log("Reprovado por Falta")
} else if (media < 6){
    console.log("Reprovado")
} else { // 3. Se não foi reprovado por falta e a média é >= 6
    console.log("Aprovado");
}

*/

/*Situação 3 - Login
Crie um sistema de login que peça ao usuário a inserção de um id e uma senha.

Após o recebimento dessas informações, o console deverá solicitar um id e uma senha.

Caso id OU senha sejam diferentes daquilo que foi solicitado inicialmente, o console deverá exibir a
seguinte mensagem “Login ou senha incorreto.”.

Caso o id E a senha sejam iguais ao que foi solicitado inicialmente, o console deverá exibir a seguinte
mensagem “Login realizado com sucesso.”. 

let id = "admin"
let senha = "admin123"

  definindo as informaçãoes inseridas pelo usuario
let id_Usuario = "admin"
let senhaUsuario = "admin123"

 verificação de login
if (id == id_Usuario && senha == senhaUsuario){
    console.log("Usuário logado com sucesso.")
} else {
    console.log("Usuário ou senha estão incorretos.")
}
*/

/*Swith Case
let codigo = 332;
switch (codigo) {
    case 980: console.log("Kindle")
        break;
    case 332: console.log("Honda Civic")
        break;
    case 105: console.log("Aspirador Robô")
        break;
    default: console.log("Item não encontrado. :(")
        break;
}
*/

/*Situação 1 - Código do Produto

Escreva um programa que converta um código de produto em sua descrição correspondente utilizando
switch case. 

let codigo = 4534;
switch (codigo) {
    case 5676: console.log("Mouse sem Fio")
        break;
    case 5478: console.log("Teclado")
        break;
    case 4534: console.log("Pijama do Banguela")
        break;
    default: console.log("Produto não encontrado")
        break;
}
*/

/*Situação 2 - Calculadora

Crie um programa que permita ao usuário digitar dois números (“Número 1” e “Número 2”).

Depois de solicitar os números, o console deve pedir ao usuário que escolha qual operação deseja realizar
(adição, subtração, divisão ou multiplicação).

Com base na escolha do usuário, realize a operação e exiba o resultado na tela.

Caso o usuário digite uma operação que não está nas opções listadas, o console deve exibir “Operação
inválida”. 

 let num1 = 40
 let num2 = 20
 let operacao = ("Adição")

 switch (operacao) {
    case "Multiplicação": console.log("Resultado",num1*num2)
        break;
    case "Adição": console.log("Resultado",num1+num2)
        break;
    case "Subtração": console.log("Resultado",num1-num2)
        break;
    case "Divisão": console.log("Resultado",num1/num2)
        break;
    default: console.log("Operação Inválida")
        break;
 }
 */

 /**Laços de Repetição 
 
 for (let i = 0; i <= 10; i++){
    console.log("Contador: ", i) 
 } 
*/
 
/*EXERCÍCIO 1 - CONTAGEM REGRESSIVA

Crie um programa que solicite ao usuário um número e, a partir dele, que inicie uma contagem
regressiva do número definido até 0. 

for (let i= 10; i >= 0; i--){
    console.log("Contagem Regressiva: ", i)
}
*/
 /*EXERCÍCIO 2 - NÚMEROS PARES

Escreva um programa para imprimir os números pares de 0 a 20. 

for (let i = 0; i <= 20; i += 2){
    console .log("Números pares de 0 a 20: ", i)
}
*/

/*EXERCÍCIO 3 - NÚMEROS ÍMPARES

Escreva um programa para imprimir os números ímpares de 0 a 20. 

for (let i = 1; i <= 20; i += 2) { 
    console .log("Números impares de 0 a 20: ", i)
}

*/

/**Laços de Repetição while 

/*NÚMERO POSITIVO

Crie um programa que solicite ao usuário um número qualquer. Enquanto o número inserido for
menor que 10, o programa deve continuar solicitando ao usuário para inserir um número. 

import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
while (numero < 10) {

rl.question("Digite um número: ", function(numero){
    numero = Number(numero)
    console.log("Número Iválido, tente novamente!")
})
}
*/

function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
    /*cria uma rotina que fica "resolvendo" algo, nesse caso,
    fica esperando milisegundos definidos pelo usuário e exibe o conteúdo no console*/
}

 let i = 1

 while (i <= 5){
    console.log(i) //escrever o numero na tela
    i++ //incrementar o numero
    await delay(1000)
 }


