import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Currency } from './currency';
import $ from 'jquery';





$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
        const usd = $("#num-input").val();
        console.log(usd);
    

    (async () => {
        let currency = new Currency();
        const response = await currency.getCurrency();
        getElements(response);
        
        function getElements(response){
            if(response){
                $(".aud").text(`${response.conversion_rate.AUD} * usd`);

            }
        }
    })


})

})
