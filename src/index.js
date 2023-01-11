import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./reducers/usersReducer";
import dashboardReducer from './reducers/dashboardReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  questions: dashboardReducer
});

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);