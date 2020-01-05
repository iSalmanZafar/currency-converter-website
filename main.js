const accessKey = "54330fe9db79ee783c6b7f6a26225a89";
const baseUrl = "http://data.fixer.io/api/";
let url = baseUrl + "latest?access_key=" + accessKey;

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => {
    console.log("ERROR:: " + err);
  });
