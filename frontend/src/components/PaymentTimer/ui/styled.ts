import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TimeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 260px;
  font-weight: 400;
`;

const MovingDot = styled.div<{ $angle: number }>`
  position: absolute;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-color: ${colors.primaryYellow};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg) translate(433px);
  transform-origin: center;

  transition: transform 1s linear;
`;

const StyledText = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: ${colors.timerGray};
`;

export { TimerContainer, TimeText, MovingDot, StyledText };
