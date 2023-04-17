import React from 'react'
import './styles.css'

function InfoCard(props) {
  const { currency, crypto, title, price } = props;

  return (
    <div className='card p-3'>
      <div className='card-body'>
        <h6 className='title'>{title}</h6>
        <div className='card-info'>
          <span className='crypto'>{crypto ? `1 ${crypto.toUpperCase()}` : ''}</span>
          <span className='currency'>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard