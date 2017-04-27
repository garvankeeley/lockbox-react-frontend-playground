import React, { Component } from 'react';
import Modal, { closeStyle } from '../../ext/simple-modal';
import { actionInputChanged, actionNewSite } from '../../redux/actions';
import passwordGenerator from 'password-generator';
import zxcvbn from 'zxcvbn';
import CheckboxInput from '../inputs/CheckboxInput';
import SpinnerInput from '../inputs/SpinnerInput';
import
{ SETTING_PW_LENGTH, SETTING_PW_LC_ONLY, SETTING_PW_USE_NUMBERS, SETTING_PW_USE_SPECIAL_CHAR } from '../../redux/app-constants';

class PasswordInput extends Component {
  state = { value: this.props.value }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  render() {
    let color = 'dodgerblue';
    let width = this.props.strength * 25.0;

    const strElement = (
      <div style={{ verticalAlign: 'middle', marginTop: 4 }}>
        <div style={{
          position: 'relative',
          background: 'DarkGray',
          height: 4,
          width: '100%',
          border: '1px solid black',
          borderRadius: 1,
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            background: color,
            width: `${width}%`,
            height: 4,
            borderRadius: 1,
          }}></div>
        </div>
      </div>);

    return (<div style={{ float: 'left' }}>
      <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e)} name='password' />
      {strElement}
    </div>)
  }
}

class EditItemDialog extends Component {
  constructor(props) {
    super(props);
    this.state = this.stateFromProps(props);
  }

  stateFromProps = (props) => {
    this.dialogTitle = (props.editingItem == null)? 'Add Site' : 'Edit Site'; 

    const editing = props.editingItem || {};
    const state = {
      isShowingModal: props.isShowing || false,
      passwordInputValue: editing.password || '',
      inputNote: editing.note || '',
      inputTitle: editing.title || '',
      inputWebsite: editing.site || '',
      inputUsername: editing.username || ''
    };
    return state;
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState(this.stateFromProps(nextProps));
  }

  storeInputState = (name, value) => {
    this.context.store.dispatch(actionInputChanged(name, value));
  }

  handleShowModal = (showIt) => {
    this.setState({ isShowingModal: showIt });
    if (!showIt) {
      this.props.onClosed();
    }
  }

  onSaveClicked = () => {
    let s = this.state;
    let lockboxItem = { title: s.inputTitle, username: s.inputUsername, 
      site: s.inputWebsite, password: s.passwordInputValue, note: s.inputNote }; 
    this.context.store.dispatch(actionNewSite(lockboxItem));

    this.handleShowModal(false);
    //const saveField = (name) => {}
    //['title', 'website', 'username', 'password', 'notes'].forEach()

  }

  generatePw = () => {
    const storeState = this.context.store.getState();
    const len = storeState[SETTING_PW_LENGTH] !== undefined ?
      storeState[SETTING_PW_LENGTH] : 12;

    const letters = 'a-hj-np-z'; // no O or I

    let re = `${letters}${storeState[SETTING_PW_LC_ONLY] ? '' : letters.toUpperCase()}` +
      `${storeState[SETTING_PW_USE_NUMBERS] ? '1-9' : ''}${storeState[SETTING_PW_USE_SPECIAL_CHAR] ? '\\W' : ''}`;
    console.log(re);
    this.setState({ passwordInputValue: passwordGenerator(len, false, `[${re}]`) });
  }

  handlePasswordChanged = (val) => {
    this.setState({ passwordInputValue: val });
  }

  render() {
    const strength = zxcvbn(this.state.passwordInputValue);
    console.log(strength);

    const addedStyles = { borderRadius: 1, verticalAlign: 'middle' };
    const style = Object.assign({}, addedStyles, this.props.style);
    const storeState = this.context.store.getState();

    /// Setup checkboxes
    let checkboxes = []
    const createCheckbox = (label, key, defaultVal) => {
      const initial = storeState[key] !== undefined ? storeState[key] : defaultVal;
      checkboxes.push(<div><CheckboxInput checked={initial} label={label} name={key}
        storeToggleState={this.storeInputState} /></div>)
    }

    [['Use words (not hooked up)', 'pw-use-words', false],
    ['Lowercase only', SETTING_PW_LC_ONLY, false],
    ['Use numbers', SETTING_PW_USE_NUMBERS, true],
    ['Special characters', SETTING_PW_USE_SPECIAL_CHAR, true]].forEach(i => createCheckbox(i[0], i[1], i[2]));
    ///

    return (
      <Modal
        containerClassName="test"
        closeOnOuterClick={false}
        show={this.state.isShowingModal}
        onClose={() => this.handleShowModal(false)}>
        <a style={closeStyle} onClick={() => this.handleShowModal(false)}>✖</a>
        <div>
          <h2>{this.dialogTitle}</h2>
          <form className='form-new-login' onSubmit={(e) => { e.preventDefault(); }}>
            <label>Title:</label>
            <input name='title' placeholder='Example Website' value={this.state.inputTitle}
              onChange={(e) => this.setState({ inputTitle: e.target.value })} />
            <label>Site:</label>
            <input name='website' placeholder='https://www.example.com' value={this.state.inputWebsite}
              onChange={(e) => this.setState({ inputWebsite: e.target.value })} />
            <label>Username:</label>
            <input name='username' placeholder='foo@mail.com' value={this.state.inputUsername}
              onChange={(e) => this.setState({ inputUsername: e.target.value })} />
            <label style={{ float: 'left' }}>Password:</label>
            <PasswordInput value={this.state.passwordInputValue} onChange={this.handlePasswordChanged} strength={strength.score} />
            <fieldset className='gen-password'
              style={{
                marginTop: 50,
                width: '80%',
                border: '1px solid gray',
                paddingBlockStart: 15,
                fontSize: '80%',
                fontWeight: 'bold'
              }}>
              <legend style={{
                border: '1px solid gray', fontSize: '80%', padding: '0.2em 0.5em'
              }}>Generate Password</legend>

              <SpinnerInput name={SETTING_PW_LENGTH} value={storeState[SETTING_PW_LENGTH] || 12}
                storeSpinnerState={this.storeInputState} />

              {checkboxes}

              <button onClick={this.generatePw} >Generate</button>
            </fieldset>

            <label style={{ marginTop: 10, marginBottom: 0 }} value={this.state.inputNote}
              onChange={(e) => this.setState({ inputNote: e.target.value })} >
              Note</label><br />
            <textarea style={{ width: '90%', height: 70, resize: 'none' }}></textarea>
          </form>
          <button onClick={this.onSaveClicked} >Save</button>
          &nbsp;&nbsp;
          <button onClick={() => this.handleShowModal(false)} >Cancel</button>
        </div>
      </Modal>)
  }
}

EditItemDialog.contextTypes = {
  store: React.PropTypes.object
};

export default EditItemDialog;
