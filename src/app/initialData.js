import LockboxItem from './LockboxItem'

export var initialData = {
  uiState: {isShowPwOn: false},
  storageState: {lockboxItems: [
    new LockboxItem({title: 'Google', site: 'https://google.com', username: 'john@smith.com', password: 'asdfhjkl',
      strength: 30, note: 'A note that is interesting'}),
    new LockboxItem({title: 'Example', site: 'https://example.com', username: 'bob@smith.com', password: '123-asdfhjkl',
      strength: 50, note: 'A note that is interesting'}),
    new LockboxItem({title: 'Other', site: 'http://insecure.com', username: 'sally@smith.com', password: 'LKJHSDF asdfhjkl',
      strength: 100, note: 'A note that is interesting'}),
  ]}
};

initialData.lockboxItems = [...initialData.lockboxItems, ...initialData.lockboxItems];
initialData.lockboxItems = [...initialData.lockboxItems, ...initialData.lockboxItems];
initialData.lockboxItems = [...initialData.lockboxItems, ...initialData.lockboxItems];
initialData.lockboxItems = [...initialData.lockboxItems, ...initialData.lockboxItems];
