import { NextFunction, Request, Response } from 'express';

import * as todoService from '../services/todoService';

export const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  console.log("handling request...")
  const todos = await todoService.getAllTodos()
  console.log("fetched...")
    return res.json(todos)
};

export const addTodos = (req: Request, res: Response, next: NextFunction) => {
  todoService.addTodo(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
};

export const getTodoById = (req: Request, res: Response, next: NextFunction) =>{
  const { id } = req.params;
  const todoId = parseInt(id, 10);
  todoService.getTodoById(todoId).then(data => res.json(data))
  .catch(err => next(err));
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const todoId = parseInt(id, 10);
  todoService.deleteTodo(todoId)
      .then(data => res.json(data))
      .catch(err => next(err));
}

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const todoId = parseInt(id, 10);
  todoService.updateTodo(todoId, req.body)
      .then(data => res.json(data))
      .catch(err => next(err));

};