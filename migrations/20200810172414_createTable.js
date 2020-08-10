
exports.up = function(knex) {
    return knex.schema.createTable("recipes", (table) => {
        table.text("name");
    
        table.text("type");
    
        table.text("ingredients");

        table.text("method");
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTable("recipes");
    };
