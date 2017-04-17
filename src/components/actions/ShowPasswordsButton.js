import React, { Component, PropTypes } from 'react';
import { actionShowPw } from '../../redux/actions';

class ShowPasswordsButton extends Component {
  render() {
    const addedStyles = { borderRadius: 1, verticalAlign: 'middle' };
    const style = Object.assign({}, addedStyles, this.props.style);
    const store = this.context.store;
    return <button className='btn' 
        onClick={() => {
          const show = !store.getState().isShowPwOn;
          store.dispatch(actionShowPw(show));
        }}
        style={style}>Show Passwords</button>
  }
}

ShowPasswordsButton.contextTypes = {
  store: React.PropTypes.object
};

export default ShowPasswordsButton;