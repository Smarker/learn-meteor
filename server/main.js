import '../imports/Tasks.js';

import { Lists } from '../imports/Lists';

Meteor.publish('Lists', function() {
  console.log(Lists.find({}).fetch());
  return Lists.find({});
});