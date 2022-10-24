import axios from 'axios'
import { useEffect, useState } from 'react';
import Coin from './Coin';
import './App.css'

function App() {
  const [coins ,setCoins]=useState([])

  const [search,setSearch]=useState('') 
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false")
        .then(res=>{
          setCoins(res.data)
          console.log(res.data[0]);
        })
        .catch(error=>console.log(error))
  }, [])

const handleChange=(e)=>{
  setSearch(e.target.value)
}

const filteredCoins=coins.filter(coin=>{
  return coin.name.toLowerCase().includes(search.toLowerCase())
})

  // or we could just do like this
  //

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder='Search'
          onChange={handleChange} />
        </form>
      </div>
      {
        filteredCoins.map(coin=>{
          return(
          <Coin {...coin} key={coin.id}/>
          )
        })
      }
    </div>
  );
}

export default App;
 