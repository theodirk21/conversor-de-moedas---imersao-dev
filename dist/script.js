// fuction só executada quando for chamada
function Converter() {
  var valorElemento = document.getElementById("valor"); //getElementById é para chamar o id do html
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor); //parseFloat para transformar para numero e não apenas como valor de paralavra como o padrão do javascript
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}