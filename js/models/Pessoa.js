export class Pessoa {
    nome = '';
    idade = 0;

    constructor(obj = {}) {
        Object.assign(this, obj);
    }
}
