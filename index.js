import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Gustavo', 'g@g', '19-10-2002', 'Estudante', true);

novoUser.nome = 'Nelson';
console.log(novoUser.exibirInfos());
console.log(novoUser.nome);