/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    // Verificar si hay contenido en #dominios
    if (document.querySelector("#dominios").innerHTML.trim() === "") {
      let domText = generadorDom();
      document.querySelector("#dominios").innerHTML = domText;
    } else {
      // Limpiar el contenido del elemento
      document.querySelector("#dominios").innerHTML = "";
    }
  });
};

let generadorDom = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let TLD = ["com", "net", "org", "ve", "info", "edu", "biz"];

  let domains = [];

  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        for (let i = 0; i < TLD.length; i++) {
          let domain = "www." + pronoun[x] + adj[y] + noun[z] + "." + TLD[i];
          domains.push(domain);
        }
      }
    }
  }
  return domains.join("<br>");
};

console.log("consola ");
