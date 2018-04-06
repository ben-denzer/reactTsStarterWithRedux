import getExclamationmarks from './getExclamationMarks';

describe('utils/getExclamationmarks', () => {
  it('should render a mark', () => {
    expect(getExclamationmarks(2)).toEqual('!!');
  });
});
