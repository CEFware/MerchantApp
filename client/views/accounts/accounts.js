/**
 * Created by piyushthapa on 3/4/15.
 */
Template.accountWrapper.helpers({
   'isLogin':function(type){
       if(Session.get('isLogin'))
        return Session.get('isLogin')==type;
   },
    active:function(type){
        if(Session.get('isLogin') && Session.get('isLogin')==type)
            return 'btn-success'
    }
});
Template.accountWrapper.rendered=function(){
    Session.set('isLogin','login');
    $('body').addClass('bg-dark');
};
Template.accountWrapper.destroyed=function(){
    $('body').removeClass('bg-dark');
}
Template.accountWrapper.events({
   'click .btn-login':function(e,t){
       e.preventDefault();
       if(Session.get('isLogin')=='login')
         return
       else
        Session.set('isLogin','login')
   },
    'click .btn-signup':function(e,t){
        e.preventDefault();
        if(Session.get('isLogin')=='signup')
            return
        else
            Session.set('isLogin','signup')
    }
});
Template.login.events({
   'submit form':function(e,t){
       e.preventDefault();
       var user={
           email: t.find('#email').value,
           password: t.find('#password').value
       };
       Meteor.loginWithPassword(user.email,user.password,function(err,res){
            if(err)
                $('.error').text(err.reason);
            else
               Router.go('/');
       });
   }
});
Template.signup.events({
   'submit form':function(e,t){
       e.preventDefault();
       var user={
           email: t.find('#email').value,
           password: t.find('#password').value,
           profile:{
               name: t.find('#name').value,
               avatar: '/avatar.png'
           }
       }
       Accounts.createUser(user,function(err,res){
           if(err)
               $('.error').text(err.reason);
           else
               Router.go('/');
       });
   }
});