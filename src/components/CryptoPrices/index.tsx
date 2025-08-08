import { useEffect } from "react";
import styles from './styles.module.scss';
import { clsx } from "clsx";

// CryptoPrices.jsx
export const CryptoPrices = ({ prices, setPrices }:{prices: {btc:string, eth:string}, setPrices: React.Dispatch<React.SetStateAction<{btc:string, eth:string}>>}) => {
  useEffect(() => {
    const fetchIt = async () => {
      const btc = 67234 + Math.random() * 200;
      const eth = 3456 + Math.random() * 50;
      setPrices({ btc: btc.toFixed(2), eth: eth.toFixed(2) });
    };
    fetchIt();
    const id = setInterval(fetchIt, 30000);
    return () => clearInterval(id);
  }, [setPrices]);

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