import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { PlainLayout } from '../src/components/Layout';

Enzyme.configure({ adapter: new Adapter() });

const title = 'testTitle';
const child = <div id="child" />;
const props = {
  title,
  classes: {},
};

describe('PizzaForm', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<PlainLayout {...props}>{child}</PlainLayout>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with child and text', () => {
    const wrapper = shallow(<PlainLayout {...props}>{child}</PlainLayout>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains(child)).toBe(true);
    expect(wrapper.contains(title)).toBe(true);
  });
});
