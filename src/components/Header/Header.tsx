import * as React from 'react';
import { HeaderWrapper } from './HeaderStyles';

interface Props {}

const Header: React.SFC<Props> = (props: Props) => {
  return (
    <HeaderWrapper>Header Component</HeaderWrapper>
  );
};

export default Header;
