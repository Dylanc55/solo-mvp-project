
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert({
        name: "initial_state",
        type: "initial_state",
        ingredients: "initial_state",
        method: "initial_state"
      });
    });
};
