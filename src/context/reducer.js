const reducer = (state, action) => {

  if (action.type === "REMOVE") {
    
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.id),
    };
  }

  return state;
};

export default reducer;
