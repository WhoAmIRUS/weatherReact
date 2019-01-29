/* eslint-disable default-case */
import { LOAD_WEATHER, SUCCESS, START, FAIL, CITY_DELETE } from '../constants';

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
          state: 'success',
          ...action.response,
        },
      };
    case LOAD_WEATHER + FAIL:
      return {
        ...cityList,
        [payLoad.cityName]: {
          state: 'fail',
          ...action.response,
        },
      };
    case CITY_DELETE:
      delete cityList[`${payLoad.cityName}`];
      return {
        ...cityList,
      };
  }
  return cityList;
};
