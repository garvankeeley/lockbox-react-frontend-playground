import React, { Component } from 'react';
import { actionFilterTable } from '../../redux/actions';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {filterText: ''};
  }

  handleChange(e) {
    this.setState({filterText: e.target.value});
    setTimeout(() => {
      this.context.store.dispatch(actionFilterTable(this.state.filterText));
    }, 200);
  }

  render() {
    const addedStyles = {
        border: '1px black',
        borderStyle: 'solid',
        borderRadius: 1,
        minWidth: 280,
        fontSize: 14,
        verticalAlign: 'middle'
    };
    const style = Object.assign({}, addedStyles, this.props.style);
    return <input type='text' placeholder="Search" 
      style={style}
      value={this.state.value}
      onChange={(e) => {this.handleChange(e)}} />
  }
}

SearchFilter.contextTypes = {
  store: React.PropTypes.object
};

export default SearchFilter;
