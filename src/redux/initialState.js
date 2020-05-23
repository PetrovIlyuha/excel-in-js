import { storage } from '../core/utils';

const defaultState = {
  rowState: {},
  colState: {},
};

export const initialState = storage('app-state')
  ? storage('app-state')
  : defaultState;
