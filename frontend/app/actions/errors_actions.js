
export const RECEIVE_ORDER_ERRORS = 'RECEIVE_ORDER_ERRORS';

export const receiveOrderErrors = (errors) => ({
  type: RECEIVE_ORDER_ERRORS,
  errors
});
