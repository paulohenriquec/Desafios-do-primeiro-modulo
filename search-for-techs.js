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

function checaSeUsuarioUsaCSS(usuario){
    const techs = usuario.tecnologias;
    for(let i=0;i<techs.length;i++){
        if(techs[i]=="CSS")
        {
           return true;
        }
    }
}

function percorrerUsuarios(usuarios){ //ESSA FUNÇÃO CHAMA A FUNÇÃO DE CIMA
    for(let i=0;i<usuarios.length;i++){
        const checagem = checaSeUsuarioUsaCSS(usuarios[i]); // NESSE PONTO

        if(checagem){ //AQUI VERIFICA SE CHECAGEM É TRUE
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        }
    }
}

percorrerUsuarios(usuarios);