import { useEffect } from "react";
import { useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates(){
    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate] = useState('');

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then((response)=> response.json())
        .then((json)=> {
            let newRate = '';
            let obj = json.bitcoin;
            setRate(obj[currency.toLowerCase()])
        })
        return () =>{
            setCurrency(currencies[0]);
        }
    },[currency])

    return (
        <>
        <div>
            <h3>Bitcoin Exchange Rate {currency} {rate}</h3>
            <label >Choose currency:</label>
            <select value={currency} onChange={e=>{setCurrency(e.target.value)}}>
                {options}
            </select>
        </div>
        </>
    )
}

export default BitcoinRates