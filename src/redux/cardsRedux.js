import shortid from 'shortid';

export const selectFavoriteCards = (state) =>
    state.cards.filter((card) => card.isFavorite);

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const addSetIsFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });


const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}
export default cardsReducer;