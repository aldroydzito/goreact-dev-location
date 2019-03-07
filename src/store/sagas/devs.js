import { call, put, select } from 'redux-saga/effects'
import api from '../../services/api'

import { addDevSuccess, addDevFailure } from '../actions/devs'
import { closeModal } from '../actions/modal'

import { toast } from 'react-toastify'

export function * addDev (action) {
  try {
    if (!action.payload.user) {
      return toast.error(`Insira um usuário.`)
    }

    const isAdded = yield select(state =>
      state.devs.list.find(dev => dev.login === action.payload.user)
    )

    if (isAdded) return toast.info(`${action.payload.user} já está na lista`)

    const { data } = yield call(api.get, `/users/${action.payload.user}`)

    const position = yield select(state => state.modal.position)

    const devData = {
      id: data.id,
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      position
    }
    toast.success(`Oba! ${action.payload.user} entrou na lista!`)
    yield put(addDevSuccess(devData))
  } catch (err) {
    toast.error(`Eita! Parece que ${action.payload.user} não existe...`)
    yield put(addDevFailure())
  } finally {
    yield put(closeModal())
  }
}
