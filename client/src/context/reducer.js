export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after developing
    token: 'BQAMFxLGmdQuob7l2gC8e6dM2R9LO7f6or0uuTNRcefOYRTfOjm1YpUU2PUllsQ_EqTfdhu2j2iDVZPf48BGJ77exJw29mAP-fyoPDS0R2xw8vF9K_dKXwWYG7F0J6nMzF6piyc4sVK-JNw0wvvhUOdQGc4-92eRXJZrxu_QtYvZ0BbhZMpUl_NVSJ-vWNv0Q9CA1sMt2ENpF0X7NsOHnsqUrvw6Hqy3vL2teIB7gGLw8CTXffEEA2wSO540',
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

        default:
            return state
    }
}

export default reducer