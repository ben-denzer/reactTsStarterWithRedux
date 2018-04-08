import { EnthusiasmAction } from '../actions/enthusiasmActions';
import { EnthusiasmState } from '../types/StoreState';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
import initialState from './initialState';

function enthusiasmReducer(
  state: EnthusiasmState = initialState.enthusiasm,
  action: EnthusiasmAction
): EnthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state;
  }
}

export default enthusiasmReducer;
