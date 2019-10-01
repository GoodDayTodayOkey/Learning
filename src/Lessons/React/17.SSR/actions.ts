import { ActionCreator, PlainActionCreator } from 'Lessons/React/17.SSR/types';

export const incrementCounter: PlainActionCreator = () =>
  ({
    type: 'INCREMENT_COUNTER',
  });

export const changeName: ActionCreator<string> = (payload: string) => {
  return {
    payload,
    type: 'CHANGE_NAME',
  };

}
