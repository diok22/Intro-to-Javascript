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

  describe("returns 'buzz' for multiples of 5", function() {

    it('buzz for number 10', function() {
      expect(fizzBuzz.game(10)).toBe('buzz');
    });

    it('not buzz for number 7', function() {
      expect(fizzBuzz.game(7)).not.toBe('buzz');
    });

  });

  describe("returns 'fizzbuzz' for multiples of 15", function() {

    it('fizzbuzz for number 15', function() {
      expect(fizzBuzz.game(15)).toBe('fizzbuzz');
    });

    it('not fizzbuzz for number 7', function() {
      expect(fizzBuzz.game(7)).not.toBe('fizzbuzz');
    });

  });

  describe("returns the number otherwise", function() {

    it('gets number back, 13 for 13', function() {
      expect(fizzBuzz.game(13)).toBe(13);
    });

  });

});
