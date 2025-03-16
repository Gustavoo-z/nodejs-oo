export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = 'true') {
        this.#nome = nome;
        this.#sobrenome = sobrenome
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "Estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    get sobrenome() {
        return this.#sobrenome;
    }
    get nomeCompleto() {
        return `${this.#nome} ${this.#sobrenome}`;
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
        let [nome, ...sobrenome] = novoNome.split(' ');
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    exibirInfos() {
        return `Nome: ${this.#nome}, Sobrenome: ${this.#sobrenome}, Email: ${this.#email}, Nascimento: ${this.#nascimento}, Role: ${this.#role}, Ativo: ${this.#ativo}`;
    }
}

const novoUser = new User('Gustavo', 'Zesczylinski', 'g@g', '19-10-2002', 'Estudante', true);
console.log(novoUser.nomeCompleto);

// const novoUser = new User('Gustavo', 'g@g.com', '19-10-2002', 'Estudante', true)
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); 