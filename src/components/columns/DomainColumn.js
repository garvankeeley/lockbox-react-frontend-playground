import React, { Component, PropTypes } from 'react';
import { actionShowPw } from '../../redux/actions';

export class DomainColumn extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    const faviconSize = 14;
    return (
      <td>
        <img src='http://superuser.com/favicon.ico' alt='favicon'
        style={{
            width: faviconSize,
            height: faviconSize,
            marginRight: 6,
            verticalAlign: 'text-top'
        }} />
        {this.props.text}
    </td>);
  }
}