import { FC, useState } from 'react';
import { MovingDot, StyledText, TimerContainer, TimeText } from './styled';
import { ColorFormat, CountdownCircleTimer } from 'react-countdown-circle-timer';
import { colors } from '../../../shared/constants/colors';

const PaymentTimer: FC = () => {
  const [angle, setAngle] = useState(0);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(remainingSeconds).padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
  };

  return (
    <TimerContainer>
      <CountdownCircleTimer
        isPlaying
        duration={90}
        colors={colors.primaryYellow as ColorFormat}
        trailColor={colors.timerGray as ColorFormat}
        size={875}
        strokeWidth={5}
        trailStrokeWidth={4}
        isGrowing={true}
        onUpdate={(remainingTime: number) => {
          const percentage = (remainingTime / 90) * 100;
          const newAngle = (percentage / 100) * 360 - 92;
          setAngle(newAngle);
        }}
      >
        {({ remainingTime }) => (
          <TimeText>
            <p>{formatTime(remainingTime)}</p>
            <StyledText>Приготовление напитка</StyledText>
          </TimeText>
        )}
      </CountdownCircleTimer>
      <MovingDot $angle={angle} />
    </TimerContainer>
  );
};

export default PaymentTimer;
