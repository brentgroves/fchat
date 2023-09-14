import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table) => {
      table.string('name')
      table.string('family_name')
      table.string('given_name')

    })
  }
  
  export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table) => {
      table.dropColumn('name')
      table.dropColumn('family_name')
      table.dropColumn('given_name')
    })
  }
  