import logo from './logo.svg';
import './App.css';
import Selector from './components/Selector/Selector';
import InfoCard from './components/InfoCard/InfoCard';
import { useState, useEffect } from "react";
import {getAllData} from './api';

function App() {
  const [currency, setCurrency] = useState("ars");
  const [crypto, setCrypto] = useState("btc");
  const [data, setData] = useState(null);

  const handleCurrencyChange = (newCurrency) => {
    const fetchData = async () => {
      const newData = await getAllData(crypto, newCurrency);
      setData(newData);
    };

    fetchData()
      .then( ()=> setCurrency(newCurrency))
      .catch((err) => console.log(err))
  };

  const handleCryptoChange = (newCrypto) => {
    const fetchData = async () => {
      const newData = await getAllData(newCrypto, currency);
      setData(newData);
    };
    fetchData()
      .then( ()=> setCrypto(newCrypto))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getAllData(crypto, currency);
      setData(newData);
    };

    fetchData();
  }, [currency, crypto]);

  return (
    <div className="App">
      <h1 className='my-3 text-center'>Crypto <span style={{ color: 'dodgerblue' }}>App</span></h1>
      <Selector
        onCurrencyChange={handleCurrencyChange}
        onCryptoChange={handleCryptoChange}
      />
      {data &&
        <div className='container info-container'>
          <InfoCard
            currency={currency}
            crypto={crypto}
            price={data.DISPLAY[crypto.toUpperCase()][currency.toUpperCase()].PRICE}
            title={"Cotización del día"} />

          <InfoCard
            currency={currency}
            crypto={crypto}
            price={data.DISPLAY[crypto.toUpperCase()][currency.toUpperCase()].HIGH24HOUR}
            title={"Precio más alto del día"} />

          <InfoCard
            currency={currency}
            crypto={crypto}
            price={data.DISPLAY[crypto.toUpperCase()][currency.toUpperCase()].LOW24HOUR}
            title={"Precio más bajo del día"} />

          <InfoCard
            currency={currency}
            // crypto={crypto}
            price={currency.toUpperCase() + ' ' + data.DISPLAY[crypto.toUpperCase()][currency.toUpperCase()].CHANGEPCT24HOUR}
            title={"Variación última 24hs"} />
        </div>
      }
    </div>
  );
}


export default App;
