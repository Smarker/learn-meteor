import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Lists = new Mongo.Collection('Lists');

Lists.schema = new SimpleSchema({
  name: {type: String},
  rating: {type: Number}
});

