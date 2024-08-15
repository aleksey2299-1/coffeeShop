import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: end;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  width: 1080px;
  height: 88%;
  display: flex;
  background-color: ${colors.primaryWhite};
  flex-direction: column;
  padding-inline: 20px;
  padding-bottom: 35px;
  border-radius: 35px 35px 0 0;
  align-items: center;
  z-index: 1001;
  gap: 30px;
  overflow-y: scroll;
  scrollbar-width: none;
  animation: init-modal 1s;

  @keyframes init-modal {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 333px;
  min-height: 160px;
  border: 1px solid ${colors.border};
  border-radius: 0 0 20px 20px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const CupWrapper = styled.div<{ $active: boolean; $index: number }>`
  display: flex;
  background-color: ${(props) => (props.$active ? colors.primaryYellow : colors.primaryGray)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 35px;
  height: 366px;
  gap: 30px;
  cursor: pointer;

  img {
    opacity: ${(props) => (props.$active ? 1 : 0.5)};
    scale: ${(props) => 0.6 + props.$index * 0.2};
    transform-origin: bottom;'
  }
`;

const Button = styled.button`
  width: 100%;
  border-radius: 35px;
  background-color: ${colors.primaryYellow};
  border: none;
  display: flex;
  justify-content: space-between;
  padding-inline: 20px;
  align-items: center;
  min-height: 163px;
  cursor: pointer;
`;

const StyledText = styled.p<{ $size: number }>`
  font-size: ${(props) => props.$size}px;
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 30px;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background-color: ${colors.primaryYellow};
`;

export { Overlay, Container, CloseButton, Grid, CupWrapper, Button, StyledText, ExtraInfo };
