/*!
 * Loopresult model
 */
(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var Remark = sequelize.define("Remark", {
      omschrijving: DataTypes.DATE,
      bijzonderheid: DataTypes.BOOLEAN,
      incident: DataTypes.BOOLEAN
    }, {
      tableName: 'buurtprev_loopresultaat',
    });
    Remark.removeAttribute('createdAt');
    Remark.removeAttribute('updatedAt');
    return Remark;
  };
}());
