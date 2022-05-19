module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'item',
    {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING,
      },

      item_description: {
        type: DataTypes.STRING(1000),
      },

      item_quantity: {
        type: DataTypes.INTEGER,
      },

      item_status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Item;
};
