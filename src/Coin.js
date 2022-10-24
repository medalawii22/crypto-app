import React from 'react'
import './coin.css'

const Coin = ({image,alt,name,symbol,current_price,total_volume,market_cap,price_change_percentage_24h}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt={alt}/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${current_price}</p>
                {price_change_percentage_24h>0?
                <p className='percent green'>{price_change_percentage_24h.toFixed(2)}%</p>:
                <p className='percent red'>{price_change_percentage_24h.toFixed(2)}%</p>}
                <p className='coin-volume'>${total_volume.toLocaleString()}</p>
                <p className='coin-marketcap'>Mrkt cap :${market_cap.toLocaleString()}</p>
            </div>
        </div>    
    </div>
  )
}

export default Coin
