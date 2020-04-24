import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { CurrencyService } from "./currency";
import $ from "jquery";

$(document).ready(function () {
  $("#submit").click(function (event) {
    event.preventDefault();
    const usd = $("#num-input").val();
    console.log(usd);
  

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        $("#aud").text(`$1 = ${response.conversion_rates.AED} AED. Converting ${usd} to AED. You would have ${usd * response.conversion_rates.AED}`);
        console.log(`${response.conversion_rates.AED}`)
      }
    }
  });
});
