// funcao que obtem os elementos de um array e cria uma lista ordenada no documento html
function listFromArray(arr,dest) {
    ol = document.createElement("ol");
    for (let i = 0; i < arr.length; i++) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(arr[i]));
        ol.appendChild(li);
    }
    document.body.insertBefore(ol,document.getElementById(dest));
}

// array de strings inicial
const array = ["Luke Skywalker","Leia Organa","Obi Wan Kenobi","Han Solo","Darth Vader"];

listFromArray(array,"div1");

// utilizamos sort no array de strings
array.sort();

listFromArray(array,"div2");

// array de numeros inicial
const arrayNum = [3829,71654,173,2817,27]

listFromArray(arrayNum,"div1");
listFromArray(arrayNum,"div3");

// usando uma funcao matematica como parametro, ordenamos o array de numeros em ordem de menor para maior
const sorted = arrayNum.sort(function(a, b){return a-b});

listFromArray(sorted,"div4");

// usando a funcao inversa, podemos ordenar o array de numeros na ordem inversa
const sortedInv = arrayNum.sort(function(a, b){return b-a});

listFromArray(sortedInv,"div5");

// utilizamos filter para obter somente os elementos do array de strings com menos de 12 caracteres
const shortArray = array.filter(function(a){return a.length < 12});

listFromArray(shortArray,"div6");

// utilizamos filter para obter somente os elementos do array de numeros menores que 3000
const shortArrayNum = arrayNum.filter(function(a){return a < 3000});

listFromArray(shortArrayNum,"div7");

// utilizamos map para adicionar uma letra a para cada elemento do array de strings
const arrayA = array.map(function(a){return a + "a"});

listFromArray(arrayA,"div8");

// utilizamos map para dividir cada numero do array de numeros por 10
const arrayNum10 = arrayNum.map(function(a){return a/10});

listFromArray(arrayNum10,"div9");

// utilizamos reduce para condensar o array de strings em uma unica string
const arrayOne = array.reduce(function(a,b){return a+b});
// nao podemos utilizar a funcao de lista pois ha somente um elemento no resultado
// portanto criamos um header 5 e inserimos o texto resultante
result = document.createElement("h5");
result.appendChild(document.createTextNode(arrayOne));

// finalmente, inserimos o header no documento
document.body.insertBefore(result,document.getElementById("div10"));

// utilizamos reduce para condensar o array de numeros em sua soma
const arrayNumOne = arrayNum.reduce(function(a,b){return a+b});
// nao podemos utilizar a funcao de lista pois ha somente um elemento no resultado
// portanto criamos um header 5 e inserimos o texto resultante
result = document.createElement("h5");
result.appendChild(document.createTextNode(arrayNumOne));

// finalmente, inserimos o header no documento
document.body.insertBefore(result,document.getElementById("div11"));

// quando colocamos os dois arrays dentro de um array, o codigo cria um array de arrays
const gluedArray = [array,arrayNum];

listFromArray(gluedArray,"div12");

// utilizando spread, podemos separar cada array em seus elementos, e inserir os elementos em um array
const spreadArray = [...array,...arrayNum];

listFromArray(spreadArray,"div13");

// com spread, podemos especificar os elementos que queremos separar de um array, deixando uma variavel de "resto" generica com spread
const [nome1,nome2,...n] = array;
// estes elementos separados estao agora em variaveis que podem ser chamadas e colocadas, por exemplo, em seu proprio array
const arrayMenor = [nome1,nome2];

listFromArray(arrayMenor,"div14");

