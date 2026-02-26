import { useParams } from "react-router"
import { fetchCoinData } from "../api/coinGecko";


export const CoinDetail = () => { 
  const {id} = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCoinData = async() => {
    try {
      const data = await fetchCoinData();
      setCoin(data);
    } catch (error) {
      
    }
  }
  return (
    <div>
      This is the Coin Page {id}
    </div>
  )
}
