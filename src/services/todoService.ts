import ToDoDomain from '../domain/ToDO';
import ToDo from '../models/TodoModel';

/**
 * Get all the users
 * @returns {Promise<{users: User [], message: string}>}
 */
export const getAllTodos = async (): Promise<{ todos: ToDo[]; message: string }> => {
  // Operation here
  
    try{
        console.log("Fetching todos...")
        const todos = await ToDo.getAllTodos();
        console.log("Fetched todos...")
        return { todos,
            message: 'Todos fetched successfully'
          };
        }
    catch(err){
        throw err;
}
};

export const addTodo = async (newtodo: ToDoDomain[]): Promise<{ todos: ToDo[]; message: string }> => {
    // Operation here
       try{
          const todos = await ToDo.addTodos(newtodo);
          return { todos,
              message: 'Todos added successfully'};
          }
      catch(error){
          throw error;
          }
    }
export const getTodoById = async (id:number): Promise<{todo:any; message:string}> =>{
    try{
        const todo = await ToDo.getTodoById(id);
        return { todo, message: "Retrieved successfully"};     
    }
    catch(error){
        throw error;
    }
}
    export const deleteTodo = async (id: number): Promise<{ message: string }> => {
        try {
            await ToDo.deleteTodo(id);
            return { message: 'Todo deleted successfully' };
        }
        catch (error) {
            throw error;
        }

    }

    export const updateTodo = async (id: number, updatedTodo: any): Promise<{ todo: any; message: string }> => {
        try {
            const todo = await ToDo.updateTodo(id, updatedTodo);
            return { todo, message: 'Todo updated successfully' };
        }
        catch (error) {
            throw error;
        }
    }
