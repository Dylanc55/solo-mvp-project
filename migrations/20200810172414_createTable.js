
exports.up = function(knex) {
    return knex.schema.createTable("recipes", (table) => {
        table.increments("id");
      
        table.text("name").notNullabl();
    
        table.text("type").notNullabl();
    
        table.text("ingredients").notNullabl();

        table.text("method").notNullabl();
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTable("recipes");
    };
