import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Emulator } from '../../Emulator/emulator';
import { Button, Container } from './styled';

interface CardPaymentProps {
  emulator: Emulator;
  price: number;
  makeProduct: () => void;
  pay: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

const CardPayment: FC<CardPaymentProps> = ({ emulator, price, makeProduct, pay, setError }) => {
  const [text, setText] = useState('');

  const cardHandler = (result: boolean) => {
    if (result) {
      makeProduct();
    } else {
      setError(true);
    }
  };

  const textHandler = (message: string) => {
    console.log(message);
    setText(message);
  };

  useEffect(() => {
    emulator.BankCardPurchase(price, cardHandler, textHandler);
  }, []);

  return (
    <>
      <Container>
        <img src="/card.svg" />
        <p style={{ whiteSpace: 'pre-wrap', alignSelf: 'center', textAlign: 'center' }}>{text}</p>
      </Container>
      <Container>
        <Button
          onClick={() => {
            emulator.BankCardCancel();
          }}
        >
          Внести наличные
        </Button>
        <Button onClick={() => pay(false)}>Отмена</Button>
      </Container>
    </>
  );
};

export default CardPayment;
