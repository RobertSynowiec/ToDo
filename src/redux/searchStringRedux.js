import { strContains } from '../utils/strContains';
import { createSelector } from 'reselect';


const selectAllCards = (state) => state.cards;

const selectSearchString = (state) => state.searchString;

const selectFilteredCards = (cards, searchString, columnId) =>
    cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

export const makeSelectFilteredCards = () =>
    createSelector(
        [selectAllCards, selectSearchString, (_, columnId) => columnId],
        (cards, searchString, columnId) => selectFilteredCards(cards, searchString, columnId)
    );

export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });


const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case 'UPDATE_SEARCHSTRING':
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;