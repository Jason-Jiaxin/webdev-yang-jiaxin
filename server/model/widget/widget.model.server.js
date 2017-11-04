let mongoose = require('mongoose');
let widgetSchema = require('./widget.schema.server');
let WidgetModel = mongoose.model('WidgetModel', widgetSchema);
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;
module.exports = WidgetModel;

let pageModel = require('../page/page.model.server');
function createWidget(pageId, widget) {
  let newWidget;
  return WidgetModel.create(widget).then(function (w) {
    newWidget = w;
    pageModel.addWidget(pageId, newWidget._id).then(function (page) {
      return newWidget;
    })
  });
}

function findAllWidgetsForPage(pageId) {
  return pageModel.findOne({_id: pageId}).populate('widgets').exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.findOneAndUpdate({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.findOneAndRemove({_id: widgetId});
}


function reorderWidget(pageId, start, end) {

}
