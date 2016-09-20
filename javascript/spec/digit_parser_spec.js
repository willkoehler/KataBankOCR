describe("DigitParser", function() {

  describe("#parse", function() {

    it("parses digits", function() {
      var parser = new DigitParser();

      tests = [
        { when : " _ " +
                 "| |" +
                 "|_|",  expect : '0' },
        { when : "   "+
                 "  |"+
                 "  |",  expect : '1' },
        { when : " _ " +
                 " _|" +
                 "|_ ",  expect : '2' },
        { when : " _ " +
                 " _|" +
                 " _|",  expect : '3' },
        { when : "   " +
                 "|_|" +
                 "  |",  expect : '4' },
        { when : " _ " +
                 "|_ " +
                 " _|",  expect : '5' },
        { when : " _ " +
                 "|_ " +
                 "|_|",  expect : '6' },
        { when : " _ " +
                 "  |" +
                 "  |",  expect : '7' },
        { when : " _ " +
                 "|_|" +
                 "|_|",  expect : '8' },
        { when : " _ " +
                 "|_|" +
                 " _|",  expect : '9' }
      ];

      tests.forEach(function(test) {
        expect(parser.parse(test.when)).toEqual(test.expect)
      });
    });

    it("returns ? if it doesn't recognize the digit", function() {
      var parser = new DigitParser();
      expect(parser.parse('xx')).toEqual('?');
    });

  });

});
