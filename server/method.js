Meteor.methods({
  insertHeatData: function(dataObject){
    console.log(dataObject);
    dataObject.createdAt = new Date();
    HeatData.insert(dataObject);
  }
})
