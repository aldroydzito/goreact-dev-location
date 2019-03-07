export const addDevRequest = user => ({
  type: 'ADD_DEV_REQUEST',
  payload: { user }
})
export const addDevSuccess = data => ({
  type: 'ADD_DEV_SUCCESS',
  payload: { data }
})
export const addDevFailure = error => ({
  type: 'ADD_DEV_FAILURE',
  payload: { error }
})
export const removeDev = id => ({
  type: 'REMOVE_DEV',
  payload: { id }
})
