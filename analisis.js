
//helpers, decir son funciones que no son parte de la lógica de negocio, del análisis de lo que vamos a hacer, pero lo necesitamos par anuestros calculos
function esPar(numero){
    return (numero % 2 == 0);
 }
 
 function calculaMediaAritmetica(lista){ 
     const sumaLista = lista.reduce(
         function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;     
         }
     );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
 }

//Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calculaMediaAritmetica([personaMitad1 , personaMitad2 ])
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//Mediana General
const salariosCol = colombia.map(
    function(persona){/*por cada iteracción voy a recibir a una persona */
        return persona.salary;/*Creamos un nuevo array que se llame salariosCol, y lo que queremos que haya dentro de ese array aparezca el salario de cada persona  */
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//Mediana del top 10%, //splice funciona como tener una barrade pan y el primer parámetro que le 
//pasas es donde quieres posicionar el cuchillo, y el segundo parámetro es las tajadas que quieres sacar del pan


const spliceStart = (salariosColSorted.length * 90)/100;;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,

);

    const medianaTop10Col =  medianaSalarios(salariosColTop10);


    console.log({

    medianaGeneralCol,
    medianaTop10Col,

});