/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //only save the attributes I have defined
  schema: true,

  attributes: {
    fName: {
      type: 'string',
      required: true
    },
    lName: {
      type: 'string',
      required: true

    },
    title: {
      type: 'string'
    },
    email: {
      type: 'string',
      required: true,
      email: true,
      unique: true
    },
    encPassword: {
      type: 'string'
    },

    //safe view
    toJSON: function() {
      var obj = this.toObject();
      delete obj.encPassword;
      delete obj._csrf;
      return obj;
    }


  }
};

