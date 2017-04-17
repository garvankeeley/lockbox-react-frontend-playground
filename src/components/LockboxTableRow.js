import React from 'react';
import { LoginColumn, DateColumn, PasswordColumn, StrengthColumn } from './columns/columns';
import { ActionColumn } from './columns/ActionColumn';
import { DomainColumn } from './columns/DomainColumn';

const LockBoxTableRow = (props) => {
  const row = props.row;
  const showPw = props.showPw;
  return <tr>
        <ActionColumn />
        <DomainColumn text={row.c1} />
        <LoginColumn text={row.c2} />
        <DateColumn />
        <DateColumn />
        <DateColumn />
        <td>1</td>
        <td>Yes📄</td>
        {showPw && <PasswordColumn text='secrets' /> }
        {showPw && <StrengthColumn strength={row.c3} /> }
        </tr>
};

export default LockBoxTableRow;
