let pesquisa = document.querySelector("#pesquisa");

pesquisa.addEventListener("input", function(){

if(this.value.length > 0){

for(i=0; i < pacientes.length; i++){
    tdNome = pacientes[i].querySelector(".info-nome");
    tdNome = tdNome.textContent;
    //criando expressao regular
    let expressao = new RegExp(this.value,"i")
    //procurando..
    if (!expressao.test(tdNome)){
    pacientes[i].classList.add("invisivel");
    } else{
        pacientes[i].classList.remove("invisivel")
    };

}} else {
    for(i=0; i < pacientes.length; i++){
        tdNome = pacientes[i].querySelector(".info-nome");
        tdNome = tdNome.textContent;
    
        pacientes[i].classList.remove("invisivel");
}
}
}
);