/**
 * Created by piyushthapa on 3/4/15.
 */
Meteor.publish('services',function(){
    return db.services.find();
});
Meteor.publish('customerAppointment',function(id){
   return db.appointment.find({by:id});
});