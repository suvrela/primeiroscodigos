var salario = 0; 
var salarioLiquido = 0; 
var salarioBase = parseFloat(prompt("Quanto é seu salário base? ")); 
var horaSemanalTrabalhada = parseFloat(prompt("Quantas horas semanais trabalha? "));
var hora = salarioBase/160
var horaExtra = hora*1.5;
if(horaSemanalTrabalhada >= 40) {
    salario = salarioBase +(horaExtra * (horaSemanalTrabalhada-40)); 
    salarioLiquido = salario * 0.975; 
    alert("Salário bruto é de R$"+ salario.toFixed(2)) ; 
    alert(" Salário líquido é de R$" + salarioLiquido.toFixed(2)); 
}
else {
    salario= salarioBase - (horaSemanalTrabalhada*hora); 
    salarioLiquido = salario * 0.975;
    alert("Salário bruto é de R$"+ salario.toFixed(2)); 
    alert(" Salário líquido é de R$" + salarioLiquido.toFixed(2)); 
}
