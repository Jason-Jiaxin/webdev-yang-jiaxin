let mongoose = require('mongoose');
let websiteSchema = require('./website.schema.server');
let WebsiteModel = mongoose.model('WebsiteModel', websiteSchema);
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;
module.exports = WebsiteModel;

function createWebsiteForUser(website) {
  return WebsiteModel.create(website);
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({_user: userId});
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId)
}


function updateWebsite(websiteId, website) {
  return WebsiteModel.findOneAndUpdate({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.findOneAndRemove({_id: websiteId});
}
