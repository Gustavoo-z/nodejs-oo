export default class User {
    constructor(nome, email, nascimento, role, ativo = 'true') {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "Estudante";
        this.ativo = ativo;
    }
    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}

const novoUser = new User('Gustavo', 'g@g.com', '19-10-2002', 'Estudante', true)
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); 