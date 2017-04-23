import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import { Lists } from '../imports/Lists';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event, key) {
    Lists.remove({_id: key});
  }

  render() {
    const listItems = this.props.lists.map((item) =>
      <div key={item._id}>
        <li>
          {item.name} {item.rating}
        </li> 
        <button onClick={(event) => {this.handleDelete(event, item._id)}}>Delete</button>
      </div>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default ListContainer = createContainer( () => {
	Meteor.subscribe('Lists');
	return { lists: Lists.find().fetch() }
}, List);