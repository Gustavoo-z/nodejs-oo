const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();

const exibir = user.exibirInfos;
exibir(); // undefined undefined

const exibir1 = function() {
    console.log(this.nome, this.email);
}
exibir1(); // undefined undefined

const exibirNome = exibir1.bind(user);
exibirNome(); 

exibir1.call(user);

exibir1.apply(user);