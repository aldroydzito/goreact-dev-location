export const openModal = ([long, lat]) => ({
  type: 'OPEN_MODAL',
  payload: {
    position: { lat, long }
  }
})

export const closeModal = () => ({ type: 'CLOSE_MODAL' })
