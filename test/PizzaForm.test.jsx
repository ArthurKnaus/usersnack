import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { PizzaForm } from '../src/containers';

Enzyme.configure({ adapter: new Adapter() });

const pizza = {
  id: 2,
  name: 'Mighty Meaty',
  price: 16.90,
  ingredients: ['tomato', 'pepperoni', 'ham', 'onion', 'mushrooms', 'sausage'],
  img: 'mighty-meaty-pizza.jpg',
};

describe('PizzaForm', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<PizzaForm pizza={pizza} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with pizza', () => {
    const wrapper = shallow(<PizzaForm pizza={pizza} />);
    expect(wrapper.exists()).toBe(true);
  });
});
