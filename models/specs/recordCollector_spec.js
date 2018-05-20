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

    record1 = new Record({title: 'Pina Colada',
    artist: 'Eagles',
    genre: 'rock',
    price: 10
    });

    record2 = new Record({title: 'Perfect Strangers',
    artist: 'Avicii',
    genre: 'Pop',
    price: 20
    });

    collector = new RecordCollector();

  });

  it ('should start with no funds', function(){
    const actual = collector.funds;
    assert.strictEqual(actual, 0)
  });

  it ('should be able to add funds', function(){
    collector.addFunds(100);
    assert.strictEqual(collector.funds, 100)


  });

  it ('should start with an empty collection of records', function(){
    assert.strictEqual(collector.ownedRecords.length, 0)

  });

  it ('should be able to add a record to it’s collection', function(){
    collector.addRecord(record1);
    // console.log(collector.ownedRecords)
    assert.strictEqual(collector.ownedRecords.length, 1)
  });

  it ('should be able to find a record by title', function(){
    collector.addRecord(record1);
    const actual = collector.findRecordByTitle('Pina Colada');
    assert.deepStrictEqual(actual,[record1])

  });

  it ('should be able to remove a record from it’s collection', function(){
    collector.addRecord(record1);
    collector.addRecord(record2);
    collector.removeRecord(record2);
    assert.strictEqual(collector.ownedRecords.length, 1);
  });

  it ('should be able to buy a record if it has enough funds', function(){
    collector.addFunds(100);
    collector.buyRecordIfFunds(record1);
    assert.strictEqual(collector.ownedRecords.length, 1);
  });

  it ('should not be able to buy a record if it does not have enough funds', function(){
    collector.addFunds(5);
    collector.buyRecordIfFunds(record1);
    assert.strictEqual(collector.ownedRecords.length, 0);
  });

  xit ('should be able to sell a record if it has the record', function(){

  });








})
