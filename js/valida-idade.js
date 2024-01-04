'use strict'
export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    // validaIdade(dataNascimento);
    // console.log(validaIdade(dataNascimento));
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O Usuário não é maior de Idade!');
    };
};
function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
};