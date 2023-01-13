import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./reducers/usersReducer";
import questionReducer from './reducers/questionsReducer';
import authReducer from './reducers/authUser';
import { BrowserRouter as Router} from "react-router-dom"

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionReducer,
  authedUser: authReducer,
});

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
	<Router>
    	<App />
	</Router>
  </Provider>
);