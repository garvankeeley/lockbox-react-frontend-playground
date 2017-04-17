import React, { Component, PropTypes } from 'react';

class SearchFilter extends Component {
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
    return <input placeholder="Search" style={style}/>
  }
}

export default SearchFilter;