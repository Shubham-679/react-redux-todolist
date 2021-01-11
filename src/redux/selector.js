export const getTodosState = (store) => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];
console.log(getTodoList);

export const getTodoById = (store , id) => 
getTodosState(store) ? { ...getTodosState(store).byIds[id] , id } : {};
console.log(getTodoById)

export const getTodos = (state) => 
getTodoList(state).map(id => getTodoById(state, id))
console.log(getTodos)