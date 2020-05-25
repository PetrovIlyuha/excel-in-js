import { storage } from '../core/utils';
import { defaultStyles } from '../constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

export const initialState = storage('app-state')
  ? storage('app-state')
  : defaultState;
