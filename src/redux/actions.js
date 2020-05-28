import {
  APPLY_STYLE,
  CHANGE_STYLES,
  CHANGE_TEXT,
  CHANGE_TITLE,
  TABLE_RESIZE,
  UPDATE_DATE,
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

export const updateDate = () => ({
  type: UPDATE_DATE,
});
