import { storage } from '../core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
};

export const initialState = storage('app-state')
  ? storage('app-state')
  : defaultState;