// Mapeamento correto dos elementos
const converteDe = document.querySelector("#from-currency");
const convertePara = document.querySelector("#to-currency");
const converterValor = document.querySelector("#valor-a-converter");
const buttonConvert = document.querySelector("#convert-button");
const valorConvertido = document.querySelector("#valor-convertido");

const valueCoinsToday = {
    'BRL': 1.00,    
    'USD': 5.00,    
    'EUR': 6.00,   
    'GBP': 7.00  
};

function convertCurrency() {
    const fromCurrency = converteDe.value;
    const toCurrency = convertePara.value;
    const valueCurrency = parseFloat(converterValor.value);

    if (!valueCurrency) {
        alert("Por favor, digite um valor válido!");
        return;
    }

    // Correção na lógica de conversão
    const result = (valueCurrency / valueCoinsToday[fromCurrency]) * valueCoinsToday[toCurrency];
    
    valorConvertido.value = result.toFixed(2);
}

// Event Listeners
converteDe.addEventListener("change", function() {
    const convertCoinsFrom = converteDe.value;
    console.log("moeda de origem", convertCoinsFrom);
});

convertePara.addEventListener("change", function() {
    const convertCoinsTo = convertePara.value;
    console.log("moeda de destino", convertCoinsTo);
});

buttonConvert.addEventListener("click", convertCurrency);

converterValor.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d.]/g, '');
});