import React, { useState, useEffect, useRef } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css"

interface Props {
    state: Todo[],
    setState: React.Dispatch<React.SetStateAction<Todo[]>>,
    todo: Todo
}
export default function SingleTodo({ state, todo, setState }: Props) {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setState(
            state.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };

    const handleDelete = (id: number) => {
        setState(state.filter((todo) => todo.id !== id));
    };

    const handleDone = (id: number) => {
        setState(
            state.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);
    return (
        <form className="todosSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todosSingle--text"
                    ref={inputRef}
                />
            ) : todo.isDone ? (
                <s className="todosSingle--text">{todo.todo}</s>
            ) : (
                <span className="todosSingle--text">{todo.todo}</span>
            )}
            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}
