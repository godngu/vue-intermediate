const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneCompleted = (state, payload) => {
    const index = payload.index;
    const todoItem = payload.todoItem;
    state.todoItems[index].completed = !todoItem.completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}
const removeAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneCompleted, removeAllItems }
