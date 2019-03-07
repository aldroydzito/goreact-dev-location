import { all, takeLatest } from 'redux-saga/effects'

import { addDev } from './devs'

export default function * rootSaga () {
  yield all([takeLatest('ADD_DEV_REQUEST', addDev)])
}
