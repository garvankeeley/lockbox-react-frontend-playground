import * as types from './app-constants'

export const appReducer = (state = {}, action)  => {
  if (action.type === types.ACTION_SHOW_PASSWORDS) {
    return Object.assign({}, state, { isShowPwOn: action.isOn });
  } else if (action.type === types.ACTION_FILTER_TABLE) {
    return Object.assign({}, state, { filterText: action.filterText });
  } else if (action.type === types.ACTION_PERSIST_INPUT_VALUE) {
    let obj = {};
    obj[action.name] = action.value;
    return Object.assign({}, state, obj);  
  }

  return state;
}
