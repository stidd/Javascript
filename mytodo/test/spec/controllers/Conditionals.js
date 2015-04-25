'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  /*Conditionals*/
  /*Allow us to execute certain code based on specific conditions*/
  it('If then Else', function () {
    var shouldBeTrue;
    //If the conditional evaluates to true, the code block is executed
    if (true) {
      shouldBeTrue = true;
    } else { //Else follows up with code to execute only when the If conditional is not satisfied.
      // It is ignored otherwise.
      shouldBeTrue = false;
    }
    expect(shouldBeTrue).toBe(true);
  });
  it('Else-If when two conditionals are not enough', function () {
    var shouldBeTrue;
    //If the conditional does not evaluates to true, the code block is not executed
    if (false) {
      shouldBeTrue = false;
    } else if (true) { //This condition is checked only when the first If conditional is not met
      // These statements are executed if the else condition is met
      shouldBeTrue = true;
    }
    expect(shouldBeTrue).toBe(true);
  });
  /*Complex Conditionals*/
  it('Binary AND', function () {
    var value;
    //Binary AND returns true if All values are true
    value = true && false;
    expect(value).toBe(false);
    value = false && true;
    expect(value).toBe(false);
    value = false && false;
    expect(value).toBe(false);
    value = true && true;
    expect(value).toBe(true);

  });
  it('Binary OR', function () {
    var value;
    //Binary OR returns true if Either value is true
    value = true || false;
    expect(value).toBe(true);
    value = false || true;
    expect(value).toBe(true);
    value = false || false;
    expect(value).toBe(false);
    value = true || true;
    expect(value).toBe(true);
  });

});
