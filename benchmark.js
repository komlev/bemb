var { getElement, getModifier } = require('./index');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

suite
  .add('getElement', function() {
    getElement('b', 'e');
  })
  .add('getModifier', function() {
    getModifier('e', 'm');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
