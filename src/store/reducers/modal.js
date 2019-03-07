const INITIAL_STATE = {
  visible: false,
  position: {}
}

export default function modal (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, visible: true, position: action.payload.position }
    case 'CLOSE_MODAL':
      return { ...state, visible: false }
    default:
      return state
  }
}
