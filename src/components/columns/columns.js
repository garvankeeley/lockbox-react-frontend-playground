import React, { Component } from 'react';
import dateFormat from 'dateformat';

export class TitleColumn extends Component {
  render () {
    return <td>{this.props.text}</td>;
  }
}

export class PasswordColumn extends Component {
  render () {
    return <td>{this.props.text}</td>;
  }
}

export class LoginColumn extends Component {
  render () {
    return <td>{this.props.text}</td>;
  }
}

export class DateColumn extends Component {
  render () {
    const date = dateFormat(new Date(), 'mmmm dd, yyyy');
    return (<td>{date}</td>);
  }
}

export class StrengthColumn extends Component {
  render () {
    let color = 'dodgerblue';
    let max = 20;
    return (<td><div style={{ verticalAlign: 'middle' }}>
      <div style={{
        position: 'relative',
        background: 'DarkGray',
        height: max,
        width: 8,
        border: '1px solid black',
        borderRadius: 3
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          background: color,
          height: this.props.strength / 100.0 * max,
          width: 8,
          borderRadius: 2
        }} />
      </div></div></td>);
  }
}
