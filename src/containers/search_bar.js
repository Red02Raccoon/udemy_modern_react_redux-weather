import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      terms: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          onChange={this.handleInputChange}
          placeholder="Get a five-day forecast in your favorite cities."
          value={this.state.terms}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
