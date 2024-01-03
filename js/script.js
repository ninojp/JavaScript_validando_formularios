'use strict'
import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoForm = document.querySelectorAll('[required]');
camposDoForm.forEach((campo => {
    //BLUR(desfoque): retirar o foco do elemento
    campo.addEventListener('blur', () => verificaCampo(campo));
}));

function verificaCampo(campo){
    if(campo.name == 'cpf' && campo.value.length >= 11){
        ehUmCPF(campo);
    }
    if(campo.name == 'aniversario' && campo.value != ''){
        ehMaiorDeIdade(campo);
    }
}