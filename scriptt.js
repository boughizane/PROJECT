// converting the currency
const inputCurrency = document.getElementById("input_currency"); 
const outputCurrency = document.getElementById("output_currency");
const convertButton = document.querySelector(".Convert");

const conversionRates = {
	Dinar: {
	  Euro: 0.30,
	  Dollar: 0.32,
	},
	Euro: {
	  Dinar: 3.39,
	  Dollar: 1.10,
	},
	Dollar: {
	  Dinar: 3.90,
	  Euro: 0.91,
	},
  };
  

function convertCurrency() {
  const inputAmount = parseFloat(inputCurrency.value);
  const inputCurrencyType = inputCurrency.previousElementSibling.value;
  const outputCurrencyType = outputCurrency.previousElementSibling.value;

  if (!isNaN(inputAmount)) {
    const convertedAmount = inputAmount * conversionRates[inputCurrencyType][outputCurrencyType];
    outputCurrency.value = convertedAmount.toFixed(2);
  } else {
    outputCurrency.value = "";
  }
}

convertButton.addEventListener("click", convertCurrency);

// converting the currency
