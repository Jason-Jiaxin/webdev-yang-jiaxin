let mongoose = require('mongoose');
let pageSchema = require('./page.schema.server');
let PageModel = mongoose.model('PageModel', pageSchema);
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
PageModel.addWidget = addWidget;
module.exports = PageModel;

function createPage(page) {
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_website: websiteId});
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.findOneAndUpdate({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.findOneAndRemove({_id: pageId});
}

function addWidget(pageId, widgetId) {
  findPageById(pageId).then(function (page) {
    page.widgets.push(widgetId);
    return page.save();
  })
}
