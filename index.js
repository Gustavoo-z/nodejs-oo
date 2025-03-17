import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";


// novoUser.nome = 'Nelson';
// console.log(novoUser.exibirInfos());
// console.log(novoUser.nome);

// console.log(novoUser.exibirInfos())
// novoUser.nome = 'João'
// console.log(novoUser.exibirInfos())

const novoUser = new User('Gustavo', 'Zesczylinski', 'g@g', '19-10-2002', 'User', true);
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Gustavo', 'g@g');
console.log(dadosFicticios);

// const novoAdmin = new Admin('Ricardo', 'Souza', 'r@r.com', "12-10-2004", 'Admin', true)
// console.log(novoAdmin.exibirInfos());

// const novoDocente = new Docente('Ricardo', 'Souza', 'l@l.com', "12-10-2004", 'Docente', true)
// console.log(novoDocente.exibirInfos());