//Código del cuadrado
console.group("Cuadrados"); 

function perimetroCuadrado(lado){
    return  lado * 4;
}


function areaCuadrado(lado){
    return  lado * lado;
}



console.groupEnd();

//Código del triángulo
 console.group("Triángulos")
    
    function perimetroTriangulo(lado1, lado2, base){
            return (lado1 + lado2) + base ;

    }
    
    function areaTriangulo( base,altura){
        return (base * altura)/2 ;

}  
   

console.groupEnd();

//Código del círculo
console.group("Círculos")


function diametroCirculo(radio){
    return radio * 2;

}

//PI
console.group("valor de PI")
const PI = Math.PI;
console.log("El valor de PI es: " + PI + "cm");
console.groupEnd();


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio) //estamos llamando una función dentro de otra funcion, le enviamos como argumento radio, que lo estamos recibiendo como parámetro en nuestra función perimetroCirculo., estamos llamando una funcion dentro de otra funcion para crear una variable con la que vamos a retornar el valor de nuestro perímetro que en este caso es diametro * PI.
    return  diametro * PI;
}


function areaCirculo(radio){
    
    return (radio * radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML

// function calcularPerimetroCuadrado(){
//     const input = document.getElementById("InputCuadrado"); 
//     const value = input.value; //optenemos el valor que ingresa el usuario en una variable, vamos a llamar al input donde ya guardamos previamente lo que escribe el usuario y llamamos a su propiedad input.value
    
//     const perimetro = perimetroCuadrado(value);
//     //llamamos a la función perimetroCuadrado y enviarle como argumento cuánto mide los lados del cuadrado que los usuarios quieren
//     //calcular en este caso es lo que guardamos en la constante value

//     alert (perimetro);

// }

// function calcularAreaCuadrado(){
//     const input = document.getElementById("InputCuadrado"); 
//     const value = input.value; //optenemos el valor que ingresa el usuario en una variable, vamos a llamar al input donde ya guardamos previamente lo que escribe el usuario y llamamos a su propiedad input.value
    
//     const area = areaCuadrado(value);
    

//     alert (area);

// }

function selectFig() {
     
    const  figura = document.getElementById("figuras").value;
    
    if ( figura =="cuadrado"){ //esto es para que al seleccionar un valor de Select que en este caso es "cuadrado" oculta 2 input. 

        document.getElementById('lado2').style.display = 'none';
        document.getElementById('base').style.display = 'none';

    }
     else {

        document.getElementById('lado2').style.display = ''; // y con esto se vuelve a mostrar los elementos ocultos
        document.getElementById('base').style.display = '';

    } if (figura == "circunferencia"){

        document.getElementById('lado2').style.display = 'none';
        document.getElementById('base').style.display = 'none';


}
  }


function calcularP(){

    const input1 = document.getElementById("lado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("lado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("base");
    const value3 = Number(input3.value);

    const  figura = document.getElementById("figuras").value;
    //const  limpiar = document.getElementById("form").reset();

    if (figura =="triangulo"){

        const perimetro = perimetroTriangulo(value1,value2,value3);
        alert (perimetro);
        

    }
    if (figura =="cuadrado"){
      
        const perimetro = perimetroCuadrado(value1)
        
        alert(perimetro);
        
    }
    if (figura =="circunferencia"){
      
        const perimetro = perimetroCirculo(value1)
        
        alert(perimetro);
       
    } 
}

function calcularA(){

    const input1 = document.getElementById("lado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("lado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("base");
    const value3 = Number(input3.value);

    const  figura = document.getElementById("figuras").value;
    const  limpiar = document.getElementById("form").reset();
    if (figura =="triangulo"){

        const area = areaTriangulo(value1,value2,value3);
        alert (area);
        limpiar(form);

    }
    if (figura =="cuadrado"){
      
        const area = areaCuadrado(value1)
        
        alert(area);
        limpiar(form);
    } 
    if (figura == "circunferencia"){

        const area = areaCirculo(value1)
        
        alert(area);
        limpiar(form);

    }
}
