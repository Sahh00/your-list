const lista = () => {
    const Input_Objetivos = document.getElementById("Objetivos").value;//input das lista

    const resultado = document.getElementById("resultado");//div onde vai aparecer os afazeres

    const divAlinhamento = document.createElement("div");//div para deixar todos os append juntos
    divAlinhamento.classList.add("divAlinhamento");

    const divAlinhamentoImg = document.createElement("div");//div para deixar as img alinhadas
    divAlinhamentoImg.classList.add("divAlinhamentoImg");

    //estilo - divAlinhamento
    divAlinhamento.style.display = "flex";


    ///
    const opt = document.createElement("option"); // onde vai deixar a lista uma emnbaixo da outra.
    opt.classList.add("opt")
    opt.text = Input_Objetivos;//tudo que for digitado no input vai concatenar com o option.


    ///

    const paragrafoD = document.createElement("p");
    paragrafoD.classList.add("pD")

    ///

    const paragrafoV = document.createElement("p");
    paragrafoV.classList.add("pV")

    ///

    const imgVerificar = document.createElement("img");//elemento img - botao de verficar.
    imgVerificar.setAttribute("src", "imagens/verifica.png")
    imgVerificar.classList.add("imgVerificar");



    ///Funcao para verificar que terminou algo da lista.
    imgVerificar.addEventListener("click", function verificando() {
        if (imgVerificar.click) {
            const TarefasConcluidas = document.getElementById("TarefasConcluidas");
            const optConcluidas = document.createElement("option");
            optConcluidas.style.textTransform = "capitalize"
            optConcluidas.text = Input_Objetivos;
            TarefasConcluidas.appendChild(optConcluidas);
            resultado.removeChild(divAlinhamento);
            resultado.removeChild(divAlinhamentoImg);

        } else {
            console.log("nao marcou!")
        }
    })

    ///

    const imgDelete = document.createElement("img");//elemento img 2 - criado para botao de excluir algo da lista.
    imgDelete.classList.add("imgDelete");
    imgDelete.setAttribute("src", "imagens/excluir.png");


    if (!eDuplicado(Input_Objetivos)) {
        paragrafoV.appendChild(imgVerificar);
        paragrafoD.appendChild(imgDelete);
        divAlinhamentoImg.appendChild(paragrafoV);
        divAlinhamentoImg.appendChild(paragrafoD);


        divAlinhamento.appendChild(opt);
        resultado.appendChild(divAlinhamento);
        resultado.appendChild(divAlinhamentoImg);




    } else {
        alert("Item já existe na lista."); // Mostrar um alerta de erro
    }





    imgDelete.addEventListener("click", function deletandoLista() { // funcao para deletar itens
        resultado.removeChild(divAlinhamento);
        resultado.removeChild(divAlinhamentoImg);

    })

    function eDuplicado(item) {// funcao para verificar item repetidos 
        const itens = resultado.querySelectorAll("option");
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].text === item) {
                return true;
            }
        }
        return false;
    }






}







