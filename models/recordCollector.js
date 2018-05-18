const RecordCollector = function() {
  this.funds = 0;
  this.ownedRecords = [];
};

RecordCollector.prototype.addFunds = function (amountToAdd) {
  return this.funds += amountToAdd;
}

RecordCollector.prototype.addRecord = function(recordToAdd) {
  this.ownedRecords.push(recordToAdd);
}

RecordCollector.prototype.findRecordByTitle = function(nameOfRecord) {
  return this.ownedRecords.filter(record => record.title === nameOfRecord);

};














module.exports = RecordCollector;;
