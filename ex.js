
function somar(a, b) {
  return a + b;
}
let resultado = somar(5, 3);
console.log(resultado); // Saída: 8

function multiplicar(a, b) {
  return a * b;
}
let produto = multiplicar(4, 6);
console.log(produto);

function ehPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(ehPar(10)); // Saída: true
console.log(ehPar(7));  // Saída: false 

function fatorial(n) {
  if (n < 0) {
    return "Fatorial não definido para números negativos.";
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}
console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(-3)); // Saída: Fatorial não definido para números negativos.  

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusParaFahrenheit(0));   // Saída: 32
console.log(celsiusParaFahrenheit(100)); // Saída: 212  
console.log(celsiusParaFahrenheit(-40)); // Saída: -40

function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0; // Evita divisão por zero
  }

  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma / numeros.length;
}
console.log(calcularMedia([10, 20, 30])); // Saída: 20
console.log(calcularMedia([])); // Saída: 0

function verificarMaioridade(idade) {
  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
}

// Exemplo de uso:
verificarMaioridade(20);

function avaliarNota(nota) {
  if (nota < 0 || nota > 10) {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
  } else if (nota >= 6) {
    console.log("Aprovado");
  } else if (nota >= 4) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}


avaliarNota(7); 
avaliarNota(4.5); 
avaliarNota(3);   
avaliarNota(11); 

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-feira");
      break;
    case 3:
      console.log("Terça-feira");
      break;
    case 4:
      console.log("Quarta-feira");
      break;
    case 5:
      console.log("Quinta-feira");
      break;
    case 6:
      console.log("Sexta-feira");
      break;
    case 7:
      console.log("Sábado");
      break;
    default:
      console.log("Número inválido. Digite um número de 1 a 7.");
  }
}


diaDaSemana(1); 
diaDaSemana(5); 
diaDaSemana(8); 

// Função que gera o número secreto e verifica o palpite
function adivinharNumero(palpite) {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  
  if (palpite === numeroSecreto) {
    return "Parabéns! Você acertou!";
  } else {
    return `Você errou! O número correto era ${numeroSecreto}.`;
  }
}


console.log(adivinharNumero(7)); 

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
function gerarTabuada(numero) {
  if (typeof numero !== 'number' || isNaN(numero)) {
    console.log('Por favor, forneça um número válido.');
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}


gerarTabuada(5);

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("A soma dos números de 1 a 100 é:", soma);

const nomes = ["Ana", "Beatriz", "Alex", "Carlos", "Amanda", "Bruno"];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].charAt(0).toUpperCase() === "A") {
    console.log(nomes[i]);
  }
}
function calcularFatorial(n) {
  if (n < 0) {
    return "Fatorial não definido para números negativos.";
  }

  let fatorial = 1;

  for (let i = 2; i <= n; i++) {
    fatorial *= i;
  }

  return fatorial;
}


console.log(calcularFatorial(5)); 
const array = ['maçã', 'banana', 'laranja', 'uva'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
array.forEach(elemento => {
  console.log(elemento);
});
function somarArray(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

function somarArray(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

function somarArray(numeros) {
  return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
}


const numeros = [1, 2, 3, 4, 5];
console.log(somarArray(numeros));

function desenharQuadrado(tamanho) {
  if (tamanho <= 0 || !Number.isInteger(tamanho)) {
    console.log("Digite um número inteiro positivo.");
    return;
  }

  for (let i = 0; i < tamanho; i++) {
    let linha = "";
    for (let j = 0; j < tamanho; j++) {
      linha += "* ";
    }
    console.log(linha);
  }
}

desenharQuadrado(3);
