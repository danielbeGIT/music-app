export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
}

// reducer is to check the current state and action is to upgrade/set new states
const reducer = (state, action) => {
    console.log(action)

    // action dispatched with [type & payload]
    switch(action.type) {
        case 'SET_USER':

            // return the existing state/property and change the current action to user
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN': {
            return {
                ...state,
                token: action.token
            }
        }

        case 'SET_PLAYLISTS': {
            return {
                ...state,
                playlists: action.playlists
            }
        }

        case 'SET_FEATURED_PLAYLIST': {
            return {
                ...state,
                featured_playlist: action.featured_playlist
            }
        }

        default:
            return state
    }
}

export default reducer