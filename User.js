export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = 'true') {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "Estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Nome inválido');
        }
        this.#nome = novoNome;
    }

    exibirInfos() {
        return `Nome: ${this.#nome}, Email: ${this.#email}, Nascimento: ${this.#nascimento}, Role: ${this.#role}, Ativo: ${this.#ativo}`;
    }
}

// const novoUser = new User('Gustavo', 'g@g.com', '19-10-2002', 'Estudante', true)
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); 