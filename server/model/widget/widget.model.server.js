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
    return pageModel.addWidget(pageId, newWidget._id).then(function (page) {
      return findWidgetById(newWidget._id);
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
  return WidgetModel.findOneAndUpdate({_id: widgetId}, widget, {new:true});
}

function deleteWidget(widgetId) {
  return findWidgetById(widgetId).then(function (widget) {
    return pageModel.deleteWidget(widget).then(function (page) {
      return WidgetModel.findOneAndRemove({_id: widgetId});
    })
  })
}


function reorderWidget(pageId, start, end) {
  return pageModel.findPageById(pageId).then(function (page) {
    if (start < end) {
      for (let i = start; i < end; i++) {
        swap(page, i, i+1);
      }
    } else {
      for (let i = start; i > end; i--) {
        swap(page, i, i-1);
      }
    }
    return pageModel.updatePage(pageId, page);
  });
}

function swap(page, i, j) {
  let temp = page.widgets[i];
  page.widgets[i] = page.widgets[j];
  page.widgets[j] = temp;
}
