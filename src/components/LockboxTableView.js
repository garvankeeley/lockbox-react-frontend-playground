import React from 'react';
import LockboxTableRow from './LockboxTableRow'

class LockboxTableView extends React.Component {
  constructor(props) {
    super(props);
    this.tableHeaderRow = null;
    this.mainTableBody = null;
  }

  updateTableHeaderCellWidthToMatchBody() {
    let headerCells = this.tableHeaderRow.children;
    let bodyCells = Array.from(this.mainTableBody.children[0].children);

    const tdSizer = (elem, i) => {
      let padElem = 2 * parseFloat(getComputedStyle(elem)['padding-left'].replace('px', ''));
      let padHeader = 2 * parseFloat(getComputedStyle(headerCells[i])['padding-left'].replace('px', ''));
      let width = parseFloat(getComputedStyle(elem).width.replace('px', ''));
      width += padElem - padHeader;
      headerCells[i].style.width = `${width}px`;
    }

    bodyCells.forEach(tdSizer);
  }

  componentDidUpdate() {
    this.updateTableHeaderCellWidthToMatchBody();
  }

  componentDidMount() {
    this.updateTableHeaderCellWidthToMatchBody()
  }

  render() {
    const state = this.context.store.getState();
    const allRows = state.lockboxItems;
    const show = state.isShowPwOn;

    var rowsToShow = allRows;

    if (typeof state.filterText !== 'undefined' && state.filterText && state.filterText.length > 1) {
      const searchNoCase = (haystack, needle) => {
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1
      }
      rowsToShow = allRows.filter(item => {
       return [item.title, item.site, item.username, item.note].some(
            haystack => searchNoCase(haystack, state.filterText) );
      });
    }

    // use 2 tables so the header has fixed position when scrolling
    return (
      <div style={{ display: 'inline-block' }}>
        <table>
          <thead>
            <tr ref={(e) => { this.tableHeaderRow = e }}>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Site</th>
              <th>Username</th>
              <th>Last Modified</th>
              <th>Created</th>
              <th>Last Used</th>
              <th style={{fontSize: 'xx-small'}}>Used</th>
              <th>Note</th>
              {show && (<th>Password</th>)}
              {show && (<th></th>)}
            </tr>
          </thead>
        </table>

        <table style={{ height: '250px', display: 'block', overflowY: 'scroll' }}>
          <tbody ref={(e) => { this.mainTableBody = e }}>
            {rowsToShow.map(item => (
              <LockboxTableRow showPw={show} lockboxItem={item} 
              editButtonClicked={(item) => this.props.editButtonClicked(item)}/>))}
          </tbody>
        </table>
      </div>);
  }
};
LockboxTableView.contextTypes = {
  store: React.PropTypes.object
};

export default LockboxTableView;
