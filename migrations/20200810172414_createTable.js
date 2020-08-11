
exports.up = function(knex) {
    return knex.schema.createTable("recipes", (table) => {
        table.increments("id");
      
        table.text("name").notNullable();
    
        table.text("type").notNullable();
    
        table.text("ingredients").notNullable();

        table.text("method").notNullable();
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTable("recipes");
    };
