/*!
 * UnicodeJS TextString class.
 *
 * @copyright 2013–2015 UnicodeJS team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

var graphemebreak = require('./unicodejs.graphemebreak');

/**
 * This class provides a simple interface to fetching plain text
 * from a data source. The base class reads data from a string, but
 * an extended class could provide access to a more complex structure,
 * e.g. an array or an HTML document tree.
 *
 * @class unicodeJS.TextString
 * @constructor
 * @param {string} text Text
 */
var TextString = function UnicodeJSTextString( text ) {
	this.clusters = graphemebreak.splitClusters( text );
};

/* Methods */

/**
 * Read grapheme cluster at specified position
 *
 * @method
 * @param {number} position Position to read from
 * @return {string|null} Grapheme cluster, or null if out of bounds
 */
TextString.prototype.read = function ( position ) {
	var clusterAt = this.clusters[ position ];
	return clusterAt !== undefined ? clusterAt : null;
};

/**
 * Return number of grapheme clusters in the text string
 *
 * @method
 * @return {number} Number of grapheme clusters
 */
TextString.prototype.getLength = function () {
	return this.clusters.length;
};

/**
 * Return a sub-TextString
 *
 * @param {number} start Start offset
 * @param {number} end End offset
 * @return {unicodeJS.TextString} New TextString object containing substring
 */
TextString.prototype.substring = function ( start, end ) {
	var textString = new TextString( '' );
	textString.clusters = this.clusters.slice( start, end );
	return textString;
};

/**
 * Get as a plain string
 *
 * @return {string} Plain javascript string
 */
TextString.prototype.getString = function () {
	return this.clusters.join( '' );
};

module.exports = TextString;