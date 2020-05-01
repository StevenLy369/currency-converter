import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { CurrencyService } from "./currency";
import $ from "jquery";

$(document).ready(function () {
  $("#submit").click(function (event) {
    event.preventDefault();
    let usd = $("#num-input").val();
    let convert = $("#converting").val().toUpperCase();
    console.log(convert);
    
      (async () => {
        let currencyService = new CurrencyService();
        const response = await currencyService.getCurrency();
         console.log(response);

        
          getElements(response);

        function getElements(response) {
          if (convert == "CAD") {
            $("#display").text( `$1 = ${response.conversion_rates.CAD} CAD. Converting ${usd} dollars to CAD. You would have ${parseFloat(usd * response.conversion_rates.CAD.toFixed(2))} CAD`);
            $("#error").hide();
            $("#warning").hide();
          }
          if (convert == "HKD") {
            $("#display").text( `$1 = ${response.conversion_rates.HKD} HKD. Converting ${usd} dollars to HKD. You would have ${parseFloat(usd * response.conversion_rates.HKD.toFixed(2))} HKD`);
            $("#error").hide();
            $("#warning").hide();
          }
          if (convert == "DOP") {
            $("#display").text( `$1 = ${response.conversion_rates.DOP} DOP. Converting ${usd} dollars to DOP. You would have ${parseFloat(usd * response.conversion_rates.DOP.toFixed(2))} DOP`);
            $("#error").hide();
            $("#warning").hide();
          }
          if (convert == "SEK") {
            $("#display").text( `$1 = ${response.conversion_rates.SEK} sek. Converting ${usd} dollars to SEK. You would have ${parseFloat(usd * response.conversion_rates.SEK.toFixed(2))} SEK`);
            $("#error").hide();
            $("#warning").hide();
          }
          if (convert == "AUD") {
            $("#display").text( `$1 = ${response.conversion_rates.CAD} AUD. Converting ${usd} dollars to AUD. You would have ${parseFloat(usd * response.conversion_rates.AUD.toFixed(2))} AUD`);
            $("#error").hide();
            $("#warning").hide();
          }if (response.result == undefined){
              $("#error").text("Something is wrong with URL");
              $("#warning").hide();

          }if (response.result === "error"){
              $("#error").text("Something is wrong with api key");
              $("#warning").hide();

          }
          else{
            $("#error").text("Please input one of the 5 currencies we support; AUD, CAD, DOP, HKD, SEK");
          }
        }
      })();
    
  });
});
