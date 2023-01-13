import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./reducers/usersReducer";
import questionReducer from './reducers/questionsReducer';
import authReducer from './reducers/authUser';
import loadingReducer from './reducers/loadingReducer';
import { BrowserRouter as Router} from "react-router-dom"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionReducer,
  authedUser: authReducer,
  loading: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
	<Router>
    	<App />
	</Router>
  </Provider>
);