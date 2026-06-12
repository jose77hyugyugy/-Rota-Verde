document.getElementById("calcular")
.addEventListener("click", function(){

let transporte =
Number(document.getElementById("transporte").value);

let distancia =
Number(document.getElementById("distancia").value);

if(transporte === 0 || distancia <= 0){

document.getElementById("resultado").innerHTML =
"⚠️ Preencha todos os campos.";

return;

}

let emissao =
(transporte * distancia) / 100;

let classificacao = "";

if(emissao <= 50){

classificacao = "🌟 Ouro Verde";

}

else if(emissao <= 100){

classificacao = "🥈 Prata Sustentável";

}

else{

classificacao = "🥉 Precisa Melhorar";

}

document.getElementById("resultado").innerHTML =

`
🚛 Emissão estimada: <strong>${emissao.toFixed(2)} kg de CO₂</strong>
`;

document.getElementById("classificacao")
.innerHTML = classificacao;

});