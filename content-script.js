// import { saveJSON, loadJSON } from "./readwritejson";

let nextId = 0;
data = [];

function copySelection() {
  // let selectedText = window.getSelection().toString().trim();
  let startupName = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
  .getElementsByClassName("styles_name__zvQcy")[0].textContent;
  let tagline = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
  .getElementsByClassName("styles_subheader__SIX10")[0].textContent; 
  let website = document.getElementsByClassName("styles_websiteLink___Rnfc")[0].textContent;
  let location = document.getElementsByClassName("styles-module_component__vnXTJ m-0 text-sm")[0].textContent; 
  let founder = document.getElementsByClassName("styles_identity__CgS8E")[0].getElementsByClassName("styles_component__UCLp3 styles_defaultLink__eZMqw")[0].innerHTML 
  let fundingValuation = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[0].textContent 
  
  console.log(startupName,tagline,website,location,founder,fundingValuation);
  if (tagline) {
    data.push(startupName,tagline,website,location,founder,fundingValuation);
    navigator.clipboard.writeText(JSON.stringify(data));
  }
}


document.addEventListener("copy", copySelection);
