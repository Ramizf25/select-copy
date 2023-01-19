function copySelection(param) {
  //console.log(param)
  const data = {
    startupName: null,
    tagline: null,
    website: null,
    location: null,
    companySize: null,
    markets: null,
    founder: null,
    fundingValuation:null,
    fundingRoundCount:null,
    fundingLatestRound:null,
  };
  try {
    // let selectedText = window.getSelection().toString().trim();

    var origin1 = window.location.origin;

    switch (origin1) {
      case "https://angel.co":
        var path = window.location.pathname;
        switch (path) {
          case "/jobs":
            let domain = document.getElementsByClassName(
              "styles_component__NjqHY"
            );
           
            if (domain.length > 0 && domain[0].baseURI) {
              domain = domain[0].baseURI;
            } else {
              
              throw new Error("Parameter is not a number!");
            }
            let startupName = document
              .getElementsByClassName("styles_motionContainer__0bu1f")[0]
              .getElementsByClassName("styles_name__zvQcy")[0].textContent;
            if (startupName.length > 0) {
              data.startupName = startupName;
            }
            let tagline = document
              .getElementsByClassName("styles_motionContainer__0bu1f")[0]
              .getElementsByClassName("styles_subheader__SIX10")[0].textContent;
            if (tagline.length > 0) {
              data.tagline = tagline;
            }
            let website = document
              .getElementsByClassName("styles_websiteLink___Rnfc")[0]
              .getElementsByTagName("a")[0]
              .getAttribute("href");
            if (website.length > 0) {
              data.website = website;
            }
            // let linkdin = document.getElementsByClassName("styles_component__g_WAp")[0].getElementsByTagName("li")[5].innerHTML;
            let location = document
              .getElementsByClassName("styles_metadata__NlXW0")[0]
              .getElementsByTagName("dt")[1].innerText;
            if (location.length > 0) {
              data.location = location;
            }
            let companySize = document
              .getElementsByClassName("styles_metadata__NlXW0")[0]
              .getElementsByTagName("dt")[3].innerText;
            if (companySize.length > 0) {
              data.companySize = companySize;
            }
            let markets = document.getElementsByClassName(
              "styles_markets__siYMy"
            )[0].innerText;
            if (markets.length > 0) {
              data.markets = markets;
            }
            // let fundingDetailed = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].innerText;
            let fundingValuation = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[0].textContent;
            if (fundingValuation.length>0){
              data.fundingValuation=fundingValuation
            }
            let fundingRoundCount = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[1].textContent;
            if (fundingRoundCount.length>0){
              data.fundingRoundCount=fundingRoundCount
            }
            let fundingLatestRound = document.getElementsByClassName("styles_component__ivX7J styles_threeColumn__Txyiv")[0].getElementsByClassName("styles-module_component__3ZI84 styles_value__Bfjke text-lg font-medium")[2].textContent;
            if (fundingLatestRound.length>0){
              data.fundingLatestRound=fundingLatestRound
            }
            let founder = document.getElementsByClassName(
              "styles_component__ivX7J styles_twoColumn__XlBrn"
            )[0].innerText;
            if (founder.length > 0) {
              data.founder = founder;
            }
            console.log("angel.co", data);
            break;
          default:
            alert("This extension only works in https://angel.co/jobs/");
        }
        break;
      case "https://www.linkedin.com":
        var path = window.location.pathname;
        switch (path) {
          case path:
            let startupName = document.getElementsByClassName("org-top-card__primary-content org-top-card-primary-content--zero-height-logo org-top-card__primary-content--ia")[0].getElementsByTagName("span")[0].innerText;
            if (startupName.length>0){
              data.startupName=startupName;
            }
            let tagline = document.getElementsByClassName("org-top-card__primary-content org-top-card-primary-content--zero-height-logo org-top-card__primary-content--ia")[0].getElementsByClassName("org-top-card-summary__tagline t-16 t-black")[0].innerText;
            if (tagline.length>0){
              data.tagline=tagline;
            }
            let website = document.getElementsByClassName("link-without-visited-state ember-view")[0].innerText 
            if (website.length>0){
              data.website=website;
            }
            let location = document.getElementsByClassName("overflow-hidden")[0].getElementsByTagName("dd")[5].innerText;
            if (location.length>0){
              data.location=location;
            }
            let companySize = document.getElementsByClassName("overflow-hidden")[0].getElementsByTagName("dd")[3].innerText;
            if (companySize.length>0){
              data.companySize=companySize;
            }
            let markets = document.getElementsByClassName("overflow-hidden")[0].getElementsByTagName("dd")[2].innerText;
            if (markets.length>0){
              data.markets=markets;
            }
             
            console.log("Linkdin", data);
          break;
          default:
            alert("This extension only works in https://www.linkedin.com/company/");
        }
        break;
      default:
        alert("This extension does not support the current website");
    }
  } catch (e) {
    
  }
  console.log("Copied following data!!",data)
  navigator.clipboard.writeText(JSON.stringify(data));
}

document.addEventListener("copy", copySelection);
