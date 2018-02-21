(function() {
  'use strict';
  function getElement(block, element) {
    var div =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '__';
    if (element) return [block, div, element].join('');
    return block;
  }
  function getModifier(item, modifier) {
    var div =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_';
    if (!modifier) return item;
    if (typeof modifier === 'string') {
      return [item, div, modifier].join('')
    }
    var mods = Array.prototype.concat([], modifier);
    var result = [];
    for (var i = 0; i < mods.length; i++) {
      result.push([item, div, mods[i]].join(''));
    }
    return result.join(' ');
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getElement = getElement;
    module.exports.getModifier = getModifier;
  } else if (typeof define === 'function' && define.amd) {
    define('getElement', [], function() {
      return getElement;
    });
    define('getModifier', [], function() {
      return getModifier;
    });
  }
})();
