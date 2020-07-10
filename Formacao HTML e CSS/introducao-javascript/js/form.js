let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(){
    event.preventDefault();
    
    // Pegando dados do Formulario
    //let form = document.querySelector("#form-adiciona");
    let paciente = obterPacienteForm(document.querySelector("#form-adiciona"));

    let errormsg = validaPaciente(paciente)
   
    if (errormsg.length > 0){
        mensagemErro(errormsg)
        return
    }
   

    addPacienteTabela(paciente)
    

    document.querySelector("#form-adiciona").reset()

    let reset = document.querySelector("#errormsg")
    reset.innerHTML = ""

})

function addPacienteTabela (paciente) {
     // Montando TR
     let pacienteTr = montaTr(paciente)

     // Adicionando o elemento no HTML
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterPacienteForm (form) {

    let paciente = {        
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente    
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");

    // Montando o <tr></tr>
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));



    return pacienteTr

}

function montaTd(valor, classe) {
    
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;

    return td

}

function mensagemErro(erros){
    let ul = document.querySelector("#errormsg");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });



}

function validaPaciente (paciente) {
    let error = []

    if(paciente.nome.length == 0){
        error.push("Nome invalido")
    }

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        error.push("Peso invalido")
    } 
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0){
        error.push("Altura Invalida")
    }
    if (paciente.gordura < 0 || paciente.gordura > 100 || paciente.gordura.length == 0)
        error.push("% de Gordura invalido")
    
    return error
} 