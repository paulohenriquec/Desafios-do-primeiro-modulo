//como na calculadora de imc, utilizamos constantes
const nome = "Paulo";
const sexo = "M";
const idade = 48;
const contribuicao = 23;

//condicional if e else
if(sexo=="M")
{
    //if aninhado
    if(contribuicao>=35 && (contribuicao+idade)>=95) //operadores lógicos and
    {
        console.log(`${nome}, você pode se aposentar!`);
    }else{
        console.log(`${nome}, você ainda não pode se aposentar!`);
    }
}else{
    if(contribuicao>=30 && (contribuicao+idade)>=85) //operadores lógicos and
    {
        console.log(`${nome}, você pode se aposentar!`);
    }else{
        console.log(`${nome}, você ainda não pode se aposentar!`);
    }
}