import shortid from 'shortid';

export const selectFavoriteCards = (state) =>
    state.cards.filter((card) => card.isFavorite);

export const getCardsById = ({ cards }, cardId) => cards.find(card => card.id === cardId);

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });
export const addSetIsFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });


const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case REMOVE_CARD:
            return statePart.filter(card => card.id !== action.payload);
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}
export default cardsReducer;