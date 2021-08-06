const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.myList.find(item => item.id === action.payload.id);

      if (exist) {
        return { ...state };
      } else {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      const videos = [...state.trends, ...state.originals];
      return {
        ...state,
        playing: videos.find(item => item.id === Number(action.payload)) || [],
        // state.trends.find(item => item.id === Number(action.payload)) ||
        // state.originals.find(item => item.id === Number(action.payload)) ||
        // [],
      };
    default:
      return state;
  }
};

export default reducer;
