import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button<{ $transparend?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$transparend ? colors.error : colors.primaryWhite)};
  color: ${(props) => (props.$transparend ? colors.primaryWhite : colors.error)};
  border: ${(props) => (props.$transparend ? `1px solid ${colors.primaryWhite}` : 'none')};
  border-radius: 35px;
  font-size: 48px;
  width: 100%;
  height: 163px;
  align-self: end;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.$transparend ? '#F04B4B' : colors.primaryGray)};
  }
`;

const StyledText = styled.p`
  color: ${colors.primaryWhite};
  font-size: 72px;
`;

export { Container, Button, ButtonsContainer, StyledText };
