const btnImport = document.querySelector("#importar-paciente");
const xhr = new XMLHttpRequest();
const endereco = "https://api-pacientes.herokuapp.com/pacientes";

//importando dados de uma API externa
btnImport.addEventListener("click", function(){
    //Abrindo Conexao
    xhr.open("GET", endereco);
    //Buscando os daddos
    xhr.addEventListener("load", function(){
       if (xhr.status == 200) {
       let pacientesImport = JSON.parse(this.responseText);
       
       pacientesImport.forEach( (i) => {
           addPacienteTabela(i)
       })} else {
           alert(xhr.status + " / " + xhr.response)
       }
    });

    xhr.send()
})

