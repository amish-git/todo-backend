// import { table } from "console";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('todos',(table) =>{
        table.increments('id').primary();
        table.string('tasks').notNullable();
        table.boolean('is_completed').notNullable().defaultTo(false);
    })
}


export async function down(knex: Knex): Promise<void> {
        await knex.schema.dropTable('todos');                          
}

