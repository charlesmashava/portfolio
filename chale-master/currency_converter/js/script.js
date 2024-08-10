let dropList, fromCurrency, toCurrency, getButton, amountInput, convertedAmountInput;

document.addEventListener("DOMContentLoaded", () => {
  dropList = document.querySelectorAll("form select");
  fromCurrency = document.querySelector(".from select");
  toCurrency = document.querySelector(".to select");
  getButton = document.querySelector("form button");
  amountInput = document.querySelector("form input");
  convertedAmountInput = document.getElementById("convertedAmount");

  if (dropList && fromCurrency && toCurrency && getButton && amountInput && convertedAmountInput) {
    for (let i = 0; i < dropList.length; i++) {
      for (let currency_code in country_list) {
        let selected =
          i == 0
            ? currency_code == "USD"
              ? "selected"
              : ""
            : currency_code == "NPR"
            ? "selected"
            : "";
        let flagSrc = `https://flagcdn.com/48x36/${country_list[currency_code].toLowerCase()}.png`;
        let optionTag = `<option value="${currency_code}" ${selected} data-image="${flagSrc}">${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
      }
      dropList[i].addEventListener("change", (e) => {
        loadFlag(e.target)
      });
    }

    function loadFlag(element) {
      let imgTag = element.parentElement.querySelector("img");
      let selectedOption = element.options[element.selectedIndex];
      imgTag.src = selectedOption.getAttribute("data-image");
    }

    window.addEventListener("load", () => {
      getExchangeRate();
    });

    getButton.addEventListener("click", (e) => {
      e.preventDefault();
      updateExchangeRate();
    });

    amountInput.addEventListener("input", () => {
  
    });

    const exchangeIcon = document.querySelector("form .icon");
    exchangeIcon.addEventListener("click", () => {
      let tempCode = fromCurrency.value;
      fromCurrency.value = toCurrency.value;
      toCurrency.value = tempCode;
      loadFlag(fromCurrency);
      loadFlag(toCurrency);
      getExchangeRate();
      updateExchangeRate();
    });

    updateExchangeRate();
  } else {
    console.error("One or more required elements not found.");
  }
});

function updateExchangeRate() {
  getExchangeRate();
}

function getExchangeRate() {
  const exchangeRateTxt = document.getElementById("exchangeRate");
  let amountVal = amountInput.value;

  if (exchangeRateTxt) {
    if (amountVal == "" || amountVal == "0") {
      amountInput.value = "1";
      amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/3be364072e2ea3605c404db1/latest/${fromCurrency.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.result === "success") {
          let exchangeRate = result.conversion_rates[toCurrency.value];
          let totalExRate = (amountVal * exchangeRate).toFixed(2);
          exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;

          if (convertedAmountInput) {
            convertedAmountInput.value = totalExRate;
          }
        } else {
          console.error("API error:", result.result);
          exchangeRateTxt.innerText = "Something went wrong";
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);

        if (convertedAmountInput) {
          convertedAmountInput.value = "Error";
        }

        exchangeRateTxt.innerText = "Something went wrong";
      });
  }
}
