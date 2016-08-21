require 'digit_parser'

class NumberParser
  
  def initialize(input)
    @input = input
  end

  def value
    @value ||= parse
  end
  
  def illegible?
    value.include? '?'
  end
  
  def valid?
    !illegible? && checksum == 0
  end
  
  private
  
    def checksum
      digit_array = value.chars.map(&:to_i)
      digit_array.each_with_index.inject(0) { |sum, (digit,i)| sum + digit * (9-i) } % 11
    end
  
    def parse
      (0..8).inject('') { |result, i| result += DigitParser.new.parse(digit_at(i)) }
    end
  
    def digit_at(i)
      @input[i*3..2+i*3] + @input[27+i*3..29+i*3] + @input[54+i*3..56+i*3]
    end
end
