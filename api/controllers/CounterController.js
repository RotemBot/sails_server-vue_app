/**
 * CounterController
 *
 * @description :: Server-side logic for managing counters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Counter.create({
      value: 0
    }).exec(function(err, counter) {
      if(err) {
        return res.serverError(err);
      }
      res.redirect('/counter/show/' + counter.id);
      //res.redirect('/vue-app/src/show/' + counter.id);
    });
  },

  show: function(req, res, next) {
    Counter.findOne({id: req.params['id']})
      .exec(function foundUser(err, counter){
        if(err) return next(err);
        if(!counter) return next();
        res.view({
          counter: counter
        });
      });
  },

  updateCounter: function(req, res, next) {
    Counter.find().exec(function(err, myRecords) {
      var myCounter = myRecords.pop();
      var newValue = parseInt(req.param('value'));
      console.log("This is the new value: " + newValue);
      myCounter.value = newValue;
      myCounter.save(
        function(err) {
          console.log('Counter with ID ' + myCounter.id + ' now has value of ' + myCounter.value);
      });
      res.send("Counter value is " + myCounter.value);
    });
  }
};

