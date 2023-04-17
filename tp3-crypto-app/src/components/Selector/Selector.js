import React, { Component } from 'react'

export class Selector extends Component {
  handleCurrencyChange = (event) => {
    const currency = event.target.value;
    this.props.onCurrencyChange(currency);
  };

  handleCryptoChange = (event) => {
    const crypto = event.target.value;
    this.props.onCryptoChange(crypto);
  };

  render() {
    return (
      <div className='form p-5'>
        <div className='form-group'>
          <div className='row gap-3'>
            <select className='form-control col' id='start_currency' onChange={this.handleCurrencyChange}>
              <option value="ars">Peso argentino | ARS</option>
              <option value="usd">Dollar | USD</option>
            </select>
            <select className='form-control col' onChange={this.handleCryptoChange}>
              <option value="btc">Bitcoin | BTC</option>
              <option value="eth">Etherium | ETH</option>
              <option value="ada">Cardano | ADA</option>
              <option value="sol">Solana | SOL</option>
              <option value="dot">Polkadot | DOT</option>
              <option value="doge">Dogecoin | DOGE</option>
              <option value="xrp">Ripple | XRP</option>
              <option value="ltc">Litecoin | LTC</option>
              <option value="bch">Bitcoin Cash | BCH</option>
              <option value="link">Chainlink | LINK</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Selector