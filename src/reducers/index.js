const reducer = (state, action) => {
  const videos = [...state.trends, ...state.originals];

  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.myList.find(item => item.id === action.payload.id);

      if (exist) {
        return { ...state };
      }

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

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
      return {
        ...state,
        playing: videos.find(item => item.id === Number(action.payload)) || [],
        // state.trends.find(item => item.id === Number(action.payload)) ||
        // state.originals.find(item => item.id === Number(action.payload)) ||
        // [],
      };
    case 'GET_VIDEO_SEARCH':
      if (action.payload === '') {
        return { ...state, searchResult: [] };
      }

      return {
        ...state,
        searchResult: videos.filter(item =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default reducer;
