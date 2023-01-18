let nextId = 0;
data = [];

function copySelection() {
  // let selectedText = window.getSelection().toString().trim();
  let domain = document.getElementsByClassName("styles_component__NjqHY")[0].baseURI;
  let startupName = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
  .getElementsByClassName("styles_name__zvQcy")[0].textContent;
  let tagline = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
  .getElementsByClassName("styles_subheader__SIX10")[0].textContent; 
  let website = document.getElementsByClassName("styles_websiteLink___Rnfc")[0].innerHTML;
  // let linkdin = document.getElementsByClassName("styles_component__g_WAp")[0].getElementsByTagName("li")[5].innerHTML;
  let location = document.getElementsByClassName("styles_metadata__NlXW0")[0].getElementsByTagName("dt")[1].innerText;
  let companySize = document.getElementsByClassName("styles_metadata__NlXW0")[0].getElementsByTagName("dt")[3].innerText;
  let markets = document.getElementsByClassName("styles_markets__siYMy")[0].innerText;
	// let fundingDetailed = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].innerText;
	// let fundingValuation = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[0].textContent; 
	// let fundingRoundCount = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[1].textContent;
	// let fundingLatestRound = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[2].textContent; 
	let founder = document.getElementsByClassName("styles_component__ivX7J styles_twoColumn__XlBrn")[0].innerText ;
  
  console.log(startupName,tagline,website,location,companySize,markets,founder)
  
  // ,website,location,companySize,markets,founder,
  //   fundingValuation,fundingRoundCount,fundingLatestRound);
  if (domain === "https://angel.co/jobs") {
    data.push(startupName,tagline,website,location,companySize,markets,founder);
    navigator.clipboard.writeText(JSON.stringify(data));
  }
}


document.addEventListener("copy", copySelection);