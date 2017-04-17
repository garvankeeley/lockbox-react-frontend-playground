import React, { Component, PropTypes } from 'react';

export class ActionColumn extends Component {
  render() {
    const store = this.context.store;
    return <td>
        <button className = 'btn' >✎</button>
        <span style = {{ marginLeft: 10 }}></span>
        <button className = 'btn'>✖</button>
      </td>;
  }
}
