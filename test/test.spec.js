const { getElement, getModifier } = require('../index');

describe('bemb tests', () => {
  describe('getElement', () => {
    it('getElement returns valid classname', () => {
      expect(getElement('b', 'e')).toBe('b__e');
      expect(getElement('b', 'e', '--')).toBe('b--e');
      expect(getElement('b')).toBe('b');
      expect(getElement()).toBe(undefined);
    });

    it('getModifier returns valid classname', () => {
      expect(getModifier('e', 'm')).toBe('e_m');
      expect(getModifier('e', 'm', '-')).toBe('e-m');
      expect(getModifier('e')).toBe('e');
      expect(getModifier()).toBe(undefined);
      expect(getModifier('e', ['m', 'm2'])).toBe('e_m e_m2');
    });
  });
});