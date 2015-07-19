describe('HelloController', function() {
  var messageH1 = element(by.css('h1'));
  var helloButton = element(by.buttonText('Click to say hello!'));

  beforeEach(function() {
    browser.get('#/hello');
  });

  it("initially shows the default message", function() {
    expect(messageH1.getText()).toBe('Say something!');
  });

  describe("when 'Click to say hello button' is clicked", function() {
    beforeEach(function() {
      helloButton.click();
    });

    it("changes the text", function() {
      expect(messageH1.getText()).toBe('Hello World!');
    });
  });
})