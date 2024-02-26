import { useState, useEffect } from "react";
import "./App.css";
import { data } from "autoprefixer";

function App() {
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [amt, setamt] = useState();
  const [res, setres] = useState();
  const [data, setdata] = useState({});

  function useCurrencyInfo(currency) {
    useEffect(() => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setdata(res[currency]));
      console.log(data);
    }, [currency]);
    return data;
  }

  const currencyInfo = useCurrencyInfo(from);

  const convert = () => {
    setres(amt * currencyInfo[to]);
  };

  return (
    <>
      <div className="text-white h-screen w-full bg-zinc-800 flex flex-col items-center justify-center">
        <div className="p-4 bg-slate-400 flex gap-2 rounded-lg justify-center items-center">
          <label htmlFor="">From</label>
          <input
            className="rounded-lg text-black p-4 font-bold uppercase text-center"
            type="text"
            value={from}
            placeholder="From"
            onChange={(e) => setfrom(e.target.value)}
          />
          <label htmlFor="">To</label>
          <input
            className="rounded-lg text-black p-4 font-bold uppercase text-center"
            type="text"
            value={to}
            placeholder="To"
            onChange={(e) => setto(e.target.value)}
          />

          <input
            className="rounded-lg text-black p-4 font-bold uppercase text-center"
            type="text"
            value={amt}
            onChange={(e) => setamt(e.target.value)}
          />

          <div className="bg-zinc-500 flex flex-col ">
            <button className="p-4 rounded-lg m-1" onClick={convert}>
              convert
            </button>
          </div>
        </div>
        <div className="text-center text-orange-300 bg-zinc-800 mt-5 p-5">
          {res}
        </div>
      </div>
    </>
  );
}

export default App;
