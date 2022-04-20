export const initialState = {
  characterData: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_DATA":
      return {
        characterData: payload.data,
      };
    case "CLEAN_DATA":
      return {
        characterData: null,
      };
    default:
      return state;
  }
};

export default reducer;
