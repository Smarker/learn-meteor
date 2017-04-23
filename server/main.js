import '../imports/Tasks.js';

const Lists = new Mongo.Collection('Lists');

Meteor.publish('Lists', function() {
  console.log(Lists.find({}).fetch());
  return Lists.find({});
});