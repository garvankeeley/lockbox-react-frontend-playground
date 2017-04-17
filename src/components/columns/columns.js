import React, { Component, PropTypes } from 'react';
import dateFormat from 'dateformat';

export const PasswordColumn = ({ text }) => { return <td>{text}</td> };

export class LoginColumn extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    return (<td>{this.props.text}</td> );
  }
}

export class DateColumn extends Component {

    render() {
      const date = dateFormat(new Date(), "mmmm, dd, yyyy");
      return (<td>{date}</td>);
    }
}

export const StrengthColumn = ({ strength }) => {
  let color = 'dodgerblue';
  let max = 20;
  return <td><div style={{ verticalAlign: 'middle' }}>
    <div style={{
        position:'relative',
        background: 'DarkGray',
        height: max,
        width: 8,
        border: '1px solid black',
        borderRadius: 3,
      }}>
      <div style={{
          position:'absolute',
          bottom:0,
          background: color,
          height: strength / 100.0 * max,
          width: 8,
          borderRadius: 2,
      }}></div>
    </div></div></td>
}