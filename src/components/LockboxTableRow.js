import React from 'react';
import zxcvbn from 'zxcvbn';
import { TitleColumn, LoginColumn, DateColumn, PasswordColumn, StrengthColumn } from './columns/columns';
import { ActionColumn } from './columns/ActionColumn';
import { DomainColumn } from './columns/DomainColumn';

const LockBoxTableRow = (props) => {
  const item = props.lockboxItem;
  const showPw = props.showPw;
  const strength = zxcvbn(item.password).score * 25;

  return <tr>
        <ActionColumn editButtonClicked={() => props.editButtonClicked(item) }/>
        <TitleColumn text={item.title} />
        <DomainColumn text={item.site} />
        <LoginColumn text={item.username} />
        <DateColumn />
        <DateColumn />
        <DateColumn />
        <td>1</td>
        <td>Yes📄</td>
        {showPw && <PasswordColumn text={item.password} /> }
        {showPw && <StrengthColumn strength={strength} /> }
        </tr>
};

export default LockBoxTableRow;
