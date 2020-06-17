//primeiro desafio do curso launch base
//nesse desafios são utilizados conceitos básicos da linguagem javascript
//para começar utilizamos o conceito de constante, que é o armazenamento de dados temporários na memória
const nome = "Paulo";
//a diferança entre uma const e var é que um dado armazenado em const não pode ser alterado posteriormente, pois é uma constante
const peso = 49;
//em javascript não precisamos atribuir um tipo de dados na declaração da variável, o valor atribuido já informa isso
const altura = 1.69;

// aqui é utilizado nós fazemos a operações aritméticas e operação de atribuição a const ao mesmo tempo
 //utilizamos os operadores aritméticos de divisão e multiplicação
const imc = peso/(altura*altura);   //os parenteses são utilizados para informar que 
                                    //a operação de multiplicação deve ser realizada primeiro do que a divisão

//o if(se) é uma estrutura condicional, se a condição entre () for verdadeira ele executa o código no {}
if(imc>=30){
    console.log(`${nome} você está acima do peso`);
}else{
    //else(se não), ou seja, caso a condição seja falsa, o código executado será esse
    console.log(`${nome} você não está acima do peso`);
}