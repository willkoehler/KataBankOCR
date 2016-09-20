describe("NumberParser", function() {

  describe("#parse", function() {

    it("parses numbers", function() {
      
      tests = [
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "| || || || || || || || || |" +
                 "|_||_||_||_||_||_||_||_||_|",  expect : "000000000" },
        { when : "                           " +
                 "  |  |  |  |  |  |  |  |  |" +
                 "  |  |  |  |  |  |  |  |  |",  expect : "111111111" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _| _| _| _| _| _| _| _| _|" +
                 "|_ |_ |_ |_ |_ |_ |_ |_ |_ ",  expect : "222222222" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _| _| _| _| _| _| _| _| _|" +
                 " _| _| _| _| _| _| _| _| _|",  expect : "333333333" },
        { when : "                           " +
                 "|_||_||_||_||_||_||_||_||_|" +
                 "  |  |  |  |  |  |  |  |  |",  expect : "444444444" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
                 " _| _| _| _| _| _| _| _| _|",  expect : "555555555" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
                 "|_||_||_||_||_||_||_||_||_|",  expect : "666666666" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "  |  |  |  |  |  |  |  |  |" +
                 "  |  |  |  |  |  |  |  |  |",  expect : "777777777" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "|_||_||_||_||_||_||_||_||_|" +
                 "|_||_||_||_||_||_||_||_||_|",  expect : "888888888" },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 "|_||_||_||_||_||_||_||_||_|" +
                 " _| _| _| _| _| _| _| _| _|",  expect : "999999999" },
        { when : "    _  _     _  _  _  _  _ " +
                 "  | _| _||_||_ |_   ||_||_|" +
                 "  ||_  _|  | _||_|  ||_| _|",  expect : "123456789" }
      ]

      tests.forEach(function(test) {
        var parser = new NumberParser(test.when);
        expect(parser.value()).toEqual(test.expect)
      });
    });
  });

  // TODO think more about the test values here to make sure coverage is complete
  describe("#is_valid", function() {
    it("is true if the checksum is valid", function() {

      tests = [
        { when : "                           " +
                 "  |  |  |  |  |  |  |  |  |" +
                 "  |  |  |  |  |  |  |  |  |",   expect : false },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _| _| _| _| _| _| _| _| _|" +
                 "|_ |_ |_ |_ |_ |_ |_ |_ |_ ",   expect : false },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _| _| _| _| _| _| _| _| _|" +
                 " _| _| _| _| _| _| _| _| _|",   expect : false },
        { when : " _                         " +
                 "  |  |  |  |  |  |  |  |  |" +
                 "  |  |  |  |  |  |  |  |  |",   expect : true },
        { when : " _  _  _  _  _  _     _  _ " +
                 "  |  |  |  |  |  |  |  |  |" +
                 "  |  |  |  |  |  |  |  |  |",   expect : true },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _|| || ||_|| || || || || |" +
                 "|_ |_||_||_||_||_||_||_||_|",   expect : true },
        { when : " _  _  _  _  _  _  _  _  _ " +
                 " _| _| _| _||_| _| _| _| _|" +
                 " _| _| _| _| _| _| _| _| _|",   expect : true },
        { when : "    _  _     _  _  _  _  _ " +
                 "  | _| _||_||_ |_   ||_||_|" +
                 "  ||_  _|  | _||_|  ||_| _|",   expect : true }
      ]

      tests.forEach(function(test) {
        var parser = new NumberParser(test.when);
        expect(parser.is_valid()).toEqual(test.expect)
      });
    });
    
    it("is false for invalid numbers", function() {
      parser = new NumberParser("x")
      expect(parser.is_valid()).toBe(false)
    });
  });

  describe("#illegible?", function() {
    // TODO
  });
});