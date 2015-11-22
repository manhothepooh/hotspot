Template.home.helpers({
  deviceLive: function(){
    return HeatData.find({deviceId: "asda"}, {sort: {createdAt: -1}, limit: 1});
  },
  // device2: function(){
  //   return HeatData.find({deviceId: 2}, {sort: {createdAt: -1}, limit: 1}).fetch();
  // },
  // radius: function(){
  //   return (this*50).toString() + "&percnt;";
  // }
  bgcolorR: function(){
    return Math.ceil(255*this);
  },
  bgcolorB: function(){
    return 255 - Math.ceil(255*this);
  },
  deviceCulminated: function(){
    return HeatData.find({deviceId: "asda"}, {sort: {createdAt: -1}, limit: 10});
  },
  heatRateCulminated: function(){
    var hd = HeatData.find({deviceId: "asda"}, {sort: {createdAt: -1}, limit: 10});
    var heatRateCulminated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(heatRateCulminated.length);
    hd.forEach(function(element, index, array){
      for(var i=0; i<64; i++){
        heatRateCulminated[i] += element.heatRate[i];
      };
    });
    for(var i=0; i<64; i++){
      heatRateCulminated[i] /= 10
    };
    return heatRateCulminated;
  },
  heatRateFlow: function(){
    var hd = HeatData.find({deviceId: "asda"}, {sort: {createdAt: -1}, limit: 2});
    var heatRateFlow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    hd.forEach(function(element, index, array){
      // console.log(index);
      if(index==0){
        for(var i=0; i<64; i++){
          heatRateFlow[i] += element.heatRate[i];
        };
      };
      if(index==1){
        for(var i=0; i<64; i++){
          heatRateFlow[i] -= element.heatRate[i];
        };
      }
    });
    for(var i=0; i<64; i++){
      heatRateFlow[i] = Math.abs(heatRateFlow[i]);
    };
    return heatRateFlow;
  }
})
