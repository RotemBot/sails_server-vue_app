/**
 * Created by rotem on 15/06/2017.
 */
module.exports = function(req, res, next) {
  res.locals.flash = {};

  if(!req.session.flash) return next();

  res.locals.flash = _.clone(req.session.flash);

  //clear flash
  req.session.flash = {};

  next();
};
