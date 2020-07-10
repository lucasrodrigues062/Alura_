const listaPacientes = document.querySelector("table");

    listaPacientes.addEventListener("dblclick", function(event){
        //associando o alvo do evento
        let target = event.target;
        //associando o pai do evento
        let targetPai = target.parentNode;
        targetPai.classList.add("fadeOut");
        //colocando um tempo, antes de excluir
        setTimeout(function(){
            targetPai.remove();
        },500);
        //removendo a linha
        //targetPai.remove();
    });
