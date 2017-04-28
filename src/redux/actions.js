import * as types from './app-constants';

export const actionShowPw = isOn => ({ type: types.ACTION_SHOW_PASSWORDS, isOn });
export const actionFilterTable = filterText => ({ type: types.ACTION_FILTER_TABLE, filterText });
export const actionInputChanged = (name, value) => {
  return ({ type: types.ACTION_PERSIST_INPUT_VALUE, name, value });
};
export const actionNewSite = (lockboxItem) => {
  return ({ type: types.ACTION_NEW_SITE, lockboxItem });
};
