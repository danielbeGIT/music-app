export const initialState = {
    token: null,
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    discover_weekly: null,
    item: null,
}

// reducer is to check the current state and action is to upgrade/set new states
// action dispatched with [type & payload]
// return the existing state/property and change the current action to user

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
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

        case 'SET_DISCOVER_WEEKLY': {
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        }

        case 'SET_SPOTIFY': {
            return {
                ...state,
                spotify: action.spotify
            }
        }

        case 'SET_ITEM': {
            return {
                ...state,
                item: action.item
            }
        }

        case 'SET_PLAYING': {
            return {
                ...state,
                playing: action.playing
            }
        }

        default:
            return state
    }
}

export default reducer