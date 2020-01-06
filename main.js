const apiKey = "c8a660196abab7e82229";
const baseUrl = "https://free.currconv.com/api/v7/";

const fromSelect = document.querySelector("#from-currency-select");
const amount = document.querySelector("#amount");
const toSelect = document.querySelector("#to-currency-select");
const convertBtn = document.querySelector("#convert");
const output = document.querySelector("#output");
const currencySelectors = document.getElementsByClassName("select-currency");

function convertCurrency(from, to) {
  const url = `${baseUrl}convert?q=${from}_${to}&compact=ultra&apiKey=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const conversionRate = json[`${from}_${to}`];
      let out = conversionRate * amount.value;
      showOutput(`${to} ${out}`);
    })
    .catch(err => console.log("ERROR:: " + err));
}

function showOutput(text) {
  output.innerHTML = text;
}

function populateCurrencies() {
  const url = `${baseUrl}currencies?apiKey=${apiKey}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(json => {
      // console.log(json.results["ALL"]);
      for (let cur in json.results) {
        // console.log(json.results[key].currencyName);

        for (let i = 0; i < currencySelectors.length; i++) {
          let option = document.createElement("option");
          option.value = cur;
          option.innerText = json.results[cur].currencyName;

          if (cur == "USD") option.selected = true;

          currencySelectors[i].appendChild(option);
        }
      }
    })
    .catch(err => console.error("ERROR:: " + err));
}

convertBtn.addEventListener("click", e => {
  e.preventDefault();
  convertCurrency(fromSelect.value, toSelect.value);
});

populateCurrencies();
