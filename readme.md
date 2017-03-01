# Partial Solution of Bank OCR Kata

<http://codingdojo.org/kata/BankOCR/>

## Overview

This is a partial solution to the Bank OCR Kata in two languages: Ruby and Javascript.
The goal for the Ruby solution was to see how far I could get in ~2 hours, documenting
the steps I would take towards a complete solution. (See [Status](#status) below.)

I Later ported the solution to JavaScript to see how closely I could reproduce the
solution, including Ruby structure and coding style, in JavaScript.

There is no runtime environment at this point. The Ruby code is exercised via the RSpec
tests. The JavaScript code is exercised by the Jasmine tests.

## Ruby Solution

### Steps to run the code

This code requires a standard Ruby development environment. The basic components are:

- **Ruby 2.1** (or newer).
- **Build tools**. XCode or GCC and development libraries. Needed to build gems.
- **Bundler 1.12** (or newer). This can be installed with `gem install bundler`

Start by installing necessary gems

    cd [folder where you cloned the code]/ruby
    bundle

Then run the tests

    bin/rspec

Or use guard to run the tests automatically as you work

    bin/guard

## Javascript Solution

### Steps to run the code

No installation is necessary. Just open the Jasmine test runner in a browser:
[javascript/SpecRunner.html](javascript/SpecRunner.html)

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

