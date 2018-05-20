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

RecordCollector.prototype.removeRecord = function(recordToRemove) {
  const index = this.ownedRecords.indexOf(recordToRemove);
  if (index !== -1){ // why do we need this line?
    this.ownedRecords.splice(index, 1);
  }
};

RecordCollector.prototype.buyRecordIfFunds = function(recordToBuy) {
  if (this.funds >= recordToBuy.price){
  this.addRecord(recordToBuy);}

};














module.exports = RecordCollector;;
