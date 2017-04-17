import React from 'react';
import LockboxTableRow from './LockboxTableRow'

class LockboxTableView extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // debugger;
      var tr = document.getElementById("wrap").firstChild.firstChild; 
    
    var foo = (event) => {
        var translate = "translate(0px," + event.target.scrollTop + "px)";
        tr.style.transform = translate;
        // const allTh = event.target.querySelectorAll("th");
        // for (let i = 0; i < allTh.length; i++ ) {
        //     allTh[i].style.transform = translate;
        // }
    }
    var elem = document.getElementById("wrap"); 
    elem.addEventListener("scroll", foo);
    }, 0);
  }

  render () {
    const state = this.context.store.getState();
    const rows = state.lockboxItems;
    const show = state.isShowPwOn;
    // const actionWidth = 10,
    //  titleWidth = 10,
    //  siteWidth = 10,
    //  usernameWidth = 10,
    //  dateWidth = 10,
    //  timesUsedWidth = 10, 
    //  noteWidth = 10;
    // <colgroup>
    //       <col span='1' style={{width: actionWidth}} />
    //       <col span='1' style={{width: titleWidth}} />
    //       <col span='1' style={{width: siteWidth}} />
    //       <col span='1' style={{width: usernameWidth}} />
    //       <col span='3' style={{width: dateWidth}} />
    //       <col span='1' style={{width: timesUsedWidth}} />
    //       <col span='1' style={{width: noteWidth}} />
    //     </colgroup>
        
    return (
      <div >
      <table id='wrap' className='tableSection'>
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
      </table> </div>);
  }
};
LockboxTableView.contextTypes = {
  store: React.PropTypes.object
};

export default LockboxTableView;
