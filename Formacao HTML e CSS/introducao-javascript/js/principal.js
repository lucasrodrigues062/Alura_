var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

   
   var pacientes = document.querySelectorAll(".paciente");

    for (let i = 0; i < pacientes.length; i++ ) {
    var   paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;
    
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);
    
    if (!pesoEhValido) {
        
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    
    }
    
    if (!alturaEhValida) {
        
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if (alturaEhValida && pesoEhValido) {
    
        tdImc.textContent = calculaImc(peso,altura)   
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
    }


function validaPeso (peso) {
    if (peso >= 0 && peso <= 400 ) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura){
    if (altura >= 1 && altura <=3){
        return true
    } else {
        return false
    }
}


function calculaImc (peso,altura) {
    let imc
    imc = peso / (altura * altura)
    return imc.toFixed(2) 
}
 