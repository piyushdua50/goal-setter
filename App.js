import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Goal from './components/Goal';
import goalReducer from './store/reducers/goal';

export default function App() {

  const rootReducer = combineReducers({
    allGoals: goalReducer
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Goal />
    </Provider>
  );
};
