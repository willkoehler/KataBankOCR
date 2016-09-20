require 'number_parser'

describe NumberParser do

  describe "#parse" do
    it "parses numbers" do
      
      expected = {
        " _  _  _  _  _  _  _  _  _ " +
        "| || || || || || || || || |" +
        "|_||_||_||_||_||_||_||_||_|"   => "000000000",
        "                           " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |"   => "111111111",
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _| _| _| _| _| _|" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ "   => "222222222",
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _| _| _| _| _| _|" +
        " _| _| _| _| _| _| _| _| _|"   => "333333333",
        "                           " +
        "|_||_||_||_||_||_||_||_||_|" +
        "  |  |  |  |  |  |  |  |  |"   => "444444444",
        " _  _  _  _  _  _  _  _  _ " +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
        " _| _| _| _| _| _| _| _| _|"   => "555555555",
        " _  _  _  _  _  _  _  _  _ " +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
        "|_||_||_||_||_||_||_||_||_|"   => "666666666",
        " _  _  _  _  _  _  _  _  _ " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |"   => "777777777",
        " _  _  _  _  _  _  _  _  _ " +
        "|_||_||_||_||_||_||_||_||_|" +
        "|_||_||_||_||_||_||_||_||_|"   => "888888888",
        " _  _  _  _  _  _  _  _  _ " +
        "|_||_||_||_||_||_||_||_||_|" +
        " _| _| _| _| _| _| _| _| _|"   => "999999999",
        "    _  _     _  _  _  _  _ " +
        "  | _| _||_||_ |_   ||_||_|" +
        "  ||_  _|  | _||_|  ||_| _|"   => "123456789"
      }

      # See note in digit_parser_spec.rb
      actual = expected.keys.each_with_object({}) do |number, h|
        h[number] = NumberParser.new(number).value
      end
      expect(actual).to eq(expected)
    end
  end

  # TODO think more about the test values here to make sure coverage is complete
  describe "#valid?" do
    it "is true if the checksum is valid" do

      expected = {
        "                           " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |"     => false,
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _| _| _| _| _| _|" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ "     => false,
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _| _| _| _| _| _|" +
        " _| _| _| _| _| _| _| _| _|"     => false,
        " _                         " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |"     => true,
        " _  _  _  _  _  _     _  _ " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |"     => true,
        " _  _  _  _  _  _  _  _  _ " +
        " _|| || ||_|| || || || || |" +
        "|_ |_||_||_||_||_||_||_||_|"     => true,
        " _  _  _  _  _  _  _  _  _ " +
        " _| _| _| _||_| _| _| _| _|" +
        " _| _| _| _| _| _| _| _| _|"     => true,
        "    _  _     _  _  _  _  _ " +
        "  | _| _||_||_ |_   ||_||_|" +
        "  ||_  _|  | _||_|  ||_| _|"     => true
      }

      actual = expected.keys.each_with_object({}) do |number, h|
        h[number] = NumberParser.new(number).valid?
      end
      expect(actual).to eq(expected)
    end
    
    it "is false for invalid numbers" do
      expect(NumberParser.new("x" * 81).valid?).to eq(false)
    end
  end

  describe "#illegible?" do
    # TODO
  end
end