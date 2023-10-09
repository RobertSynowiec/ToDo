import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux'
import cardsReducer from './cardsRedux'

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators


export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });


const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case 'UPDATE_SEARCHSTRING':
            return action.payload
        default:
            return statePart;
    }
}


const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;