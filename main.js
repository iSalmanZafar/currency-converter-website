const apiKey = "c8a660196abab7e82229";
const baseUrl = "https://free.currconv.com/api/v7/";

const fromSelect = document.querySelector("#from-currency-select");
const amount = document.querySelector("#amount");
const toSelect = document.querySelector("#to-currency-select");
const convertBtn = document.querySelector("#convert");
const output = document.querySelector("#output");

function convertCurrency(from, to) {
  url = `${baseUrl}convert?q=${from}_${to}&compact=ultra&apiKey=${apiKey}`;
  // console.log("URL:: " + url);
  fetch(url)
    .then(res => res.json())
    .then(json => {
      const conversionRate = json[`${from}_${to}`];
      let out = conversionRate * amount.value;
      showOutput(out);
    })
    .catch(err => console.log("ERROR:: " + err));
}

function showOutput(text) {
  output.innerHTML = text;
}

convertBtn.addEventListener("click", e => {
  e.preventDefault();
  convertCurrency(fromSelect.value, toSelect.value);
});
