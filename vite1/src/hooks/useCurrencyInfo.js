import { useEffect, useState } from "react";
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

function useCurrencyInfo (currency){

    const [data,setData] = useState({});
    const freecurrencyapi = new Freecurrencyapi('fca_live_svBSgwlyqW4XY00TNpxvmLs3g6MQZGDLoWroxLJ0');
        useEffect(()=>{

            fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_svBSgwlyqW4XY00TNpxvmLs3g6MQZGDLoWroxLJ0&currencies&base_currency=${currency}`
            ).then((res)=>res.json())
            .then((res)=>setData(res.data))
        },[currency])
        return data;

        // freecurrencyapi.latest({
        //     base_currency: from,
        //     currencies: to
        // }).then(res => {
        //     // console.log(res);
        //     setData(res)
        // });
    
}

export default useCurrencyInfo;
