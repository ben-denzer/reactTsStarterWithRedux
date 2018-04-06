import * as React from 'react';
import getExclamationMarks from '../../utils/getExclamationMarks';
import { HelloWrapper } from './HelloStyles';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <HelloWrapper>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <button>Click Me</button>
    </HelloWrapper>
  );
}

export default Hello;
