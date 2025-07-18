import { salvarPessoa } from '../services/PessoaService.js';
import { Pessoa } from '../models/Pessoa.js';

async function criarPessoa(form) {
    const nome = form.nome.value;
    const idade = Number(form.idade.value);

    /*if (!nome || nome.trim() === '') {
        throw new Error('Nome é obrigatório');
    }
    if (!idade || isNaN(idade) || idade <= 0) {
        throw new Error('Idade deve ser número positivo');
    }*/

    return await salvarPessoa(new Pessoa({ nome, idade }));
}
window.pessoaController = {
    criarPessoa
};

