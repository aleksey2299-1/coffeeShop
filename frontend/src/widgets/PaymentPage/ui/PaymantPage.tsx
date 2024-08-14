import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Container, Content } from './styled';
import { Emulator } from '../../../components/Emulator/emulator';
import { observer } from 'mobx-react-lite';
import { IProduct } from '../../ShopPage/types';
import { CardPayment } from '../../../components/CardPayment';
import { PaymentTimer } from '../../../components/PaymentTimer';
import { CashPayment } from '../../../components/CashPayment';
import { PaymentError } from '../../../components/PaymentError';
import { colors } from '../../../shared/constants/colors';
import { Product404 } from '../../../components/Product404';
import { ProductReady } from '../../../components/ProductReady';

interface PaymentPageProps {
  pay: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
  price: number;
}

const PaymentPage: FC<PaymentPageProps> = observer(({ pay, product, price }) => {
  const [emulator] = useState(() => new Emulator());
  const [paymentError, setPaymentError] = useState(false);
  const [productError, setProductError] = useState(false);
  const [productGiven, setProductGiven] = useState(false);

  useEffect(() => {
    emulator.startCard();
  }, []);

  const productHandler = (result: boolean) => {
    if (!result) setProductError(true);
    setProductGiven(result);
  };

  const makeProduct = () => {
    emulator.Vend(product.id, productHandler);
  };

  const tryAgainHandler = () => {
    setPaymentError(false);
    emulator.startCard();
  };

  return (
    <Container
      $color={
        paymentError
          ? colors.error
          : emulator.isVend
          ? colors.primaryWhite
          : productError
          ? colors.warning
          : undefined
      }
    >
      <Content>
        {productGiven && <ProductReady toMain={pay} />}
        {productError && <Product404 close={pay} />}
        {paymentError && <PaymentError clearError={tryAgainHandler} pay={pay} />}
        {(emulator.bankCardTransactionActive || emulator.cashInActive) && (
          <p style={{ alignSelf: 'center' }}>
            К оплате{' '}
            {price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </p>
        )}
        {emulator.cashInActive && (
          <CashPayment emulator={emulator} price={price} makeProduct={makeProduct} pay={pay} />
        )}
        {emulator.bankCardTransactionActive && (
          <CardPayment
            emulator={emulator}
            price={price}
            makeProduct={makeProduct}
            pay={pay}
            setError={setPaymentError}
          />
        )}
        {emulator.isVend && <PaymentTimer />}
      </Content>
    </Container>
  );
});

export default PaymentPage;
