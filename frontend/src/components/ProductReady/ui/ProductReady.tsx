import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Container, StyledText } from './styled';

interface ProductReadyProps {
  toMain: Dispatch<SetStateAction<boolean>>;
}

const ProductReady: FC<ProductReadyProps> = ({ toMain }) => {
  useEffect(() => {
    setTimeout(() => {
      toMain(false);
    }, 5000);
  }, []);

  return (
    <Container>
      <img src="/cup-ready.svg" />
      <StyledText $size={96}>Напиток готов!</StyledText>
      <StyledText $size={48}>Вы можете забрать его</StyledText>
    </Container>
  );
};

export default ProductReady;
