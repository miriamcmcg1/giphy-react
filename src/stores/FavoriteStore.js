import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class FavoriteStore extends ReduceStore {
  getInitialState() {
    var values = {},
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values[JSON.parse(keys[i])]=  JSON.parse(localStorage.getItem(keys[i]));
    }
    console.log(values);
    return {
     favorites: values
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_FAVORITES:
        state.favorites[action.gif.id] = action.gif;
        return state;
      case ActionTypes.REM_FAVORITES:
        delete state.favorites[action.gif.id];
        return state;
      default:
        return state;
    }
  }
}

export default new FavoriteStore(AppDispatcher);
