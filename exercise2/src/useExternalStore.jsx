import { useSyncExternalStore } from "react";
import {todoStore} from './todoStore';

export function TodoApp(){
    const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);

    return (
        <>
            <button onClick={()=> todoStore.addTodo()}>Add todo</button>
            <hr/>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}