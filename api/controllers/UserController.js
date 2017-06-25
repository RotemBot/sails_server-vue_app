/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function (req, res) {
    res.view("vue-app/user/new.ejs");
  },

  create: function (req, res, next) {
    console.log(req.params.all());


    User.create({
      fName: req.param('fName'),
      lName: req.param('lName'),
      title: req.param('title'),
      email: req.param('email'),
      encPassword: req.param('encPassword')
    }).exec(function(err, user) {
      if(err) {
        console.log(err);

        //this is not accessible from out view
        req.session.flash = {
          err: err
        };

        res.redirect('/user/new/');
      }


      console.log("Redirecting to /user/show/" + user.id);
      //erase prev err
      req.session.flash = {};
      res.redirect('/user/show/' + user.id);

    });

  },

  // render user profile
  show: function (req, res, next) {
    User.findOne({id: req.params['id']})
      .exec(function foundUser(err, user) {

        if(err) return next(err);
        if(!user) return next();

        console.log("Rendering view for user " + user.fName);
        res.view('vue-app/user/show', {
          user: user
        });


      });
  },

};

