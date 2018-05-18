const RecordCollector = require('../recordCollector.js');
const Record = require('../record.js');
const assert = require('assert');

describe('Collector', function() {

  let collector;
  let record1;
  let record2;
  let record3;
  let record4;

  beforeEach(function() {

    record1 = new Record("Pina Colada", "Somebody", "Classic Rock", 3);
    record2 = new Record("Another record", "Some dude", "Pop", 5);
    record3 = new Record("A good song", "Dudette", "Classical", 10);

    collector = new RecordCollector();

  })

  it ('should start with no funds', function(){
    const actual = collector.funds;
    assert.strictEqual(actual, 0)
  });

  xit ('should be able to add funds', function(){


  });

})
