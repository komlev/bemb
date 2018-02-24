# bemb

*/'bembɪ/*

tiny BEM utility library

## API
There are three methods *getElement*, *getModifier*, *createBlock*

### getElement
Return you proper element class in BEM notation

```js
getElement('block', 'element') // block__element
```

Default separator is "**__**" but this could be changed with third parameter

```js
getElement('block', 'element', '--') // block--element
```

### getModifier
Return you proper modifier class in BEM notation

```js
getModifier('block__element', 'modifier') // block__element_modifier
```

Default separator is "**_**" but this could be changed with third parameter

```js
getModifier('block__element', 'modifier', '-') // block__element-modifier
```

### createBlock
Returns object with three methods *getElement*, *getModifier*, *getDivs*

```js
var block = createBlock('b');
block.getElement('e'); // b__e
block.getModifier('m'); // b_m
block.getModifier('m', 'e') // b__e_m
block.setDivs('--', '-');
block.getModifier('m', 'e') // b--e-m
```
