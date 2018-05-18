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
    price: 1000
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
    // const actual = [
    //   record1
    // ];
    // assert.deepStrictEqual(actual, collector.findRecordByTitle('Pina Colada'));
    const actual = collector.findRecordByTitle('Pina Colada');
    // console.log(record1)
    // console.log(collector.ownedRecords)
    // console.log(collector.findRecordByTitle('Pina Colada'))
    assert.deepStrictEqual(actual,[record1])

  });

  xit ('should be able to remove a record from it’s collection', function(){

  });

  xit ('should be able to buy a record if it has enough funds', function(){

  });

  xit ('should be able to sell a record if it has the record', function(){

  });








})
