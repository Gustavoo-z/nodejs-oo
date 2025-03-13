import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }
    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}, responsável ${this.nome}`;
    }
}

const novoDocente = new Docente('Leonardo', 'l@l.com', '04-04-2004', 'Docente', true);
console.log(novoDocente);
console.log(novoDocente.aprovarEstudante('Gustavo', 'Javascript'));