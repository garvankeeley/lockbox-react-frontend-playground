import * as types from './constants'

export const actionShowPw = isOn => ({ type: types.ACTION_SHOW_PASSWORDS, isOn });
export const actionFilterTable = filterText => ({ type: types.ACTION_FILTER_TABLE, filterText });
