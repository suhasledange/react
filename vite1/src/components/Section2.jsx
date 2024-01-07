import React, { useState } from 'react'
import InputForm from './InputForm'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
const Section2 = () => {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("USD")
  const [to,setTo] = useState("INR")
  const [convertedAmount,setConvertedAmount] = useState(0)

  // const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className='bg-gray-200 p-2'>
    <div className='max-w-screen-xl mx-auto space-x-3 p-3 px-5 m-2 mb-4 text-gray-700 shadow-md font-medium bg-white'>
       <div className="w-full border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form className=''
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                  <div className='flex items-center justify-center'>
                    <div className="w-full">
                        <InputForm
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button
                            type="button"
                            className="border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full">
                        <InputForm
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                  </div>
                    <button type="submit" className=" bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
        </div>
    </div>
    </div>

  )
}

export default Section2
