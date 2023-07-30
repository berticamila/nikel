const nome = "márcia";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade:"33",
    trabalho:"programador"
}
let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoasListaVazia = [];
let pessoas = [
    {
     nome: "Marcelo Eltz",
     idade:"33",
     trabalho:"Programador"
    },
    {
     nome: "Maria Silva",
     idade:"25",
     trabalho:"UX/UI Designer"
    }
];

/*
 let n = "";
function alterarNome(n){
   nome2 = n
}

alterarNome(n);

console.log(nome2);*/

function alterarNome(n){
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}
function imprimirPessoa(pessoa){
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Trabalho: " + pessoa.trabalho);
}
function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}
function imprimirPessoas(){
    console.log("--------------IMPRIMIR PESSOAS-------------");
    pessoas.forEach((item) =>{
        console.log("Nome:" + item.nome);
        console.log("Idade:" + item.idade);
        console.log("Trabalho:" + item.trabalho);
    })
}

imprimirPessoas();

//console.log(pessoas);
adicionarPessoa({
    nome:"Pedro Silva",
    idade:"28",
    trabalho:"Porteiro"
});

imprimirPessoas();
//console.log(pessoas);
//console.log(pessoas[0].idade);
//console.log(nomes);

//imprimirPessoa(pessoaDefault);
/*imprimirPessoa({
    nome: "Maria Silva",
    idade:"25",
    trabalho:"UX/UI Designer"
})*/

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria silva");
 //alterarNome();