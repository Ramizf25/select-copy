function alertFunction(){
	alert('Hello world');
}






// function copySelection() {
  
// 	// let selectedText = window.getSelection().toString().trim();
// 	let domain = document.getElementsByClassName("styles_component__NjqHY")[0].baseURI;
// 	let startupName = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
// 	.getElementsByClassName("styles_name__zvQcy")[0].textContent;
// 	let tagline = document.getElementsByClassName("styles_motionContainer__0bu1f")[0]
// 	.getElementsByClassName("styles_subheader__SIX10")[0].textContent; 
// 	let website = document.getElementsByClassName("styles_websiteLink___Rnfc")[0].innerHTML;
// 	let linkdin = document.getElementsByClassName("styles_component__g_WAp")[0].getElementsByTagName("li")[5].innerHTML;
// 	let location = document.getElementsByClassName("styles_metadata__NlXW0")[0].getElementsByTagName("dt")[1].innerText;  
// 	let companySize = document.getElementsByClassName("styles_metadata__NlXW0")[0].getElementsByTagName("dt")[3].innerText;
// 	let locationDetailed = document.getElementsByClassName("styles_metadata__NlXW0")[0].innerText;
// 	let markets = document.getElementsByClassName("styles_markets__siYMy")[0].innerText;
// 	let fundingDetailed = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].innerText;
// 	let fundingValuation = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[0].textContent; 
// 	let fundingRoundCount = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[1].textContent;
// 	let fundingLatestRound = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[2].textContent; 
// 	let founder = document.getElementsByClassName("styles_component__ivX7J styles_twoColumn__XlBrn")[0].innerText ;
	
// 	console.log(domain,startupName,tagline,website,linkdin,location,companySize,markets,
// 	  fundingValuation,fundingRoundCount,fundingLatestRound,founder);


// 	  if (domain === "https://angel.co/jobs") {
// 		data.push(domain,startupName,tagline,website,location,founder,fundingValuation);
// 		navigator.clipboard.writeText(JSON.stringify(data));
// 	  }
// 	  else{
// 		alert("This page is not supported")
// 	  }











// const hidePage = `body > :not(.beastify-image) {
//     display: none;
//   }`;


// function listenForClicks() {
// document.addEventListener("click", (e) => {

// /**
// * Given the name of a beast, get the URL to the corresponding image.
// */
// function beastNameToURL(beastName) {
// switch (beastName) {
// case "Save":
// alert("hello world");

// }
// }

// function beastify(tabs) {
// browser.tabs.insertCSS({code: hidePage}).then(() => {
// let url = beastNameToURL(e.target.textContent);
// browser.tabs.sendMessage(tabs[0].id, {
// command: "beastify",
// beastURL: url
// });
// });
// }


// if (e.target.type === "reset") {
// browser.tabs.query({active: true, currentWindow: true})
// .then(reset)
// .catch(reportError);
// } else {
// browser.tabs.query({active: true, currentWindow: true})
// .then(beastify)
// .catch(reportError);
// }
// });
// }

// browser.tabs.executeScript({file: "/beastify.js"})
// .then(listenForClicks)
