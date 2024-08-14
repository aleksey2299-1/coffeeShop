import styled from 'styled-components';
import { colors } from '../../../shared/constants/colors';

const Wrapper = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: 1920px;
  gap: 65px;
  transition: background-color 1s;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 21px 0 21px;
  font-weight: 600;
  font-size: 64px;
`;

const RegistrationWrappper = styled.div`
  background-color: ${colors.primaryWhite};
  display: flex;
  align-items: center;
  border-radius: 35px;
  width: 392px;
  height: 103px;
  gap: 20px;
  box-shadow: 0px 4px 29px 0px #a5a5a526;
`;

const TabsWrapper = styled.div`
  position: relative;
  background-color: ${colors.primaryWhite};
  height: 100%;
  border-radius: 35px 35px 0 0;
  display: flex;
  overflow-x: hidden;
`;

const Tab = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  background-color: ${(props) => (props.$active ? colors.primaryWhite : colors.primaryGray)};
  height: 100%;
  cursor: pointer;
  transition: background-color 1s;
`;

const TabCircle = styled.div<{ $color: string }>`
  top: 90px;
  position: absolute;
  left: -80px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  height: 161px;
  width: 161px;
  z-index: 1;
  animation: init 1s;

  @keyframes init {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TabText = styled.p`
  font-size: 32px;
  text-align: center;
  white-space: pre-wrap;
`;

const ContentWrapper = styled.div<{ $triangleMiddle: number }>`
  clip-path: polygon(
    0 0,
    ${(props) => `calc(${props.$triangleMiddle}px - 50px) 0,
    ${props.$triangleMiddle}px 50px,
    calc(${props.$triangleMiddle}px + 50px) 0,`}
      100% 0,
    100% 100%,
    0 100%
  );
  background-color: ${colors.primaryWhite};
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  width: calc(100% - 40px);
  padding: 50px 20px;
  gap: 62px;
  transition: clip-path 1s;
`;

const ProductCircle = styled.div<{ $color: string }>`
  left: 22px;
  position: absolute;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  height: 147px;
  width: 147px;
  z-index: 1;
  transition: background-color 1s;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  height: 491px;
  padding: 50px 20px;
  gap: 30px;
  cursor: pointer;
`;

const WrapWarp = styled.div`
  filter: drop-shadow(0px -10px 75px #00000017);
  position: absolute;
  top: 400px;
  width: 100%;
  border-radius: 35px 35px 0 0;
  overflow: hidden;
`;

export {
  Wrapper,
  Header,
  RegistrationWrappper,
  ContentWrapper,
  Tab,
  TabText,
  ProductsWrapper,
  Product,
  TabsWrapper,
  TabCircle,
  ProductCircle,
  WrapWarp,
};
