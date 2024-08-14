import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  ContentWrapper,
  Header,
  Product,
  ProductCircle,
  ProductsWrapper,
  RegistrationWrappper,
  Tab,
  TabCircle,
  TabsWrapper,
  TabText,
  Wrapper,
  WrapWarp,
} from './styled';

import { colors } from '../../../shared/constants/colors';
import { tabs } from '../../../shared/constants/tabs';
import { ProductModal } from '../../../components/ProductModal';
import { IProduct } from '../types';

interface ShopPageProps {
  pay: Dispatch<SetStateAction<boolean>>;
  currentProduct: IProduct | undefined;
  setCurrentProduct: Dispatch<SetStateAction<IProduct | undefined>>;
  setPrice: Dispatch<SetStateAction<number>>;
}

const ShopPage: FC<ShopPageProps> = ({ pay, currentProduct, setCurrentProduct, setPrice }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentMiddleTabPont, setCurrentMiddleTabPoint] = useState(133);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Wrapper $color={activeTab.color}>
      <Header>
        <p>Выбор напитка</p>
        <RegistrationWrappper>
          <div
            style={{
              backgroundColor: colors.primaryYellow,
              borderRadius: 35,
              width: 103,
              height: 103,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/phone.svg" />
          </div>
          <p style={{ fontSize: 24 }}>Вход / Регистрация</p>
        </RegistrationWrappper>
      </Header>
      <TabsWrapper>
        {tabs.map((tab) => (
          <Tab
            onClick={(event) => {
              setActiveTab(tab);
              setCurrentMiddleTabPoint(
                event.currentTarget.offsetLeft + event.currentTarget.offsetWidth / 2
              );
            }}
            $active={activeTab == tab}
            key={tab.name}
          >
            <div style={{ position: 'relative', height: 256 }}>
              {activeTab == tab && <TabCircle $color={tab.color} />}
              <img
                src={tab.image}
                style={{
                  height: 256,
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }}
              />
            </div>
            <TabText>{tab.name}</TabText>
          </Tab>
        ))}
        <WrapWarp>
          <ContentWrapper $triangleMiddle={currentMiddleTabPont}>
            <div style={{ position: 'relative', minHeight: 125 }}>
              <ProductCircle $color={activeTab.color} />
              <p style={{ fontSize: 83, position: 'absolute', zIndex: 2 }}>{activeTab.name}</p>
            </div>
            <ProductsWrapper>
              {activeTab.products.map((product, index) => (
                <Product
                  key={index}
                  onClick={() => {
                    setCurrentProduct(product);
                    setOpenModal(true);
                  }}
                >
                  <img src={product.image} style={{ height: 280 }} />
                  <div>
                    <p style={{ fontSize: 32 }}>{product.name}</p>
                    <p style={{ fontSize: 40, fontWeight: 700 }}>
                      от{' '}
                      {product.price.toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </Product>
              ))}
            </ProductsWrapper>
          </ContentWrapper>
        </WrapWarp>
      </TabsWrapper>
      {openModal && (
        <ProductModal
          setOpen={setOpenModal}
          product={currentProduct!}
          pay={pay}
          setPrice={setPrice}
        />
      )}
    </Wrapper>
  );
};

export default ShopPage;
