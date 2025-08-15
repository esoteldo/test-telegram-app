import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react';
import { useMainButton } from '@/hooks/useMainButton';
/* import data from '@/assets/products.json';
import ProductCard from '@/components/ProductCard'; */
import Header from '@/components/Header';
import { BottomNav} from '@/components/BottonMenu';

import { useAppState } from '@/context/app-context.tsx';
import styles from './styles.module.scss';
import { TicketSection } from '@/components/TicketSection';
import { PrizeSection } from '@/components/PrizesSection';
import { CryptoPrices } from '@/components/CryptoPrices';
import { PastWinners } from '@/components/PastWinners';
import { HowItWorks } from '@/components/HowItWorks';

const Main = () => {
  const [prices, setPrices]  = useState({ btc: "0.000", eth: "0.000" });
  const navigate = useNavigate();
  const { cart, /* addProduct, removeProduct */ } = useAppState();
  const address = useTonAddress();
  const { open } = useTonConnectModal();

  const [openWinners, setOpen] = useState(false);

  

  const handleViewOrder = useCallback(() => {
    navigate('/cart');
  }, [navigate]);

  const handleConnectWallet = useCallback(() => {
    open();
  }, [open]);

  const mainButton = useMainButton(address
    ? { text: 'View order', onClick: handleViewOrder }
    : { text: 'Connect wallet', onClick: handleConnectWallet });

  useEffect(() => {
    if (Object.keys(cart).length && !mainButton.isVisible) {
      mainButton.show();
      return;
    }
    if (!Object.keys(cart).length) {
      mainButton.hide();
    }
  }, [cart, mainButton, address]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <h1>CryptoWin</h1>
        
        <PrizeSection/>

        <CryptoPrices prices={prices} setPrices={setPrices} />
      
        <TicketSection/>

        <PastWinners open={openWinners} toggle={() => setOpen(!openWinners)} />

      <HowItWorks />
      
      {/* {data.products.map(product => (
        
        <ProductCard
          product={product.id in cart ? cart[product.id] : { ...product, quantity: 0 }}
          key={product.id}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
        />
      ))} */}
      <BottomNav />
    </div>
  );
};

export default Main;
