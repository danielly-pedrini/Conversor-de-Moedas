// Mapeamento dos elementos
const converteDe = document.querySelector("#from-currency");
const convertePara = document.querySelector("#to-currency");
const converterValor = document.querySelector("#valor-a-converter");
const buttonConvert = document.querySelector("#convert-button");
const valorConvertido = document.querySelector("#valor-convertido");

// Valores das moedas em relação ao Real (BRL)
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

    if (isNaN(valueCurrency) || valueCurrency <= 0) {
        alert("Por favor, digite um valor válido!");
        return;
    }

    // Fórmula corrigida: multiplica pelo valor da moeda de origem e divide pelo valor da moeda de destino
    const result = (valueCurrency * valueCoinsToday[fromCurrency]) / valueCoinsToday[toCurrency];
    
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