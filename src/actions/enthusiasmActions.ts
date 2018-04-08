import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface Test {
  type: constants.TEST;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | Test;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return { type: constants.INCREMENT_ENTHUSIASM };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return { type: constants.DECREMENT_ENTHUSIASM };
}
