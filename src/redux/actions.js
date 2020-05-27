import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TITLE,
} from './types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}

export const changeStyles = (data) => ({
  type: CHANGE_STYLES,
  data,
});

export const applyStyle = (data) => ({
  type: APPLY_STYLE,
  data,
});

export const changeTitle = (data) => ({
  type: CHANGE_TITLE,
  data,
});
