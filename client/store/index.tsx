import {createStore} from 'redux';
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper';
import {reducer, RootState} from "./reducers";


const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});