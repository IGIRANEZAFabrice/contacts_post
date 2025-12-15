import { call, put, takeEvery } from "redux-saga/effects";
import api from "../api/contacts";
import {
  FETCH_CONTACTS_REQUEST,
  fetchContactsSuccess,
  fetchContactsFailure,
  FETCH_CONTACT_REQUEST,
  fetchContactSuccess,
  fetchContactFailure,
  ADD_CONTACT_REQUEST,
  addContactSuccess,
  addContactFailure,
  UPDATE_CONTACT_REQUEST,
  updateContactSuccess,
  updateContactFailure,
  DELETE_CONTACT_REQUEST,
  deleteContactSuccess,
  deleteContactFailure,
} from "./action";

function* fetchContactsSaga() {
  try {
    const response = yield call(api.get, "/contacts");
    yield put(fetchContactsSuccess(response.data));
  } catch (error) {
    yield put(fetchContactsFailure(error.message));
  }
}

function* fetchContactSaga(action) {
  try {
    const response = yield call(api.get, `/contacts/${action.payload}`);
    yield put(fetchContactSuccess(response.data));
  } catch (error) {
    yield put(fetchContactFailure(error.message));
  }
}

function* addContactSaga(action) {
  try {
    const response = yield call(api.post, "/contacts", action.payload);
    yield put(addContactSuccess(response.data));
  } catch (error) {
    yield put(addContactFailure(error.message));
  }
}

function* updateContactSaga(action) {
  try {
    const { id, contact } = action.payload;
    const response = yield call(api.put, `/contacts/${id}`, contact);
    yield put(updateContactSuccess(response.data));
  } catch (error) {
    yield put(updateContactFailure(error.message));
  }
}

function* deleteContactSaga(action) {
  try {
    yield call(api.delete, `/contacts/${action.payload}`);
    yield put(deleteContactSuccess(action.payload));
  } catch (error) {
    yield put(deleteContactFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_CONTACTS_REQUEST, fetchContactsSaga);
  yield takeEvery(FETCH_CONTACT_REQUEST, fetchContactSaga);
  yield takeEvery(ADD_CONTACT_REQUEST, addContactSaga);
  yield takeEvery(UPDATE_CONTACT_REQUEST, updateContactSaga);
  yield takeEvery(DELETE_CONTACT_REQUEST, deleteContactSaga);
}
