import knex from "../db/knex";

class ToDo {
  public static table = "todos";

  public static async getAllTodos() {
    const todos = await knex(this.table).select();
    return todos;
  }

  public static async addTodos(todo: ToDo[]) {
    const todos = await knex(this.table).insert(todo);
    return todos;
  }

  public static async getTodoById(id:number){
    const todos = await knex(this.table).where({ id }).select();
    return todos;
  }

  public static async deleteTodo(id: number) {
    const todos = await knex(this.table).where({ id }).del();
    return todos;
  }

  public static async updateTodo(id: number, updatedTodo: any) {
    const todos = await knex(this.table).where({ id }).update(updatedTodo);
    return todos;
}

}
export default ToDo;
