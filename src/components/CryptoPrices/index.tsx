
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { clsx } from "clsx";

const getBinancePrice2 = class {
  btc: WebSocket;
  eth: WebSocket;
  precioBtc: number;
  precioEth: number;
  setBtcPrice: (precioBtc: number) => void;
  setEthPrice: (precioEth: number) => void;
  getBtcPrice: () => number;
  getEthPrice: () => number;

  constructor(setPrices: React.Dispatch<React.SetStateAction<{ btc: string; eth: string }>>) {
    
    // eslint-disable-next-line prefer-const
    this.btc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
    // eslint-disable-next-line prefer-const
    this.eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
    this.precioBtc = 0;
    this.precioEth = 0;
    this.setBtcPrice = (precioBtc: number) => {
      this.precioBtc = precioBtc;
        
    }
    this.setEthPrice = (precioEth: number) => {
      this.precioEth = precioEth;
    }
    this.getBtcPrice = () => this.precioBtc;
    this.getEthPrice = () => this.precioEth;
    
    getBinancePrice2.getBinancePrice(this.btc, this.eth, this.setBtcPrice, this.setEthPrice);
    getBinancePrice2.setBinancePrice(this.precioBtc, this.precioEth, setPrices);
  }

  
   static async getBinancePrice(
    btc: WebSocket,
    eth: WebSocket,
    setBtcPrice: (precioBtc: number) => void,
    setEthPrice: (precioEth: number) => void,
  ) {

    btc.onmessage = (event) => {
      const trade = JSON.parse(event.data);
       setBtcPrice(trade.p);
       
    };
    eth.onmessage = (event) => {
      const trade = JSON.parse(event.data);
      setEthPrice(trade.p);
      
    };

    btc.onerror = (error) => {
      console.error('Error en la conexión de BTC:', error);
      alert('Error en la conexión de BTC. Por favor, inténtalo más tarde.');
    };
    eth.onerror = (error) => {
      console.error('Error en la conexión de ETH:', error);
      alert('Error en la conexión de ETH. Por favor, inténtalo más tarde.');
    };
  }

   static setBinancePrice(
    precioBtc: number,
    precioEth: number,
    setPrices: React.Dispatch<React.SetStateAction<{ btc: string; eth: string }>>) {

      setPrices({ btc: Number(precioBtc).toFixed(2), eth: Number(precioEth).toFixed(2) });
      
  }

  getPrices(setPrices: React.Dispatch<React.SetStateAction<{ btc: string; eth: string }>>) {
    setPrices({ btc: Number(this.precioBtc).toFixed(2), eth: Number(this.precioEth).toFixed(2) });
    
  }
};


// CryptoPrices.jsx
export const CryptoPrices = ({ prices, setPrices }:{prices: {btc:string, eth:string}, setPrices: React.Dispatch<React.SetStateAction<{btc:string, eth:string}>>}) => {
  // Initialize the WebSocket connection and set up the interval for fetching prices
 
  useEffect(() => {
    
    const binancePrice = new getBinancePrice2(setPrices);
    
    binancePrice.getPrices(setPrices);
     const interval = setInterval(() => {
      binancePrice.getPrices(setPrices);
    }, 10000);
    
    return () => {
      // Cleanup function to close WebSocket connections if needed
      binancePrice.btc.close();
      binancePrice.eth.close();
      clearInterval(interval);
      alert('WebSocket connections closed');
    };
  }, []);


  return (
    <section className={styles.crypto_prices}>
            <div className={styles.crypto_card}>
                <div className={styles.crypto_name}>
                    <i className={clsx("fab fa-bitcoin", styles.crypto_icon, styles.bitcoin_icon)}></i>
                    Bitcoin (BTC)
                    <span className={styles.live_indicator}>
                        <span className={styles.live_dot}></span>
                        LIVE
                    </span>
                </div>
                <div className={styles.crypto_price} id="btc_price">${prices.btc}</div>
                <div className={styles.winning_digits}>
                    <span>Winning 2 decimals:</span>
                    <span className={styles.digits} id="btc_digits">{prices.btc.slice(-2)}</span>
                </div>
            </div>

            <div className={styles.crypto_card}>
                <div className={styles.crypto_name}>
                    <i className={clsx("fab fa-ethereum", styles.crypto_icon, styles.ethereum_icon)}></i>
                    Ethereum (ETH)
                    <span className={styles.live_indicator}>
                        <span className={styles.live_dot}></span>
                        LIVE
                    </span>
                </div>
                <div className={styles.crypto_price} id="eth-price">${prices.eth}</div>
                <div className={styles.winning_digits}>
                    <span>Winning 2 decimals:</span>
                    <span className={styles.digits} id="eth-digits">{prices.eth.slice(-2)}</span>
                </div>
            </div>
        </section>
   
  );
}