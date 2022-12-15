export const setTextFilter = (title) => ({
  type: 'SET_TEXT_FILTER',
  title
});
export const setCheckboxFilter = (genre) => ({
  type: 'SET_CHECKBOX_FILTER',
  genre
});
export const removeCheckboxFilter = (genre) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  genre
});
export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
});

const filtersReducerDefaultState = {
  genre: [],
  title: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        title: action.title
      };
    case 'SET_CHECKBOX_FILTER':
      return {
        ...state,
        genre: [...state.genre, action.genre]
      };
    case 'REMOVE_CHECKBOX_FILTER':
      return {
        ...state,
        genre: state.genre.filter((genre) => genre !== action.genre)
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        genre: [],
        title: ''
      };
    default:
      return state;
  }
};

export default filtersReducer;
