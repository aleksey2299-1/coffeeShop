import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const Container = styled.div<{ $color?: string }>`
  background-color: ${(props) => (props.$color ? props.$color : colors.primaryYellow)};
  width: 1080px;
  height: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 35px;
  font-size: 72px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70%;
  flex-direction: column;
  width: 100%;
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

export { Container, Content, Button };
