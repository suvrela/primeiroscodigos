alert('Supermecado do Torquato')
let produtos = 0; preco = 0; precoTotal = 0;
while (preco!= -1) {
    preco = parseFloat(prompt("Preço R$ "));
    precoTotal += preco;
    produtos ++;
}
precoTotal +=1;
produtos -=1;
alert("Quantidade: "  + produtos +  " R$:" + precoTotal); 
