let nome = prompt("Qual seu nome");
let idade =prompt("Quantos anos você tem ?");
let ling =prompt("Qual linguagem de programação você está estudando agora ?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}!`;
alert(msg)

let a = prompt(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO`);
if(a==1){alert('Muito bom! Continue estudando e você terá muito sucesso.')};
if(a==2){alert('Ahh que pena... Já tentou aprender outras linguagens?')};
