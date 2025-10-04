/*como criar variaveis em javascript
-> variavel: espaço na memoria
-> toda variavel precisa de : nome e tipo
-> sintaxe: let <nome-variavel>
*/

/*let idade_teste, variável criada, mas nenhum valor ou tipo foi passsado para variavel*/
let numero = 15 /*varialvel chamada numero com o valor 15 associado -> tipo inteiro (ou int, interger)*/
let preco = 9.99 /*variavel do tipo double (decimal) chamda preço com o valor 9.99*/
let nome_teste = "JavaScript" /*Variavel do tipo string (texto) chamada nome com o valor "JavaScript"*/

/*Escrevendo textos no Console*/

console.log("Hello World! :D")

/*Escreva no console seu nome, idade e localização, utilizando variaveis*/

let nome = "Jovanna"
let idade = 16
let localizacao = "Diadema"


console.log("Olá meu nome é " + nome + ", eu tenho " + idade +  " anos. E eu moro em: " +localizacao+ ".") 



/*If-else
    -> Estrutura Condicional: tomar decisões
*/

let idade_teste = 19

if ( idade_teste >= 18) {
    console.log("É maior de idade.")
} else {
    console.log("É Menor de idade.")
}

/*Exercício: desenvlva um código que compare uma nota armazenada na variavel chamada "nota",
se for maior ou igual a 5, o aluno esta aprovado, se for menos que 5, esta reprovado*/

/*Modo "Perfumaria"
Vamos permitir que a entrada do usuario seja capturada */

/*Importando um módulo que permite ler a entrada do usuario */
const readline = require("readline")

/*Configuraçõa par ler os dados do teclado */
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})
/*Perguntando a nota */
rl.question("Digite a nota do aluno: ", function (nota){

    /*Convertendo entrada para numero */
    nota = Number (nota);

if (nota >=5) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
rl.close();
})


