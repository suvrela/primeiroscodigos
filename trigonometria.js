var trigonometria = prompt("Deseja realizar qual operação: \n 1. Seno \n 2. Cosseno \n 3. Tangente ");
var angulo = prompt("Digite o ângulo: "); 

switch (trigonometria) { 
    case '1': 
        alert(Math.sin((angulo*Math.PI)/180)); break;

     case '2': 
        alert(Math.cos(angulo*Math.PI)/180); break; 
    case '3': 
        alert(Math.tan(angulo*Math.PI)/180); break;    

default: 
    alert("Opção inválida"); }
//var numero= prompt("Numero")
//alert(Math.sin((numero*Math.PI)/180)); 