const { getElement, getModifier, createBlock } = require('../index');

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

    it('createBlock returns valid classname', () => {
      const block = createBlock('b');
      expect(block).toHaveProperty('getElement');
      expect(block).toHaveProperty('getModifier');
      expect(block.getElement('e')).toBe('b__e');
      expect(block.getElement('e', '--')).toBe('b--e');
      expect(block.getModifier('m')).toBe('b_m');
      expect(block.getModifier('m', 'e')).toBe('b__e_m');
      expect(block.getModifier('m', 'e', '--')).toBe('b--e_m');
      expect(block.getModifier('m', 'e', '--', '-')).toBe('b--e-m');
      block.setDivs('--', '-');
      expect(block.getElement('e')).toBe('b--e');
      expect(block.getModifier('m')).toBe('b-m');
      expect(block.getModifier('m', 'e')).toBe('b--e-m');
      expect(block.getElement('e', '__')).toBe('b__e');
      expect(block.getModifier('m', 'e', '__')).toBe('b__e-m');
      expect(block.getModifier('m', 'e', '__', '_')).toBe('b__e_m');
    });
  });
});
