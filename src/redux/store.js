import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux'

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// do obsługi favorite
export const addSetIsFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

export const selectFavoriteCards = (state) =>
    state.cards.filter((card) => card.isFavorite);


const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [...statePart, { ...action.payload, id: shortid() }];
        case 'TOGGLE_CARD_FAVORITE':
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

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