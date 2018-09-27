import { LOAD_WEATHER, SUCCESS, START } from '../constants';

export default (cityList = {}, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case LOAD_WEATHER + START:
      return {
        ...cityList,
      };
    case LOAD_WEATHER + SUCCESS:
      return {
        ...cityList,
        [payLoad.cityName]: {
          ...action.response,
        },
      };
  }
  return cityList;
};
