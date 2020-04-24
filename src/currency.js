// import $ from 'jquery';


export class CurrencyService {
  async getCurrency(){
   try {
  //   let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
  let response = await fetch(`https://prime.exchangerate-api.com/v5/17c5f156ef4ab5c5d16bf484/latest/USD`);
    let jsonifiedResponse;
  if (response.ok && response.status === 200) {
    jsonifiedResponse = await response.json();
  } else {
    jsonifiedResponse = false;
  }
  return jsonifiedResponse;
} catch(error) {
  return false;
    }
  }
}