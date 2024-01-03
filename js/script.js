'use strict'
import ehUmCPF from "./valida-cpf.js";
const camposDoForm = document.querySelectorAll('[required]');
camposDoForm.forEach((campo => {
    //BLUR(desfoque): retirar o foco do elemento
    campo.addEventListener('blur', () => verificaCampo(campo));
}));

function verificaCampo(campo){
    if(campo.name == 'cpf' && campo.value.length >=11){
        ehUmCPF(campo);
    }
}