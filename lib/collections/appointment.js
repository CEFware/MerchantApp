/**
 * Created by piyushthapa on 3/4/15.
 */
db={};
db.appointment=new Mongo.Collection('appointment');
Meteor.methods({
   insertAppointment:function(appointment){
       appointment.isNew=true,
           appointment.accepted=false,
           appointment.postedAt=new Date();
      return  db.appointment.insert(appointment);
   },
    acceptAppointment:function(_id){
        return db.appointment.update({_id:_id},{$set:{accepted:true,isNew:false}});
    }
});