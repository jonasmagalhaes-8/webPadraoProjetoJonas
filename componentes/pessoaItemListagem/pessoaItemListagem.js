const template = await fetch('componentes/pessoaItemListagem/pessoaItemListagem.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.querySelector('template');
    });

async function criar(pessoa) {
    const clone = template.content.cloneNode(true);
    const details = clone.querySelector('details');

    clone.querySelector('.nome-idade').textContent = `${pessoa.nome} (${pessoa.idade} anos)`;
    clone.querySelector('.detalhes').textContent = `Detalhes:\n- Nome: ${pessoa.nome}\n- Idade: ${pessoa.idade}`;

    // Botão remover
    const btnRemove = clone.querySelector('.btn-remove');
    btnRemove.addEventListener('click', (e) => {
        e.stopPropagation();
        details.remove();
    });

    details.addEventListener('toggle', () => {
        if (details.open) {
            console.log('Pessoa selecionada:', pessoa);
        }
    });
    return clone;
}

window.componenteListaPessoas = {
    criar
};
