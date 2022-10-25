console.log(`Trabalhando com lista`);
// const salvador = `Salvador`;
// const saoPaulo=`São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);
console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba"); //adicionando a lista
console.log("Destinos possiveis");

//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1 ); //deletar na segunda posição da lista(de o a ...) e a quantidade de elementos,
console.log(listaDeDestinos,"\n");

console.log("Mostrar um unico elemento: ");
console.log(listaDeDestinos[2]);