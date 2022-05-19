const { ItemModel, CityModel, CommentModel } = require('../models');

exports.findAllCities = async (req, res) => {
  try {
    const cities = await CityModel.findAll();
    res.render('../views/create.ejs', { cities: cities });
  } catch {
    res.redirect('/error');
  }
};
