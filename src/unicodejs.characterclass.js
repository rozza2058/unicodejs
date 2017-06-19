/*!
 * UnicodeJS character classes
 *
 * Support for unicode equivalents of JS regex character classes
 *
 * @copyright 2013–2015 UnicodeJS team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */
	/**
	 * @class unicodeJS.characterclass
	 * @singleton
	 */
	var basicLatinDigitRange = [ 0x30, 0x39 ],
		joinControlRange = [ 0x200C, 0x200D ],
		charRangeArrayRegexp = require('./unicodejs').charRangeArrayRegexp,
    derivedcoreproperties = require('./unicodejs.derivedcoreproperties'),
    derivedgeneralcategories = require('./unicodejs.derivedgeneralcategories'),
    characterclass = {};

	characterclass.patterns = {
		// \w is defined in http://unicode.org/reports/tr18/
		word: charRangeArrayRegexp( [].concat(
			derivedcoreproperties.Alphabetic,
			derivedgeneralcategories.M,
			[ basicLatinDigitRange ],
			derivedgeneralcategories.Pc,
			[ joinControlRange ]
		) )
	};

	module.exports = characterclass;
