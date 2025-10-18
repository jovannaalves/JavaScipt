//Função principal de validação que vai ser chamada pelo evento oninputdo HTML
function validarCadastro(){

    //Passo 1 ;  capturar os elementos do DOM (tela)
    // cria uma variavel chamada emailInput, acessa o documento .html e "pega" o elemento pelo id "email"
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const passwordConfirmationInput = document.getElementById('passwordConfirmation')
    const mensagemErro = document.getElementById('mensagemErro')
    const btnEnviar = document.getElementById('btnEnviar')
     
    //passo 2: verificar o valor a ser validado
    const email = emailInput.value.trim() //.trim() remove espaço em branco
    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;

    
    //validação pára vericar se o formato de email esta correto (@email.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValido = false; //todo endereço de email que for digitado vai ser invalido ATÉ QUE a validação acuse que ele é valido
    let isPasswordValid = false;
    let passwordConfirmationValid = false;
     
    //passo 3: aplicar as regras de validação
    if(email == ""){
        //campo vazio não é um erro mas, tambem não é valido
        mensagemErro.textContent = "Digite seu e-mail para continuar."
        //limpar as classes de sucesso/erro
        mensagemErro.classname="mensagem-status"
        isValido = false
    } else if (emailRegex.test(email)){
        //email valido
        mensagemErro.textContent = "E-mail Válido!"
        mensagemErro.className = 'mensagem-status sucesso'
        isValido = true
    }else{
        mensagemErro.textContent = "Formato de E-mail Inválido!"
        mensagemErro.className = 'mensagem-status erro'
        isValido = false
    }

    if(password.lenght <= 6){
        isPasswordValid = false;
        mensagemErro.textContent = "A senha deve ter no minímo 6 caracteres."
    }

    if (!isPasswordValid && password == passwordConfirmation){
        isPasswordValid = false;
        mensagemErro.textContent = "As senhas devem coincidir."
    }


    // interação com atela: habilitar ou desbilitar o botao enviar
   btnEnviar.disabled = !isValido

   //passo 4: fazer o envio do formulario e exibir um alerta de sucesso
   
    document.getElementById('cadastroForm').addEventListener('submit', function(event){
        event.preventDefault();
   //se o botao enviar estiver habilitado, significa que a validade passou
   if(!document.getElementById('btnEnviar').disabled){
    alert('Cadastro enviado com sucesso;' + document.getElementById(email).value)
    // é aqui que fariamos uma chamada para uma API, por exemplo
}})
validarCadastro()
}