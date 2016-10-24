FizzBuzz = function() {};

FizzBuzz.prototype.game = function(number) {
  if (number % 3 == 0) {
    return 'fizz';
  };
  if (number % 5 == 0) {
    return 'buzz';
  };

};
