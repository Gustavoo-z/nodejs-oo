import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Gustavo', 'g@g', '19-10-2002', 'Estudante', true);

// novoUser.nome = 'Nelson';
// console.log(novoUser.exibirInfos());
// console.log(novoUser.nome);

console.log(novoUser.exibirInfos())
novoUser.nome = 'João'
console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Ricardo','n@n.com', "12-10-2004", 'Admin')
// console.log(novoAdmin.nome);