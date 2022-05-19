module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'comment',
    {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_text: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Comment;
};
