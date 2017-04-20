import React, { Component } from 'react';

class SpinnerInput extends Component {
  state = { value: this.props.value || 12 }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.storeSpinnerState(this.props.name, event.target.value);
  }

  render() {
    return (<div>
      <label style={{ marginRight: 10 }}>Length:</label>
      <input type='number' name={this.props.name}
        value={this.state.value} onChange={(e) => { this.handleChange(e) }}
        min='4' max='255'
        style={{ minWidth: 40, maxWidth: 40 }} />
    </div>)
  }
}

export default SpinnerInput;