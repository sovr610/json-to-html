const $ = require('jquery');
const fs = require('fs');

function produceHtml(json) {
  var pages = json.pages;
  pages.forEach((ind, val) => {
    const pageName = val.pageName;
    var content = [];

    content.push('<!DOCTYPE html>');
    content.push('<HTML>');
    content.push('<HEAD>');
    content.push('<TITLE>' + val.titleName + '</TITLE>');

    var tags = val.tags;

    tags.forEach((indTag, valTag) => {
      if (valTag.tagType === 'input') {
        content.push(
          '<input type="' + valTag.type + '" class="' + valTag.css + '" name='
        );
      }
    });
  });
}

module.exports = produceHtml;
