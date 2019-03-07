const INITIAL_STATE = {
  error: false,
  list: []
}

export default function devs (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_DEV_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.payload.data],
        error: false
      }
    case 'ADD_DEV_FAILURE':
      return {
        ...state,
        error: true
      }
    case 'REMOVE_DEV':
      return {
        ...state,
        list: state.list.filter(dev => dev.id !== action.payload.id),
        error: false
      }
    default:
      return state
  }
}
