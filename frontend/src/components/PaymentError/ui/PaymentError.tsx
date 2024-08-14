import { Dispatch, FC, SetStateAction } from 'react';
import { Button, ButtonsContainer, Container, StyledText } from './styled';

interface PaymentErrorProps {
  clearError: () => void;
  pay: Dispatch<SetStateAction<boolean>>;
}

const PaymentError: FC<PaymentErrorProps> = ({ clearError, pay }) => {
  return (
    <>
      <Container>
        <img src="/error.svg" />
        <StyledText>Оплата не прошла</StyledText>
      </Container>
      <ButtonsContainer>
        <Button onClick={() => clearError()}>Попробовать ещё раз</Button>
        <Button onClick={() => pay(false)} $transparend>
          Отмена
        </Button>
      </ButtonsContainer>
    </>
  );
};

export default PaymentError;
