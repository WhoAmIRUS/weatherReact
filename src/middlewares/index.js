import { START, SUCCESS, FAIL } from '../constants';

export default store => next => (action) => {
  const { callApi, type, ...rest } = action;
  if (!callApi) return next(action);
  /*next({
    type: type + START,
    ...rest,
  });*/
  fetch(callApi)
    .then((response) => {
      if (response.status === 200) return response.json();
      throw new Error();
    })
    .then(response => next({
      type: type + SUCCESS,
      response,
      ...rest,
    }))
    .catch(err => next({
      type: type + FAIL,
      err,
      ...rest,
    }));
};
