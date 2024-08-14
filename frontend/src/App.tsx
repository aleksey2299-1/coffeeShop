import { useState } from 'react';
import './App.css';
import { ShopPage } from './widgets/ShopPage';
// import { StartPage } from './widgets/StartPage';
import { PaymentPage } from './widgets/PaymentPage';
import { IProduct } from './widgets/ShopPage/types';

function App() {
  const [payment, setPayment] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [price, setPrice] = useState(0);

  return (
    <>
      {/* <StartPage></StartPage> */}
      {!payment && (
        <ShopPage
          pay={setPayment}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          setPrice={setPrice}
        />
      )}
      {payment && <PaymentPage pay={setPayment} product={currentProduct!} price={price} />}
    </>
  );
}

export default App;
