require 'digit_parser'

describe DigitParser do

  describe "#parse" do

    it "parses digits" do
      parser = DigitParser.new

      expected = {
        " _ " +
        "| |" +
        "|_|"   => '0',
        "   "+
        "  |"+
        "  |"   => '1',
        " _ " +
        " _|" +
        "|_ "   => '2',
        " _ " +
        " _|" +
        " _|"    => '3',
        "   " +
        "|_|" +
        "  |"   => '4',
        " _ " +
        "|_ " +
        " _|"   => '5',
        " _ " +
        "|_ " +
        "|_|"   => '6',
        " _ " +
        "  |" +
        "  |"   => '7',
        " _ " +
        "|_|" +
        "|_|"   => '8',
        " _ " +
        "|_|" +
        " _|"   => '9'
      }
      
      # NOTE: This is a technique I use when testing large numbers of inputs through a functon.
      # The test doesn't abort on the first match failure. The rspec matcher outputs a nice diff
      # showing the failed matches. For a small number of cases like this, it may be clearer to
      # just call parse() for each string. 
      actual = expected.keys.each_with_object({}) do |digit, h|
        h[digit] = parser.parse(digit)
      end
      expect(actual).to eq(expected)
    end
    
    it "returns ? if it doesn't recognize the digit" do
      expect(DigitParser.new.parse('xx')).to eq('?')
    end
  end
end