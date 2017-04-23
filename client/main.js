import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.js';

//https://guide.meteor.com/react.html#using-with-meteor
Meteor.startup(() => {
  // code to run on server at startup
  render(<HelloWorld />, document.getElementById('app'));
});
