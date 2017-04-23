import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';

export const Lists = new Mongo.Collection('Lists');

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.lists.map((item) =>
      <li key={item._id}>{item.name} {item.rating}</li>
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