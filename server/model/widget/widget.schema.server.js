var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var widgetTypes = ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT'];
var WidgetSchema = new Schema({
  _page: {type: Schema.Types.ObjectId, ref: 'PageModel'},
  type: { type: String, enum: widgetTypes },
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: { type: Date, default: Date.now }
}, { collection: 'widget' });

module.exports = WidgetSchema;
