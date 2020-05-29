import { createStore } from './createStore';

const initiaState = {
  count: 0,
};
const reducer = (state = initiaState, action) => {
  if (action.type === 'ADD') {
    return { ...state, count: state.count + 1 };
  }
  return state;
};
describe('createStore', () => {
  let store;
  let handler;
  beforeEach(() => {
    store = createStore(reducer, initiaState);
    handler = jest.fn();
  });
  test('should return store object', () => {
    const store = createStore(reducer);
    expect(store).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
    expect(store.getState).not.toBeUndefined();
  });
  test('should return object as state', () => {
    expect(store.getState()).toBeInstanceOf(Object);
  });
  test('should return default state', () => {
    expect(store.getState()).toEqual(initiaState);
  });
  test('should change state if  action exists', () => {
    store.dispatch({ type: 'ADD' });
    expect(store.getState().count).toBe(1);
  });
  test('should NOT change state for non-existing action', () => {
    store.dispatch({ type: 'SUB' });
    expect(store.getState().count).toBe(0);
  });
  test('should call subscriber function', () => {
    store.subscribe(handler);
    store.dispatch({ type: 'ADD' });
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(store.getState());
  });
  test('should not call subsribe if unsub', () => {
    const sub = store.subscribe(handler);
    sub.unsubscribe();
    store.dispatch({ type: 'ADD' });
    expect(handler).not.toHaveBeenCalled();
  });

  test('should dispatch in an async way', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        store.dispatch({ type: 'ADD' });
      }, 400);

      setTimeout(() => {
        expect(store.getState().count).toBe(1);
        resolve();
      }, 1000);
    });
  });
});
