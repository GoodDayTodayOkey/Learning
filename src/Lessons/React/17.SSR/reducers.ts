import { combineReducers } from 'redux';
import { store } from './initialStore';
import { Reducer, IReduxStore } from './types';

const data: Reducer<IReduxStore['data']> = (state = store.data, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const updateStore = combineReducers({
  data
});
