import { useNavigate, useParams } from "react-router"
import { fetchCoinData } from "../api/coinGecko";
import { useEffect, useState } from "react";


export const CoinDetail = () => { 
  const {id} = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCoinData();
  }, [id]);

  const loadCoinData = async() => {
    try {
      const data = await fetchCoinData(id);
      setCoin(data);
    } catch (error) {
      console.error("Error fetching Coin", error)
    }finally{
      setIsLoading(false);
    }
  }

  if(isLoading) {
    return(
      <div className="app">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading crypto data...</p>
        </div>

      </div>
    );
  }

  if(!coin) {
    return(
      <div className="app">
        <div className="no-results">
          <p>No Coin was found</p>
          <button className="not-found" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }
  return (
    <div className="app">

        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <h1>🗺 Crypto World</h1>
                    <p>Cryptocurrency market data and prices in real-time.</p>
                </div>
                <button className="not-found" onClick={() => navigate("/")}>⬅ Go Back</button>
                
            </div>
        </header>
      </div>
  )
}
