import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryWhite};
  color: ${colors.warning};
  border-radius: 35px;
  font-size: 48px;
  width: 100%;
  border: none;
  height: 163px;
  align-self: end;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${colors.primaryGray};
  }
`;

const StyledText = styled.p`
  font-size: 72px;
  text-align: center;
  color: ${colors.primaryWhite};
  font-weight: 600;
`;

export { Container, Button, StyledText };
