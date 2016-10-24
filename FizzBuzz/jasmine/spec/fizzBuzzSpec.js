describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("returns 'fizz' for multiples of 3", function() {

    it('fizz for number 3', function() {
      expect(fizzBuzz.game(3)).toBe('fizz');
    });

    it('not fizz for number 2', function() {
      expect(fizzBuzz.game(2)).not.toBe('fizz');
    });

  });

});
