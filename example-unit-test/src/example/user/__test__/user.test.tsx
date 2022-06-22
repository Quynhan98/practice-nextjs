import * as renderer from 'react-test-renderer';
import { User } from '..';

describe('Test User component', () => {
  test('Snapshot', () => {
    const component = renderer.create(<User />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
