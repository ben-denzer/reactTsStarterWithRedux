import * as React from 'react';
import { EnthusiasmWrapper } from './EnthusiasmStyles';
import getExclamationMarks from '../../utils/getExclamationMarks';

interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Enthusiasm = (props: Props): JSX.Element => {
  const { name, enthusiasmLevel, onDecrement, onIncrement } = props;
  if (!enthusiasmLevel || enthusiasmLevel <= 0) {
    return <div>You Broke The System</div>;
  }
  return (
    <EnthusiasmWrapper>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}> - </button>
        <button onClick={onIncrement}> + </button>
      </div>
    </EnthusiasmWrapper>
  );
};

export default Enthusiasm;
