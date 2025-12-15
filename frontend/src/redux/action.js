// Action Types
export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

export const FETCH_CONTACT_REQUEST = "FETCH_CONTACT_REQUEST";
export const FETCH_CONTACT_SUCCESS = "FETCH_CONTACT_SUCCESS";
export const FETCH_CONTACT_FAILURE = "FETCH_CONTACT_FAILURE";

export const ADD_CONTACT_REQUEST = "ADD_CONTACT_REQUEST";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_FAILURE = "ADD_CONTACT_FAILURE";

export const UPDATE_CONTACT_REQUEST = "UPDATE_CONTACT_REQUEST";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_FAILURE = "UPDATE_CONTACT_FAILURE";

export const DELETE_CONTACT_REQUEST = "DELETE_CONTACT_REQUEST";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const DELETE_CONTACT_FAILURE = "DELETE_CONTACT_FAILURE";

// Action Creators
export const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
});

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});

export const fetchContactRequest = (id) => ({
  type: FETCH_CONTACT_REQUEST,
  payload: id,
});

export const fetchContactSuccess = (contact) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload: contact,
});

export const fetchContactFailure = (error) => ({
  type: FETCH_CONTACT_FAILURE,
  payload: error,
});

export const addContactRequest = (contact) => ({
  type: ADD_CONTACT_REQUEST,
  payload: contact,
});

export const addContactSuccess = (contact) => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact,
});

export const addContactFailure = (error) => ({
  type: ADD_CONTACT_FAILURE,
  payload: error,
});

export const updateContactRequest = (id, contact) => ({
  type: UPDATE_CONTACT_REQUEST,
  payload: { id, contact },
});

export const updateContactSuccess = (contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: contact,
});

export const updateContactFailure = (error) => ({
  type: UPDATE_CONTACT_FAILURE,
  payload: error,
});

export const deleteContactRequest = (id) => ({
  type: DELETE_CONTACT_REQUEST,
  payload: id,
});

export const deleteContactSuccess = (id) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: id,
});

export const deleteContactFailure = (error) => ({
  type: DELETE_CONTACT_FAILURE,
  payload: error,
});
