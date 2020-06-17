const programador = {  //aqui temos um objeto
    nome: "Paulo",
    idade: 21,
    //nota-se que o array como propriedade de um objeto é declarado com : e não com =
    tecnologias: [  //uma das propriedades desse objeto é um array, que é uma coleção de itens
        {  //aqui temos um item do array tecnologias e esse item pode ser acessado através do indice 0 e esse item é um objeto com mais propriedades
            nome: "Javascript",
            especialidade: "Web"
        },   //separação do outro item através da vírgula
        {   //item de indice 1
            nome:"C",
            especialidade: "Desktop"
        }
    ] //fim do array
} // fim do objeto programador

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)