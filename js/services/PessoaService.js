import { Pessoa } from '../models/Pessoa.js';

export async function salvarPessoa(dados) {
    // Simula retorno imediato, sem delay nem Promise explícita
    const respostaSimulada = {
        id: 123,
        nome: dados.nome,
        idade: dados.idade
    };

    let pessoa = null;

    const response = {
        ok: true,
        mensagem: "Sucesso",
        json: async () => respostaSimulada
    };

    if (!response.ok) {
        throw new Error('Erro na requisição simulada');
    }

    pessoa = new Pessoa(await response.json())

    return { pessoa, response };
}
