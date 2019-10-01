import { IReduxStore } from 'Lessons/React/17.SSR/types';

export function selectName(state: IReduxStore) {
  return state.data.name;
}

export function selectCounter(state: IReduxStore) {
  return state.data.counter;
}