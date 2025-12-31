// Polyfill for deprecated util functions removed in Node.js 20+
// This file should be required before any gulp tasks run
const util = require('util');

// Add back util.isRegExp if it doesn't exist (removed in Node.js 20+)
if (!util.isRegExp) {
  util.isRegExp = function(obj) {
    return obj instanceof RegExp;
  };
}

// Add back other deprecated util functions that might be needed
if (!util.isArray) {
  util.isArray = Array.isArray;
}

if (!util.isBoolean) {
  util.isBoolean = function(obj) {
    return typeof obj === 'boolean';
  };
}

if (!util.isNull) {
  util.isNull = function(obj) {
    return obj === null;
  };
}

if (!util.isNullOrUndefined) {
  util.isNullOrUndefined = function(obj) {
    return obj === null || obj === undefined;
  };
}

if (!util.isNumber) {
  util.isNumber = function(obj) {
    return typeof obj === 'number';
  };
}

if (!util.isString) {
  util.isString = function(obj) {
    return typeof obj === 'string';
  };
}

if (!util.isSymbol) {
  util.isSymbol = function(obj) {
    return typeof obj === 'symbol';
  };
}

if (!util.isUndefined) {
  util.isUndefined = function(obj) {
    return obj === undefined;
  };
}

if (!util.isObject) {
  util.isObject = function(obj) {
    return obj !== null && typeof obj === 'object';
  };
}

if (!util.isDate) {
  util.isDate = function(obj) {
    return obj instanceof Date;
  };
}

if (!util.isError) {
  util.isError = function(obj) {
    return obj instanceof Error;
  };
}

if (!util.isFunction) {
  util.isFunction = function(obj) {
    return typeof obj === 'function';
  };
}

if (!util.isPrimitive) {
  util.isPrimitive = function(obj) {
    return obj === null || (typeof obj !== 'object' && typeof obj !== 'function');
  };
}

module.exports = util;

