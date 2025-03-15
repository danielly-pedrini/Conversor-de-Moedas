// Mapeamento correto dos elementos
const converteDe = document.querySelector("#from-currency");
const convertePara = document.querySelector("#to-currency");
const converterValor = document.querySelector("#valor-a-converter");
const buttonConvert = document.querySelector("#convert-button");
const valorConvertido = document.querySelector("#valor-convertido");

// Valores das moedas em relação ao Real (BRL)
const valueCoinsToday = {
    'BRL': 1.00,    // Real (base)
    'USD': 0.20,    // 1 Real = 0.20 Dólar (ou 1 Dólar = 5.00 Reais)
    'EUR': 0.17,    // 1 Real = 0.17 Euro (ou 1 Euro = 6.00 Reais)
    'GBP': 0.14     // 1 Real = 0.14 Libra (ou 1 Libra = 7.00 Reais)
};

function convertCurrency() {
    const fromCurrency = converteDe.value;
    const toCurrency = convertePara.value;
    const valueCurrency = parseFloat(converterValor.value);

    if (isNaN(valueCurrency) || valueCurrency <= 0) {
        alert("Por favor, digite um valor válido!");
        return;
    }

    // Converter para BRL primeiro (como moeda base) e depois para a moeda desejada
    const valueInBRL = fromCurrency === 'BRL' ? 
        valueCurrency : 
        valueCurrency / valueCoinsToday[fromCurrency] * valueCoinsToday['BRL'];
    
    // Converter de BRL para a moeda de destino
    const result = valueInBRL * (1 / valueCoinsToday[toCurrency]);
    
    // Formatação do resultado com símbolo da moeda
    const currencySymbols = {
        'BRL': 'R$',
        'USD': 'US$',
        'EUR': '€',
        'GBP': '£'
    };
    
    valorConvertido.value = `${currencySymbols[toCurrency]} ${result.toFixed(2)}`;
}

// Event Listeners
converteDe.addEventListener("change", function() {
    const convertCoinsFrom = converteDe.value;
    console.log("Moeda de origem:", convertCoinsFrom);
});

convertePara.addEventListener("change", function() {
    const convertCoinsTo = convertePara.value;
    console.log("Moeda de destino:", convertCoinsTo);
});

buttonConvert.addEventListener("click", convertCurrency);

// Permitir apenas números e ponto no campo de valor
converterValor.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d.]/g, '');
    // Evitar múltiplos pontos decimais
    const parts = this.value.split('.');
    if (parts.length > 2) {
        this.value = parts[0] + '.' + parts.slice(1).join('');
    }
});

// Permitir conversão ao pressionar Enter no campo de valor
converterValor.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buttonConvert.click();
    }
});

// Inicializar os campos
valorConvertido.readOnly = true;