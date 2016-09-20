# NOTE: This is simple now, but I'm pretty sure this class will be justified in User Story #4
class DigitParser

  # TODO should this work like Number parser, taking the digit string in the constructor and
  # then adding a digit member function? This will be clearer when we work on case #4
  def parse(digit)
    (Digits.find_index(digit) || '?').to_s
  end

  Digits = [
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

end