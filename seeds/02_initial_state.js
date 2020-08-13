
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert({
        name: "Spiced Chicken Tacos",
        type: "Mexican",
        ingredients: "FOR THE TACOS: 3 tbsp. extra-virgin olive oil, 4 boneless skinless chicken breasts, cut into 1 inch strips, Kosher salt, Freshly ground black pepper, 2 tsp. chili powder, 2 tsp. cumin, 1/2 tsp. garlic powder, 1/4 tsp. paprika, 1/4 tsp. cayenne, 8 corn tortillas, warmed. TOPPINGS: Sour cream, Thinly sliced red onion, Diced tomatoes, Shredded Monterey Jack, Diced avocados, Fresh cilantro, Lime wedges",
        method: "In a large skillet over medium heat, heat oil. Season chicken with salt and pepper and add to skillet. Cook until golden, 6 minutes. Add spices and stir until coated, 1 minute more. If needed, add a little more oil or water to help spices coat chicken. Build tacos: In tortillas, layer chicken and desired toppings. Serve with lime wedges."
      });
    });
};
