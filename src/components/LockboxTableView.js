import React, { Component, PropTypes } from 'react';
import LockboxTableRow from './LockboxTableRow'

class LockboxTableView extends React.Component {
  render () {
    const state = this.context.store.getState();
    const rows = state.rows;
    const show = state.isShowPwOn;
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
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
          { rows.map(row => (<LockboxTableRow showPw={show} row={row}/>)) }
        </tbody>
      </table> );
  }
};
LockboxTableView.contextTypes = {
  store: React.PropTypes.object
};

export default LockboxTableView;
