(function() {
  'use strict';
  var ELEMENT_DIV = '__';
  var MOD_DIV = '_';

  function or(param1, param2) {
    return param1 !== undefined ? param1 : param2;
  }

  function getElement(block, element) {
    var div =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : ELEMENT_DIV;
    if (element) return [block, div, element].join('');
    return block;
  }
  function getModifier(item, modifier) {
    var div =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : MOD_DIV;
    if (!modifier) return item;
    if (typeof modifier === 'string') {
      return [item, div, modifier].join('');
    }
    var mods = Array.prototype.concat([], modifier);
    var result = [];
    for (var i = 0; i < mods.length; i++) {
      result.push([item, div, mods[i]].join(''));
    }
    return result.join(' ');
  }
  function createBlock(block) {
    var elementDiv = ELEMENT_DIV;
    var modDiv = MOD_DIV;
    function _getElement(element, eDiv) {
      return getElement(block, element, or(eDiv, elementDiv));
    }

    function _getModifier(modifier, element, eDiv, mDiv) {
      var el = element ? _getElement(element, or(eDiv, elementDiv)) : block;
      return getModifier(el, modifier, or(mDiv, modDiv));
    }

    function setDivs(eDiv, mDiv) {
      elementDiv = or(eDiv, ELEMENT_DIV);
      modDiv = or(mDiv, MOD_DIV);
    }

    return {
      getElement: _getElement,
      getModifier: _getModifier,
      setDivs: setDivs
    };
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.getElement = getElement;
    module.exports.getModifier = getModifier;
    module.exports.createBlock = createBlock;
  } else if (typeof define === 'function' && define.amd) {
    define('getElement', [], function() {
      return getElement;
    });
    define('getModifier', [], function() {
      return getModifier;
    });
    define('createBlock', [], function() {
      return createBlock;
    });
  }
})();
