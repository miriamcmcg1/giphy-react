import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const SampleActionCreators = {
  AddFavourite(arg1) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_FAVORITES,
      gif: arg1,
    });
  },

  RemFavourite(arg1) {
    AppDispatcher.dispatch({
      type: ActionTypes.REM_FAVORITES,
      gif: arg1,
    });
  },

};

export default SampleActionCreators;
