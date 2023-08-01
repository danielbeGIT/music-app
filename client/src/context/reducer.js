export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  token: null,
  selected_playlist: null,
  selected_playlist_id: null,
};

// reducer is for checking the current state and action, also to upgrade/set new states
// action dispatched with [type & payload]
// return the existing state/property and change the current action to user
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        selected_playlist: action.selected_playlist,
      };

    case "SET_PLAYLIST_ID":
      return {
        ...state,
        selected_playlist_id: action.selected_playlist_id,
      };

    default:
      return state;
  }
};

export default reducer;
