# bemb

*/'bembɪ/*

tiny BEM utility library

## API
There are two methods *getElement*, *getModifier*

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
