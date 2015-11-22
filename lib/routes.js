Router.route('/', {
  name: "home",
});
Router.configure({
  layoutTemplate: 'layout'
});

Router.route( "/ping", { where: "server" } )
    .get( function() {

        this.response.setHeader( 'access-control-allow-origin', '*' );
        this.response.setHeader('Content-Type', 'application/json');
        // this.response.end(JSON.stringify(blockList));
    })
 .post( function() {
  //  console.log(this.request.body);
   this.response.setHeader( 'access-control-allow-origin', '*' );
   this.response.setHeader('Content-Type', 'application/json');
   var response = {statusText: 'you got it!'};
   this.response.end(JSON.stringify(response));
 });

Router.route( "/heatrate", { where: "server" } )
    .get( function() {

        this.response.setHeader( 'access-control-allow-origin', '*' );
        this.response.setHeader('Content-Type', 'application/json');
        // this.response.end(JSON.stringify(blockList));
    })
 .post( function() {
   console.log(this.request.body);
   console.log(new Date());
  //  console.log(_.isObject(this.request.body));
   Meteor.call('insertHeatData', this.request.body);

   this.response.setHeader( 'access-control-allow-origin', '*' );
   this.response.setHeader('Content-Type', 'application/json');
   var response = {statusText: 'you got it!'};
   this.response.end(JSON.stringify(response));
 });

 Router.route( "/heatrate2", { where: "server" } )
     .get( function() {

         this.response.setHeader( 'access-control-allow-origin', '*' );
         this.response.setHeader('Content-Type', 'application/json');
         // this.response.end(JSON.stringify(blockList));
     })
  .post( function() {
    console.log(this.request.body);
    console.log(new Date());
   //  console.log(_.isObject(this.request.body));
    Meteor.call('insertHeatData', this.request.body);

    this.response.setHeader( 'access-control-allow-origin', '*' );
    this.response.setHeader('Content-Type', 'application/json');
    var response = {statusText: 'you got it!'};
    this.response.end(JSON.stringify(response));
  });
