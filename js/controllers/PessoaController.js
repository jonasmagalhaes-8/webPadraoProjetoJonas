import { salvarPessoa } from '../services/PessoaService.js';
import { Pessoa } from '../models/Pessoa.js';

function formToJson(form) {
    if (form.idade !== undefined) {
        form.idade = Number(form.idade);
    }
    return form;
}

async function criarPessoa(form) {
    return await salvarPessoa(new Pessoa(formToJson(form)));
}

window.pessoaController = {
    criarPessoa
};
