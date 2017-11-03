var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WebsiteSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'user'},
  name: String,
  description: String,
  pages:  [{ type: Schema.Types.ObjectId, ref: 'page' }],
  dateCreated: { type: Date, default: Date.now }
}, { collection: 'website' });

module.exports = WebsiteSchema;
