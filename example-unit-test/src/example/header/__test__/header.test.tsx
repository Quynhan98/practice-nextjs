import * as renderer from 'react-test-renderer';
import { Header } from '..';

describe('test header', () => {
  test('snap', () => {
    const component = renderer.create(<Header />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
