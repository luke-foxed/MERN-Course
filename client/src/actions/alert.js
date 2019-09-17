import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

// thunk allows for this middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();

  // gets sent to the alert reducer
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
