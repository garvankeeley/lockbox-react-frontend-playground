import React, { Component } from 'react';
import Modal, { closeStyle } from '../../ext/simple-modal'

class CheckboxInput extends Component {
  state = { checked: this.props.checked || false }
  render() {
    return (
      <label>
        <input type="checkbox"
          name={this.props.name}
          checked={this.state.checked}
          onClick={(e) => this.handleClick(e)}
          value={this.props.value} />
        {this.props.label}
      </label>
    );
  }

  handleClick(e) {
    this.setState({ checked: e.target.checked });
  }
}

class NewItemButton extends Component {
  state = { isShowingModal: false }

  handleClick() {
    this.setState({ isShowingModal: true });
  }

  handleClose() {
    this.setState({ isShowingModal: false });
  }

  render() {
    const addedStyles = { borderRadius: 1, verticalAlign: 'middle' };
    const style = Object.assign({}, addedStyles, this.props.style);

    return <span><button className='btn'
      onClick={() => this.handleClick()}
      style={style}>Add Site
      </button>

      <Modal
        containerClassName="test"
        closeOnOuterClick={false}
        show={this.state.isShowingModal}
        onClose={() => { this.handleClose() }}>
        <a style={closeStyle} onClick={() => { this.handleClose() }}>✖</a>
        <div>
          <h2>Add Site</h2>
          <form className='form-new-login' onSubmit={(e) => { e.preventDefault();}}>
            <label>Title:</label><input name='title' placeholder='Example Website' />
            <label>Site:</label><input name='website' placeholder='https://www.example.com' />
            <label>Username:</label><input name='username' placeholder='foo@mail.com' />
            <label>Password:</label><input name='password' placeholder='********' />
            <fieldset className='gen-password'
              style={{
                width: '80%',
                border: '1px solid gray',
                paddingBlockStart: 15,
                fontSize: '80%',
                fontWeight: 'bold'
              }}>
              <legend style={{
                border: '1px solid gray', fontSize: '80%', padding: '0.2em 0.5em'
              }}>Generate Password</legend>

              <label style={{ marginRight: 10 }}>Length:</label><input type='number'
                min='4' max='255' step='2' defaultValue='10'
                style={{ minWidth: 40, maxWidth: 40 }} /><br />

              <CheckboxInput checked={true} label='Use words' name='name' /><br />
              <CheckboxInput label='Lowercase only' name='name' /><br />
              <CheckboxInput label='Use numbers' name='name' /><br />
              <CheckboxInput label='Special characters' name='name' /><br /><br />

              <button>Generate</button>
            </fieldset>
            <label style={{marginTop: 10, marginBottom: 0}} >Note</label><br />
            <textarea style={{ width: '90%', height: 70, resize: 'none'}}></textarea>
          </form>
          <button onClick={() => { this.handleClose() }}>Save</button>
          &nbsp;&nbsp;
          <button onClick={() => { this.handleClose() }}>Cancel</button>
        </div>
      </Modal>
    </span>
  }
}

NewItemButton.contextTypes = {
  store: React.PropTypes.object
};

export default NewItemButton;
