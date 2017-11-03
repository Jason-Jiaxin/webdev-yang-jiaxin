let mongoose = require('mongoose');
let websiteSchema = require('./website.schema.server');
let WebsiteModel = mongoose.model('', websiteSchema);
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

}

function findWebsiteById(websiteId) {

}


function updateWebsite(websiteId, website) {

}

function deleteWebsite(websiteId) {

}
