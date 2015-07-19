var LoadCentralPage = require('../load_central_page_object.js');

describe('LoadController', function() {
  var loadCentralPage = null;

  beforeEach(function() {
    loadCentralPage = new LoadCentralPage();
    loadCentralPage.get();
  });

  describe('the Buy 100 button is clicked', function() {

    var cellNumber = '09170331994';
    describe('button was clicked with phone number', function() {
      beforeEach(function() {
        loadCentralPage.setCellNumber(cellNumber);
        loadCentralPage.buyLoad();
      });

    });
  });
});