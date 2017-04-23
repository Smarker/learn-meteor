import React from 'react';

import { Lists } from '../imports/Lists';

export default class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', rating: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let s = {};
    s[type] = event.target.value;
    this.setState(s);
  }

  handleSubmit(event) {
    Lists.insert({name: this.state.name, rating: this.state.rating});
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          name: <input type="text" value={this.state.name} onChange={(event) => {this.handleChange(event, 'name')}} />
        </label>
        <label>
          rating: <input type="text" value={this.state.rating} onChange={(event) => {this.handleChange(event, 'rating')}} />
        </label>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}