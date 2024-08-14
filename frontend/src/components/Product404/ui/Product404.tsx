import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Container, StyledText } from './styled';

interface Product404Props {
  close: Dispatch<SetStateAction<boolean>>;
}

const Product404: FC<Product404Props> = ({ close }) => {
  return (
    <>
      <Container>
        <img src="/warning.svg" />
        <StyledText>
          Данного напитка
          <br /> нет в наличии
        </StyledText>
      </Container>
      <Button onClick={() => close(false)}>Вернуться на главную</Button>
    </>
  );
};

export default Product404;
