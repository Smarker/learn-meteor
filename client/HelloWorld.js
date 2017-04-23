import React from 'react';

import ListContainer from './List.js';
import ListItemForm from './ListItemForm.js';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ListContainer />
        <ListItemForm />
      </div>
    );
  }
}