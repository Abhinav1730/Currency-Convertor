import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})//passing empty object inside usestate to prevent crashing if data is not fetched
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//data is converted into json and .then always ask for a callback
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[data,currency])//dependency array is used to call again wen changes are made in the items
    console.log(data)
    return data
}
export default useCurrencyInfo