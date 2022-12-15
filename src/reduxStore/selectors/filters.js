const getAllFilters = (state) => state.filters;

const getSearchBoxInput = (state) => state.filters.title;

export { getAllFilters, getSearchBoxInput };
