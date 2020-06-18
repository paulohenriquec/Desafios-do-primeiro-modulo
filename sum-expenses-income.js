const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    },
];

function somaNumeros(numeros){
    let soma = 0;
    for(let i=0;i<numeros.length;i++){
        soma = soma+ numeros[i];
    }
    return soma;
}

function calcularSaldo(receitas, despesas){
    //essa vai chamar a função somaNumeros
    return saldo = somaNumeros(receitas) - somaNumeros(despesas);
}

function percorrerUsuarios(usuarios){
    
    for(let i=0;i<usuarios.length;i++){
        const receitas = usuarios[i].receitas;
        const despesas = usuarios[i].despesas;
        const saldo = calcularSaldo(receitas, despesas);
        if(saldo>0){
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`);
        }else{
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`); 
        }
    }
}

percorrerUsuarios(usuarios);