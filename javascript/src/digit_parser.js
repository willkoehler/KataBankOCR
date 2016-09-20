// NOTE: This is simple now, but I'm pretty sure this class will be justified in User Story #4
function DigitParser() {

  // TODO should this work like Number parser, taking the digit string in the constructor and
  // then adding a digit member function? This will be clearer when we work on case #4
  this.parse = function(digit) {
    index = Digits.findIndex(function(e) { return(e == digit) } );
    return((index == -1) ? '?' : index.toString());
  }

  var Digits = [
    " _ " +
    "| |" +
    "|_|",
    "   "+
    "  |"+
    "  |",
    " _ " +
    " _|" +
    "|_ ",
    " _ " +
    " _|" +
    " _|",
    "   " +
    "|_|" +
    "  |",
    " _ " +
    "|_ " +
    " _|",
    " _ " +
    "|_ " +
    "|_|",
    " _ " +
    "  |" +
    "  |",
    " _ " +
    "|_|" +
    "|_|",
    " _ " +
    "|_|" +
    " _|",
  ]

}