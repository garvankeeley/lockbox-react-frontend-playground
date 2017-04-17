import * as types from './constants'

export const appReducer = (state = {}, action)  => {
  if (action.type === types.ACTION_SHOW_PASSWORDS) {
    return Object.assign({}, state, {
        isShowPwOn: action.isOn
      })
  }

  return state;
}
