const mysqlConnection = require("../DB/dbConnection");

exports.getCompleteRecipes = async (req, res, next) => {
  try {
    let all_recipes = await mysqlConnection.query(
      " select *  from all_recipes LEFT JOIN users ON users.user_id = all_recipes.user_id"
    );

    if (all_recipes[0][0].length === 0) {
      const error = new Error("Recipes not found");
      error.statusCode = 400;
      throw error;
    }

    // for (let password in all_recipes) {
    //   all_recipes[password].password = undefined;
    // }
    // all_recipes[0].password = undefined;
    res.status(200).json(all_recipes[0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
