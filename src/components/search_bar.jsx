import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }



  handleChange = (event) => {
    // Change the state of term
    // which makes sure that the change in input
    // is shown in searchbar (otherwise you would see nothing)
    this.setState({
      term: event.target.value
    });
    // The setState redefines the input value.
    this.props.searchFunction(event.target.value);
    // When this function is triggered onChange inside
    // input then on line 19 we are calling the search-
    // Function and searchFuntion is defined on props.
    // The searchFunction is passed by the parent which is
    // in the App on line 44.
  }


  render() {
    return (
      <input
      value={this.state.term}
      // Since the value attribute is set on our form element,
      // the displayed value will always be this.state.value,
      // making the React state the source of truth.
      type="text"
      className="form-control form-search"
      onChange= {this.handleChange}
      // When the event change is triggered on the input
      // it's calling the method "handleChange" on line 14.
      />
    );
  }
}

export default SearchBar;
