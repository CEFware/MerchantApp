/**
 * Created by piyushthapa on 3/4/15.
 */
db.services=new Mongo.Collection('services');

Meteor.methods({
   'insertServices':function(services){
       services.postedAt=new Date(),
           services.postedBy=Meteor.userId(),
           services.comments=[],
           services.stars=null
        return db.services.insert(services);
   }

});