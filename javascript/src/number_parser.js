function NumberParser(input) {
  
  var _input = input
  var _digit_parser = new DigitParser

  var value = function() {
    var result = ''
    for(i=0; i<=8; i++) {
      result += _digit_parser.parse(digit_at(i))
    }
    return(result);
  }
  
  var is_illegible = function() {
    return(value().includes('?'));
  }

  var is_valid = function() {
    return(!is_illegible() && checksum() == 0);
  }

  // private

  var checksum = function() {
    var digit_array = value().split('').map(function(val) { return(parseInt(val)); });
    return(digit_array.reduce(function(sum, digit, i, arr) { return(sum + digit * (9-i)) }, 0) % 11);
  }

  var digit_at = function(i) {
    return(_input.slice(i*3, 3+i*3) + _input.slice(27+i*3, 30+i*3) + _input.slice(54+i*3, 57+i*3));
  }

  // Public API
  this.value = value;
  this.is_illegible = is_illegible;
  this.is_valid = is_valid;
}