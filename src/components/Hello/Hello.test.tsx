import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello Component', () => {
  it('should render name properly', () => {
    const myName = 'Ben';
    const wrapper = shallow(<Hello name={myName} />);
    expect(wrapper.find('.greeting').text()).toEqual('Hello Ben!');
  });
});
