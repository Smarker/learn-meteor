import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';



Lists.schema = new SimpleSchema({
  name: {type: String},
  rating: {type: Number}
});

