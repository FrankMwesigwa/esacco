import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './authReducer';
import BookReducer from './bookReducer'; 
import NewBookReducer from './NewBookReducer';

// combining reducers
const rootReducer = combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    books: BookReducer,
    newBook: NewBookReducer,
    router: routerReducer
});

export default rootReducer;