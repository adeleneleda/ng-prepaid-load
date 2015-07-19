describe('LoadController', function() {

  var loadPanels = element.all(by.css('.load-option'));
  var congratsMessage = element(by.css('#congrats-div'));

  var loadingHistory = element.all(by.repeater('item in transactions'))

  beforeEach(function() {
    browser.get('/');
  });

  describe('on initial load', function() {

    it('initially displays three option', function() {
      expect(loadPanels.count()).toBe(3);
    });

    it('shows 100 PHP as first option', function() {
    
      var firstLP = loadPanels.get(0);
      var h4 = firstLP.element(by.css('h4'));

      expect(h4.getText()).toBe('Php 100 Load');
    });

    it('shows 300 PHP as first option', function() {

      var secondLP = loadPanels.get(1);
      var h4 = secondLP.element(by.css('h4'));

      expect(h4.getText()).toBe('Php 300 Load');
    });

    it('shows 500 PHP as first option', function() {
      
      var thirdLP = loadPanels.get(2);
      var h4 = thirdLP.element(by.css('h4'));

      expect(h4.getText()).toBe('Php 500 Load');
    });

    it('should not show the congratulations message', function() {
      expect(congratsMessage.isDisplayed()).toBeFalsy();
    });

    it('should show the loading history as empty', function() {
      expect(loadingHistory.count()).toBe(0);
    });
  });

  describe("the 'Buy 100' button is clicked", function() {

    var hundredInput = element(by.css('#input-100'));
    var hundredBtn = element(by.css('#btn-100'));

    var successNumber = element(by.binding('successNumber'));
    var successAmount = element(by.binding('successAmount'));

    var cellNumber = '09170331994';

    describe('button was clicked with phone number', function() {
      beforeEach(function() {
        hundredInput.sendKeys(cellNumber);
        hundredBtn.click();
      });

      it('should display the congratulations message', function() {
        expect(congratsMessage.isDisplayed()).toBeTruthy();
      });
      it('should display the congratulations message with the number', function() {
        expect(successNumber.getText()).toBe(cellNumber);
      });
      it('should display the congratulations message with the amount', function() {
        expect(successAmount.getText()).toBe('100');
      });

      it('should clear the phone number input box', function() {
        expect(hundredInput.getText()).toBe('');
      });

      it('should add the new transaction to loading history', function() {
        expect(loadingHistory.count()).toBe(1);
      });
    });

    describe('button was clicked with empty phone number', function() {

      beforeEach(function() {
        hundredInput.sendKeys('');
        hundredBtn.click();
      });

      it('should not display the success message', function() {
        expect(congratsMessage.isDisplayed()).toBeFalsy();
      });
    });
  });
});






















