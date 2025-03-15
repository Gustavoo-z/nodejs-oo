import User from './User.js';

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }
    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`;
    }
}

// const novoAdmin = new Admin('Nelson', 'n@n.com', '02-02-2002', 'Admin', true);
// console.log(novoAdmin.nome);
// console.log(novoAdmin.criarCurso('Javascript', 20));