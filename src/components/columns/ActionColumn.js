import React from 'react';

export const ActionColumn = (props) => {
  return (
    <td>
      <button className='btn' onClick={() => props.editButtonClicked()}>✎</button>
      <span style={{ marginLeft: 10 }} />
      <button className='btn'>✖</button>
    </td>);
};
