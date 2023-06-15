let nextId = 0;
let todos = [{ id: nextId++, test: `todo #1` }];
let listeners = [];

export const todoStore = {
    addTodo() {
        todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
        emitChange();
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listeners);
        };
    },
    getSnapshot() {
        return todos;
    }
};

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}