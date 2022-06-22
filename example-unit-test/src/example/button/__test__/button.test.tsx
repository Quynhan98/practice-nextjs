import * as renderer from 'react-test-renderer';
import { Button } from '..';

describe('Test Button component', () => {
  test('Component Button matches DOM Snapshot', () => {
    const component = renderer
      .create(
        <Button color={'btn-primary'} typeButton={'button'} size={'btn-small'}>
          Button
        </Button>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
