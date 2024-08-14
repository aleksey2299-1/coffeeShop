import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Emulator } from '../../Emulator/emulator';
import { Button, ButtonsContainer } from './styled';

interface CashPaymentProps {
  emulator: Emulator;
  price: number;
  makeProduct: () => void;
  pay: Dispatch<SetStateAction<boolean>>;
}

const CashPayment: FC<CashPaymentProps> = ({ emulator, price, makeProduct, pay }) => {
  const [cash, setCash] = useState(0);

  const addCash = (amount: number) => {
    console.log(amount);
    setCash((prev) => (prev = prev + amount));
  };

  useEffect(() => {
    emulator.BankCardCancel();
    emulator.StartCashin(addCash);
  }, []);

  useEffect(() => {
    if (cash >= price) {
      emulator.StopCashin();
      makeProduct();
    }
  }, [price <= cash, emulator]);

  return (
    <>
      <p style={{ alignSelf: 'center' }}>
        Вы внесли{' '}
        {cash.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        })}
      </p>
      <ButtonsContainer>
        <Button
          onClick={() => {
            emulator.StopCashin();
            emulator.startCard();
          }}
        >
          Оплатить картой
        </Button>
        <Button onClick={() => pay(false)}>Отмена</Button>
      </ButtonsContainer>
    </>
  );
};

export default CashPayment;
