import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Button,
  CloseButton,
  Container,
  CupWrapper,
  ExtraInfo,
  Grid,
  Overlay,
  StyledText,
} from './styled';

interface ProductModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  product: { image: string; name: string; price: number; x2: boolean };
  pay: Dispatch<SetStateAction<boolean>>;
  setPrice: Dispatch<SetStateAction<number>>;
}

const cups = ['200 мл.', '300 мл.', '400 мл.'];

const ProductModal: FC<ProductModalProps> = ({ setOpen, product, pay, setPrice }) => {
  const [activeCup, setActiveCup] = useState(0);

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={() => setOpen(false)}>
          <img src="/cross.svg" />
        </CloseButton>
        <div style={{ position: 'relative' }}>
          <img src={product.image} />
          {product.x2 && (
            <ExtraInfo>
              <p style={{ fontSize: 50, fontWeight: 600 }}>2x</p>
            </ExtraInfo>
          )}
        </div>
        <StyledText $size={82}>{product.name}</StyledText>
        <Grid>
          {cups.map((cup, index) => (
            <CupWrapper
              key={index}
              $index={index}
              $active={activeCup == index}
              onClick={() => setActiveCup(index)}
            >
              <img src="/cup.svg" />
              <StyledText $size={42}>{cup}</StyledText>
            </CupWrapper>
          ))}
        </Grid>
        <Button
          onClick={() => {
            pay(true);
            setPrice(product.price + 50 * activeCup);
          }}
        >
          <StyledText $size={48}>Оплатить</StyledText>
          <StyledText $size={100}>
            {(product.price + 50 * activeCup).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </StyledText>
        </Button>
      </Container>
    </Overlay>
  );
};

export default ProductModal;
