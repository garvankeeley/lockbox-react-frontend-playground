import React, { Component } from 'react';

export class ActionColumn extends Component {
  render() {
    return <td>
        <button className='btn' >✎</button>
        <span style={{ marginLeft: 10 }}></span>
        <button className='btn'>✖</button>
      </td>;
  }
}
