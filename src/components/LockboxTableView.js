import React from 'react';
import LockboxTableRow from './LockboxTableRow'

class LockboxTableView extends React.Component {
  render () {
    const state = this.context.store.getState();
    const rows = state.lockboxItems;
    const show = state.isShowPwOn;
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Site</th>
            <th>Username</th>
            <th>Last Modified</th>
            <th>Created</th>
            <th>Last Used</th>
            <th>Times Used</th>
            <th>Note</th>
            { show && (<th>Password</th>) }
            { show && (<th>Strength</th>) }
          </tr>
        </thead>
        <tbody>
          { rows.map(item => (<LockboxTableRow showPw={show} lockboxItem={item}/>)) }
        </tbody>
      </table> );
  }
};
LockboxTableView.contextTypes = {
  store: React.PropTypes.object
};

export default LockboxTableView;
