type ActionNames = 'INCREMENT_COUNTER' | 'CHANGE_NAME';

type Action = ActionIncrementCounter | ActionChangeName;
type ActionIncrementCounter = { type: 'INCREMENT_COUNTER', payload: number };
type ActionChangeName = { type: 'CHANGE_NAME', payload: string };

export interface IReduxStore {
  data: { counter: number; name: string; }
}

export type ActionCreator<T> = (payload: T) => ({ type: ActionNames, payload: T });
export type PlainActionCreator = () => ({ type: ActionNames });
export type Reducer<T> = (state: T, action: Action) => IReduxStore['data'];
export type Selector<T> = (state: IReduxStore) => IReduxStore;

export type ActionsTypes<T> = ActionCreator<T> | PlainActionCreator;
