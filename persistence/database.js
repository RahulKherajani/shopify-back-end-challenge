const Database = require("@replit/database");
const db = new Database();

exports.setKey = async function setKey(key, value) {
  await db.set(key, value);
};

exports.getKey = async function getKey(key) {
  let value = await db.get(key);
  return value;
};