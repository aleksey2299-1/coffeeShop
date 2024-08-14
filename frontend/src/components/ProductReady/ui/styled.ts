import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p<{ $size: number }>`
  font-size: ${(props) => props.$size}px;
`;

export { Container, StyledText };
