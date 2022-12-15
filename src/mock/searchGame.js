const SEARCH_GAME = 'SEARCH_GAME';

export const searchGame = (value = 'spider') => ({
  type: SEARCH_GAME,
  payload: value,
});

const searchGameReducer = (value = 'spider', action) => {
  switch (action.type) {
    case SEARCH_GAME:
      return action.payload;
    default:
      return value;
  }
};
export default searchGameReducer;
