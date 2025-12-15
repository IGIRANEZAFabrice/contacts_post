import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACT_SUCCESS,
  ADD_CONTACT_SUCCESS,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from "./action";

const initialState = {
  contacts: [],
  currentContact: null,
  loading: false,
  error: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        currentContact: action.payload,
        loading: false,
        error: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
        error: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
