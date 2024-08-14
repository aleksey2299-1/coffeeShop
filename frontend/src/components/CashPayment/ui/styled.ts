import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryWhite};
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

export { ButtonsContainer, Button };
