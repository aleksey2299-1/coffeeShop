import { coffeeProducts } from './coffee';
import { colors } from './colors';

export const tabs = [
  {
    name: 'Кофе',
    image: '/coffee.png',
    color: colors.backgroundCoffee,
    products: coffeeProducts,
  },
  {
    name: 'Чай',
    image: '/tea.png',
    color: colors.backgroundTea,
    products: coffeeProducts,
  },
  {
    name: 'Молочный коктейль',
    image: '/milk.png',
    color: colors.backgoundMilk,
    products: coffeeProducts,
  },
  {
    name: 'Морс \nили газ. напиток',
    image: '/other.png',
    color: colors.backgroundOther,
    products: coffeeProducts,
  },
];
