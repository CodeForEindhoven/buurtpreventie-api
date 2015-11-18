/*!
 * User model
 */
(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      real_name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      credit: DataTypes.BOOLEAN
    }, {
      tableName: 'zabuto_user'
    });
    User.removeAttribute('createdAt');
    User.removeAttribute('updatedAt');
    return User;
  };
}());
