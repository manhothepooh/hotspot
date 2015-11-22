Meteor.publish('heatData', function(){
  return HeatData.find();
})
