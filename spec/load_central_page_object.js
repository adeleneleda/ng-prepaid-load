var LoadCentralPage = function() {
  var hundredInput = element(by.css('#input-100'));
  var hundredBtn = element(by.css('#btn-100'));

  this.get = function() {
    browser.get('/');
  }

  this.setCellNumber = function(cellNumber) {
    hundredInput.sendKeys(cellNumber);
  }

  this.buyLoad = function(cellNum) {
    hundredBtn.click();
  }

  this.successNumber = function() {
    return element(by.binding('successNumber')).getText();
  }

  this.successAmount = function() {
    return element(by.binding('successAmount')).getText();
  }
};

module.exports = LoadCentralPage;