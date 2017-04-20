import React, { Component } from 'react';

class CheckboxInput extends Component {
  state = { checked: this.props.checked || false }

  render() {
    return (
      <label>
        <input type="checkbox"
          name={this.props.name}
          checked={this.state.checked}
          onChange={(e) => this.handleClick(e)}
          value={this.props.value} />
        {this.props.label}
      </label>
    );
  }

  handleClick = (e) => {
    this.setState({ checked: e.target.checked });
    this.props.storeToggleState(this.props.name, e.target.checked);
  }
}

export default CheckboxInput;