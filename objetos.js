//aqui utilizamos o conceito de objeto, um conjunto de propriedades e métodos
//nesse caso, uma empresa com suas informações e sem métodos

const empresa = { //nome do objeto
    nome: "Rocketseat",  //cada propriedade recebe uma vírgula no final para separar da próxima propriedade
    cor: "Roxo",
    foco: "Programação",
    endereco: { //aqui temos um objeto intercalado ao objeto principal(empresa)
        rua: "Rua Guilherme Gembala",
        numero: 260 //exceto a última propriedade, ela não recebe
    }
}

//para acessar uma propriedade de um objeto, utilizamos o nome do objeto.propriedade ou método que queremos acessar
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)