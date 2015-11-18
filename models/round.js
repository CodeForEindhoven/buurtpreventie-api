/*!
 * Loopschema model
 */
(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var Round = sequelize.define("Round", {
      datum: DataTypes.DATE,
      actueel: DataTypes.BOOLEAN,
      bijzonderheden: DataTypes.TEXT,
      reden: DataTypes.TEXT
    }, {
      tableName: 'buurtprev_loopschema',
      createdAt: 'aangemaakt',
      updatedAt: 'gewijzigd',
      classMethods: {
        associate: function(models) {
          Round.belongsTo(models.User, {
            foreignKey: 'loper_id'
          });
          Round.belongsTo(models.Remark, {
            foreignKey: 'resultaat_id'
          });
        }
      }

    });
    return Round;
  };
}());
