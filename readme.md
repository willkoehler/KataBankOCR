# Partial Solution of KataBankOCR

<http://codingdojo.org/cgi-bin/index.pl?KataBankOCR>

## Steps to run the code

Currently the code is exercised solely via the RSpec tests.

Start by installing necessary gems

    cd [folder where you cloned the code]
    bundle

Then run the tests

    bin/rspec

Or use guard to run the tests automatically as you work

    bundle exec guard

## Status

I completed User Story #1 and #2. While not directly testing the user stories, `number_parser_spec.rb`
contains specs that exercise the functionality of #1 and #2. There are probably some edge cases I'm not
handling. For example what happens if the string passed to NumberParser isn't exactly 27 characters? I 
think that will cause an exception currently. Of course, this could be mitigated in a higher layer as
well. FileParser could be written to always parse out exactly 27 character strings. If it were a client
project, I would spend more time exploring the edge cases before moving on to #3

User Story #3 should be straightforward. It will require completing and wiring together Machine and
FileParser, and possibly a FileWriter class.

User Story #4 will require adding functionality to DigitParser that can produce all possible digits for
a given string. Then NumberParser will need to work through combinations of digits, checking each for
a validity and storing the possible values. Then Machine will need to work out what do to from there
with help of FileWriter. I haven't given this much thought beyond that.

