const usuarios = [
    {
        nome: "Paulo",
        tecnologias: [ // array de strings
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Thamires",
        tecnologias: [
            "JavaScript", 
            "CSS"
        ]
    },
    {
        nome: "Julia",
        tecnologias: [
            "HTML",
            "Node.js"
        ]
    }
]

//aqui vou fazer uma função para percorrer o array tecnologias e imprimi-las
//é uma adaptação para caso o array tenha mais de 2 tecnologias
// function percorrerUsuarios(usuarios){
//     for(let i=0;i<usuarios.length;i++){
//         console.log(`${usuarios[i].nome} `);
//         const techs = usuarios[i].tecnologias;

//         for(let j=0;j<techs.length;j++){
//             if(j==techs.length-1){
//                 console.log(techs[j]);
//             }else{
//                 console.log(techs[j]+",");
//             }
//         }
//     }
// }

// não vou utilizar a função acima pois a formatação de saida está saindo com quebra de linhas a cada nome e tecnologias mostrado


function percorrerUsuarios(usuarios){
    for(let i=0;i<usuarios.length;i++){
        const techs = usuarios[i].tecnologias
        console.log(`${usuarios[i].nome} trabalha com ${techs[0]}, ${techs[1]}`);
    }
}


percorrerUsuarios(usuarios);