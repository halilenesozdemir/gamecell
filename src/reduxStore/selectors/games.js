/* export const getAllGamesGenres = (state) => {
  const x = state.gameReducer.games.map((game) => game.genres);
  const y = [...new Set(x.flat(1))];
  let filteredY = y.filter(function (game) {
    return game != null;
  });
  filteredY.sort();
  return filteredY;
}; */

/* export const getFilteredTitles = (state) => {
  const { gameReducer, filters } = state;

  return gameReducer.games
    .filter((game) => {
      const searchText = game.title.toLowerCase().includes(filters.title.toLowerCase().trim());

      if (filters.title.length > 0) {
        return filters.title.includes(game.title);
      } else if (filters.title.length !== 0) {
        return searchText;
      } else if (filters.title.length > 0) {
        return filters.title.includes(game.title) && searchText;
      } else {
        return game;
      }
    })
    .sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
};
 */
